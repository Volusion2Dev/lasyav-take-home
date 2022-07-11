import axios from 'axios';

import { Block } from '../types';

const blocksApiUrl = 'http://localhost:3000/blocks';

export async function getBlocks(): Promise<Block[]> {
  const resp = await axios.get(blocksApiUrl);
  return resp.data;
}

export async function createBlocks(req,res): Promise<Block[]> {
  const resp = await axios.post('/blocksApiUrl');
  return resp.data;
}
