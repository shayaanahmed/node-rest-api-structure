'use strict';

import {Request, Response, NextFunction} from 'express';


export function log(req, res, next){
    console.log(req.originalUrl);
    next(); //Go to Next Call
}
