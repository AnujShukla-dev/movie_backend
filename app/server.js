const express = require("express")

const app = express();
app.use(express.json())



app.get("/getmovies", async (req, res, next) => {
    res.json([{
        key:1,
        name: "Movie A",
        rating: "4.1",
        releaseDate: "21-05-2022"
    },
    {   key:2,
        name: "Movie B",
        rating: "4.5",
        releaseDate: "11-07-2002"
    },

    {   key:3,
        name: "Movie C",
        rating: "4",
        releaseDate: "2-01-2021"
    },
    {   key:4,
        name: "Movie D",
        rating: "2",
        releaseDate: "2-04-1"
    },
    { key:5,
        name: "Movie E",
        rating: "3",
        releaseDate: "21-07-2022"
    },
    { key:6,
        name: "Movie F",
        rating: "4",
        releaseDate: "22-07-2022"
    },
    { key:7,
        name: "Movie G",
        rating: "4",
        releaseDate: "22-07-2022"
    },
    { key:8,
        name: "Movie H",
        rating: "4",
        releaseDate: "22-07-2022"
    },
    { key:9,
        name: "Movie I",
        rating: "4",
        releaseDate: "22-07-2022"
    },
    { key:10,
        name: "Movie J",
        rating: "4",
        releaseDate: "22-07-2022"
    },
    { key:11,
        name: "Movie K",
        rating: "4",
        releaseDate: "22-07-2022"
    },
    { key:12,
        name: "Movie L",
        rating: "4",
        releaseDate: "22-07-2022"
    },
    { key:13,
        name: "Movie M",
        rating: "4",
        releaseDate: "22-07-2022"
    },
    { key:14,
        name: "Movie N",
        rating: "4",
        releaseDate: "22-07-2022"
    },
    { key:15,
        name: "Movie P",
        rating: "4",
        releaseDate: "22-07-2022"
    },
    { key:16,
        name: "Movie Q",
        rating: "4",
        releaseDate: "22-07-2022"
    },

    { key:17,
        name: "Movie R",
        rating: "4",
        releaseDate: "22-07-2022"
    },
    { key:18,
        name: "Movie test",
        rating: "4",
        releaseDate: "22-07-2022"
    },{ key:19,
        name: "Movie S",
        rating: "4",
        releaseDate: "22-07-2022"
    },
    { key:20,
        name: "Movie T",
        rating: "4",
        releaseDate: "22-07-2022"
    },
    { key:21,
        name: "Movie U",
        rating: "4",
        releaseDate: "22-07-2022"
    },
    { key:22,
        name: "Movie V",
        rating: "4",
        releaseDate: "22-07-2022"
    },{ key:23,
        name: "Movie W",
        rating: "4",
        releaseDate: "22-07-2022"
    },
    { key:24,
        name: "Movie X",
        rating: "4",
        releaseDate: "22-07-2022"
    },

])
})


app.listen("3008", () => {
    console.log("server is running on 3008")
});

