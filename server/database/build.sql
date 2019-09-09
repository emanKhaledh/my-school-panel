BEGIN;
DROP TABLE IF EXISTS plans,reports,generalization,activity,achievements,advertising,budget,fileuplode,nameteach,radio;

CREATE TABLE "radio" (
  "id" serial NOT NULL,
	"title" varchar(30),
	"description" varchar(2000)  ,
  "link" varchar(9000)  ,
  CONSTRAINT radio_pk PRIMARY KEY ("id")
);

CREATE TABLE "nameteach" (
  "id" serial NOT NULL,
	"name" varchar(30),
	"date" date,
    "link" varchar(9000),
  CONSTRAINT nameteach_pk PRIMARY KEY ("id")
);


CREATE TABLE "plans" (
  "id" serial NOT NULL,
	"title" varchar(30),
	"description" varchar(2000)  ,
  "link" varchar(9000)  ,
  CONSTRAINT plans_pk PRIMARY KEY ("id")
);
CREATE TABLE "reports" (
  "id" serial NOT NULL,
	"title" varchar(30) ,
	"description" varchar(2000)  ,
  "link" varchar(9000)  ,
  CONSTRAINT reports_pk PRIMARY KEY ("id")
);
CREATE TABLE "generalization" (
  "id" serial NOT NULL,
	"title" varchar(30) ,
	"description" varchar(2000)  ,
  "link" varchar(9000)  ,
  CONSTRAINT generalization_pk PRIMARY KEY ("id")
);
CREATE TABLE "activity" (
  "id" serial NOT NULL,
	"out_title" varchar(30) ,
	"out_description" varchar(900) ,
  "received_title" varchar(30) ,
	"received_description" varchar(900) ,
  "link" varchar(9000)  ,

  CONSTRAINT activity_pk PRIMARY KEY ("id")
);

CREATE TABLE "achievements" (
  "id" serial NOT NULL,
	"title" varchar(30) ,
	"description" varchar(2000)  ,
	"link" varchar(9000)  ,
  CONSTRAINT achievements_pk PRIMARY KEY ("id")
);
CREATE TABLE "advertising" (
  "id" serial NOT NULL,
	"title" varchar(30),
	"description" varchar(2000) ,
  "link" varchar(9000)  ,
  CONSTRAINT advertising_pk PRIMARY KEY ("id")
);
CREATE TABLE "fileuplode" (
  "id" serial NOT NULL,
	"link" varchar(9000)  ,
  CONSTRAINT fileuplode_pk PRIMARY KEY ("id")
);

CREATE TABLE "budget" (
  "id" serial NOT NULL,
	"out_title" varchar(30) ,
	"out_description" varchar(900) ,
  "received_title" varchar(30) ,
	"received_description" varchar(900) ,
  "link" varchar(9000)  ,

  CONSTRAINT budget_pk PRIMARY KEY ("id")
);

COMMIT;
