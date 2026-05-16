const express = require("express");
const shortid = require("shortid");
const validUrl = require("valid-url");
const QRCode = require("qrcode");

const Url = require("../models/Url");

const router = express.Router();



router.post("/shorten", async (req, res) => {

    const { originalUrl, customCode } = req.body;

    if (!validUrl.isUri(originalUrl)) {

        return res.status(400).json({
            error: "Invalid URL"
        });
    }

    try {

        const shortCode =
            customCode || shortid.generate();

        const shortUrl =
            `http://localhost:5000/${shortCode}`;

        const qrImage =
            await QRCode.toDataURL(shortUrl);

        const newUrl = new Url({

            originalUrl,
            shortCode

        });

        await newUrl.save();

        res.json({

            shortUrl,
            qrImage

        });

    } catch (err) {

        console.log(err);

        res.status(500).json({

            error: "Server Error"

        });
    }
});



router.get("/:code", async (req, res) => {

    try {

        const url = await Url.findOne({

            shortCode: req.params.code

        });

        if (url) {

            url.clicks++;

            await url.save();

            return res.redirect(url.originalUrl);
        }

        res.status(404).json({

            error: "URL not found"

        });

    } catch (err) {

        console.log(err);

        res.status(500).json({

            error: "Server Error"

        });
    }
});



router.get("/analytics/:code", async (req, res) => {

    try {

        const url = await Url.findOne({

            shortCode: req.params.code

        });

        if (!url) {

            return res.status(404).json({

                error: "URL not found"

            });
        }

        res.json({

            originalUrl: url.originalUrl,
            shortCode: url.shortCode,
            clicks: url.clicks,
            createdAt: url.createdAt,
            expiresAt: url.expiresAt

        });

    } catch (err) {

        console.log(err);

        res.status(500).json({

            error: "Server Error"

        });
    }
});

module.exports = router;