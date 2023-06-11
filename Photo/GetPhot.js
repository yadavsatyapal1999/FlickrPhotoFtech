import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import './Getphoto.css';
import { APICONTEXT } from "../Context API/Context";

export default function Photo() {
    const { searchWord, SetsearchWord } = useContext(APICONTEXT);
    const [Data, SetData] = useState([]);
    const [search, Setsearch] = useState(false)
    const [Next, SetNext] = useState(false);
    const perPage = 15;
    const page = 100;

    useEffect(() => {
        axios.post(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6303ac60dcfbdc62bae4eb4fafa1aa47&text=${searchWord}&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`)
            .then(res => {
                SetData(res.data.photos.photo);
            })
            .catch(err => {
                console.log(err)
            })
    }, [Next, search]);

    return <>
        <h1 className="Title-tag">Snap Shot</h1>
        <input type="text" name="for search" placeholder="Type To Search Image" onChange={(e) => {
            SetsearchWord(e.target.value);
        }} />
        <button className="btn" onClick={() => {
            Setsearch(!search);
        }} >Search</button>
        <br />
        <button className="click-btn" onClick={(e) => {
            SetsearchWord("Mountain");
            Setsearch(!search);
        }} >Mountain</button>
        <button className="click-btn" onClick={(e) => {
            SetsearchWord("River");
            Setsearch(!search);
        }}>River</button>
        <button className="click-btn" onClick={(e) => {
            SetsearchWord("Dam");
            Setsearch(!search);
        }}>Dam</button>
        <button className="click-btn" onClick={(e) => {
            SetsearchWord("Nature");
            Setsearch(!search);
        }}>Nature</button>
        <br />
        {Data != null || Data != undefined ? Data.map((item) => {
            const url = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_w.jpg`;
            return <img className="image" src={url} alt="image" />
        }) : <div>No Data Yet</div>}
        <button className="btn" onClick={() => {
            SetNext(!Next);
        }} >Next</button>
    </>
}