"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "40px",
        mobileFirst: false,
        mixinNames: {
            container: "container",
        },
        container: {
            fields: "20px",
            maxWidth: "1416px"
        },
        breakPoints: {
            xs: {
                width: "567px"
            },
            sm: {
                width: "768px"
            },
            md: {
                width: "991px"
            },
            lg: {
                width: "1440px"
            },
        }
    });
    cb();
});
