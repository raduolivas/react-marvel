import axios from 'axios';
import md5 from 'md5';

const PRIVATE_KEY = '8bd7c4ec7c56f94402ffa3616a81eef036567528'
const PUBLIC_KEY = 'cc41a84866f3b327adb589068e227f68';
const ts = Number(new Date());
const apiHachKey = `?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${md5(ts + PRIVATE_KEY + PUBLIC_KEY)}`;

export const characters = axios.create({baseURL: 'http://gateway.marvel.com/v1/public'});

export const getCharactersUrl = (): string => {
    const ts = Number(new Date());
    return `/characters${apiHachKey}`;
}

export const getCharacterUrl = (id: string): string => {
    return `/characters/${id}${apiHachKey}`;
}