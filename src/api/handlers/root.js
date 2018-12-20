/**
 * Created by ShayanAhmed on 12/7/16.
 */
'use strict';

import {Request, Response} from 'express';
import {parseBody, generateResponse} from '../../utilities';
import fs from 'fs';

export function DefaultHandler(req, res){
    generateResponse(true, 'Root Handler', {}, res);
}

