const express = require("express");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, './build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
});

app.listen(PORT, () => console.log(`Server listening on PORT:${PORT}`))