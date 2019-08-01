BEGIN;
DROP TABLE IF EXISTS plans,reports,circular,activity,achievements,advertising,fileCompletion,budget;





CREATE TABLE "plans" (
  "id" serial NOT NULL,
	"title" varchar(30) NOT NULL,
	"description" varchar(900) NOT NULL ,
  CONSTRAINT plans_pk PRIMARY KEY ("id")
);
CREATE TABLE "reports" (
  "id" serial NOT NULL,
	"title" varchar(30) NOT NULL,
	"description" varchar(900) NOT NULL ,
  CONSTRAINT reports_pk PRIMARY KEY ("id")
);
CREATE TABLE "circular" (
  "id" serial NOT NULL,
	"title" varchar(30) NOT NULL,
	"description" varchar(900) NOT NULL ,
  CONSTRAINT circular_pk PRIMARY KEY ("id")
);
CREATE TABLE "activity" (
  "id" serial NOT NULL,
	"outTitle" varchar(30) ,
	"outDescription" varchar(900) ,
  "receivedTitle" varchar(30) ,
	"receivedDescription" varchar(900) ,

  CONSTRAINT activity_pk PRIMARY KEY ("id")
);

CREATE TABLE "achievements" (
  "id" serial NOT NULL,
	"title" varchar(30) NOT NULL,
	"description" varchar(900) NOT NULL ,
  CONSTRAINT achievements_pk PRIMARY KEY ("id")
);
CREATE TABLE "advertising" (
  "id" serial NOT NULL,
	"title" varchar(30) NOT NULL,
	"description" varchar(900) NOT NULL ,
  CONSTRAINT advertising_pk PRIMARY KEY ("id")
);
CREATE TABLE "fileCompletion" (
  "id" serial NOT NULL,
	"title" varchar(30) NOT NULL,
	"description" varchar(900) NOT NULL ,
  CONSTRAINT fileCompletion_pk PRIMARY KEY ("id")
);
CREATE TABLE "budget" (
  "id" serial NOT NULL,
	"title" varchar(30) NOT NULL,
	"description" varchar(900) NOT NULL ,
  CONSTRAINT budget_pk PRIMARY KEY ("id")
);


COMMIT;
