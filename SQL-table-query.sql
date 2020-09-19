-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Pitching-Averages" (
    "Year" int   NOT NULL,
    "Tms" varchar   NOT NULL,
    "R/G"  varchar  NOT NULL,
    "ERA" varchar   NOT NULL,
    "GF" varchar   NOT NULL,
    "CG" varchar   NOT NULL,
    "HR" varchar   NOT NULL,
    "SO" varchar   NOT NULL,
    "HBP" varchar   NOT NULL,
    "HR9" varchar   NOT NULL,
    "SO9" varchar   NOT NULL
);

CREATE TABLE "Batting-Stats" (
    "Year" int   NOT NULL,
    "Tms" varchar   NOT NULL,
    "2B" varchar   NOT NULL,
    "3B" varchar   NOT NULL,
    "SB" varchar   NOT NULL,
    "BA" varchar   NOT NULL,
    "OPS" varchar   NOT NULL
);

