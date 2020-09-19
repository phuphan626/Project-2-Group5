-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Pitching-Averages" (
    "Year" int   NOT NULL,
    "Tms" float   NOT NULL,
    "R/G"  float  NOT NULL,
    "ERA" float   NOT NULL,
    "GF" float   NOT NULL,
    "CG" float   NOT NULL,
    "HR" float   NOT NULL,
    "SO" float   NOT NULL,
    "HBP" float   NOT NULL,
    "HR9" float   NOT NULL,
    "SO9" float   NOT NULL
);

CREATE TABLE "Batting-Stats" (
    "Year" int   NOT NULL,
    "Tms" float   NOT NULL,
    "2B" float   NOT NULL,
    "3B" float   NOT NULL,
    "SB" float   NOT NULL,
    "BA" float   NOT NULL,
    "OPS" float   NOT NULL
);

