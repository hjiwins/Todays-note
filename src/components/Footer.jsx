import React from "react";

let date = new Date();
let currentYear = date.getFullYear();

function Footer() {
return <footer><p>Copyright Jiwon {currentYear}</p></footer>
}

export default Footer;