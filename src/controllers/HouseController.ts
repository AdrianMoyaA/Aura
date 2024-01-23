
import { RequestHandler } from "express";
import { House } from "../models/House"; 
let houses: Array<House> = new Array<House>;


export const listHouse: RequestHandler = async (req, res) => {
    try {
        if (houses.length == 0)
            return res.sendStatus(404);
        else
            return res.status(200).json(houses);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};


export const getHouse: RequestHandler = async (req, res) => {
    try {
        const searchId = req.query.id;
        if (searchId == undefined || searchId == null) {
            return res.status(400).send('Bad request');
        }
        var search = houses.filter((house) => house.id == searchId);
        if (search.length == 0)
            return res.status(404).send('Not found');
        else
            return res.status(200).json(search);
    } catch (error) {
        return res.sendStatus(500);
    }
};


export const newHouse: RequestHandler = async (req, res) => {
    var houseToAdd: House;
    try {
        houseToAdd = new House(req.body.house.id, req.body.house.city, req.body.house.street, req.body.house.country, req.body.house.owner);
    } catch (error) {
        return res.sendStatus(400);
    }
    try {
        const position = houses.findIndex(h => h.id == houseToAdd.id);
        if (position !== -1) {
            return res.sendStatus(409);
        }
        houses.push(houseToAdd);
        return res.status(201).send('House created');
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

export const deleteHouse: RequestHandler = async (req, res) => {
    try {
        const searchId = req.query.id;
        if (searchId == undefined || searchId == null) {
            return res.status(404).send('Bad request');
        }
        const position = houses.findIndex(h => h.id == searchId);
        if (position !== -1) {
            houses.splice(position, 1)
            if (houses.length = 0)
                return res.status(404).send('Empty');
            else
                return res.sendStatus(200);
        } else
            return res.status(404).send('Not found');
    } catch (error) {
        return res.sendStatus(500);
    }
};

export const modifyHouse: RequestHandler = async (req, res) => {
    var houseToMod: House;
    try {
        houseToMod = new House(req.body.house.id, req.body.house.city, req.body.house.street, req.body.house.country, req.body.house.owner);
    } catch (error) {
        return res.status(404).send('Bad request');;
    }
    try {
        const index = houses.findIndex(h => h.id == houseToMod.id);
        if (index !== -1)
            houses.splice(index, 1, houseToMod)
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};