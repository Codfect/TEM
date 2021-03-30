import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Class from '../models/Class';

export const getClass = async (req: Request, res: Response): Promise<Response> => {
  const repo = await getRepository(Class).find();
  return res.json(repo);
};

export const createClass = async (req: Request, res: Response): Promise<Response> => {
  const newClass = getRepository(Class).create(req.body);
  const results = await getRepository(Class).save(newClass);

  return res.json(results);
};
