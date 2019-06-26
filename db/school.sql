--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.9
-- Dumped by pg_dump version 9.6.9

-- Started on 2018-12-12 20:37:34

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 8 (class 2615 OID 247639)
-- Name: credentials; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA "credentials";


ALTER SCHEMA "credentials" OWNER TO "postgres";

--
-- TOC entry 2165 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA "public"; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA "public" IS 'standard public schema';


--
-- TOC entry 7 (class 2615 OID 247661)
-- Name: school; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA "school";


ALTER SCHEMA "school" OWNER TO "postgres";

--
-- TOC entry 1 (class 3079 OID 12387)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS "plpgsql" WITH SCHEMA "pg_catalog";


--
-- TOC entry 2166 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION "plpgsql"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "plpgsql" IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 188 (class 1259 OID 247651)
-- Name: activities; Type: TABLE; Schema: credentials; Owner: postgres
--

CREATE TABLE "credentials"."activities" (
    "module_name" character varying(255),
    "page_name" character varying(255),
    "action" character varying,
    "user_id" bigint,
    "account_id" bigint,
    "ip_address" character varying(30),
    "action_datetime" timestamp without time zone,
    "message" "text",
    "status" character varying(255),
    "request_origin" character varying(255) DEFAULT 'system'::character varying,
    "url" character varying(255),
    "id" integer NOT NULL,
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp without time zone
);


ALTER TABLE "credentials"."activities" OWNER TO "postgres";

--
-- TOC entry 194 (class 1259 OID 247734)
-- Name: activities_id_seq; Type: SEQUENCE; Schema: credentials; Owner: postgres
--

CREATE SEQUENCE "credentials"."activities_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "credentials"."activities_id_seq" OWNER TO "postgres";

--
-- TOC entry 2167 (class 0 OID 0)
-- Dependencies: 194
-- Name: activities_id_seq; Type: SEQUENCE OWNED BY; Schema: credentials; Owner: postgres
--

ALTER SEQUENCE "credentials"."activities_id_seq" OWNED BY "credentials"."activities"."id";


--
-- TOC entry 192 (class 1259 OID 247722)
-- Name: roles; Type: TABLE; Schema: credentials; Owner: postgres
--

CREATE TABLE "credentials"."roles" (
    "role_name" character varying(50),
    "role_description" character varying(255),
    "is_active" boolean,
    "user_id" bigint,
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp without time zone,
    "id" integer NOT NULL
);


ALTER TABLE "credentials"."roles" OWNER TO "postgres";

--
-- TOC entry 193 (class 1259 OID 247728)
-- Name: roles_id_seq; Type: SEQUENCE; Schema: credentials; Owner: postgres
--

CREATE SEQUENCE "credentials"."roles_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "credentials"."roles_id_seq" OWNER TO "postgres";

--
-- TOC entry 2168 (class 0 OID 0)
-- Dependencies: 193
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: credentials; Owner: postgres
--

ALTER SEQUENCE "credentials"."roles_id_seq" OWNED BY "credentials"."roles"."id";


--
-- TOC entry 187 (class 1259 OID 247640)
-- Name: users; Type: TABLE; Schema: credentials; Owner: postgres
--

CREATE TABLE "credentials"."users" (
    "full_name" character varying,
    "email" "text" NOT NULL,
    "username" character varying(255),
    "password" "text" NOT NULL,
    "mobile" character varying(20),
    "role_id" bigint NOT NULL,
    "updatedAt" timestamp without time zone,
    "createdAt" timestamp without time zone,
    "id" integer NOT NULL
);


ALTER TABLE "credentials"."users" OWNER TO "postgres";

--
-- TOC entry 191 (class 1259 OID 247711)
-- Name: users_id_seq; Type: SEQUENCE; Schema: credentials; Owner: postgres
--

CREATE SEQUENCE "credentials"."users_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "credentials"."users_id_seq" OWNER TO "postgres";

--
-- TOC entry 2169 (class 0 OID 0)
-- Dependencies: 191
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: credentials; Owner: postgres
--

ALTER SEQUENCE "credentials"."users_id_seq" OWNED BY "credentials"."users"."id";


--
-- TOC entry 190 (class 1259 OID 247700)
-- Name: general_register; Type: TABLE; Schema: school; Owner: postgres
--

CREATE TABLE "school"."general_register" (
    "id" integer NOT NULL,
    "first_name" character varying(255),
    "middle_name" character varying(255),
    "last_name" character varying(255),
    "full_name" character varying(255),
    "mother_name" character varying(225),
    "nationality" character varying(255),
    "religion" character varying(225),
    "palce_of_birth" character varying(225),
    "dob" character varying(255),
    "last_school_attended" character varying(225),
    "date_of_admission" character varying(225),
    "progress" character varying(255),
    "conduct" character varying(225),
    "date_of_lc" character varying(225),
    "previous_std" character varying(225),
    "reason_of_leaving" character varying(225),
    "recieving_lc_date" character varying(225),
    "mother_tongue" character varying(255),
    "dob_in_word" character varying(255),
    "aadhar_no" character varying(50),
    "student_cast" character varying(100),
    "student_sub_cast" character varying(100),
    "caste_verified" boolean,
    "blood_group" character varying(50),
    "address" character varying(1000),
    "standard" bigint,
    "division" bigint,
    "year" bigint,
    "mobile_no" character varying(100),
    "student_id" character varying(255),
    "gr_no" bigint,
    "is_alumni" boolean DEFAULT false,
    "is_active" boolean DEFAULT true,
    "gr_type" character varying(255) DEFAULT 'GENERAL'::character varying NOT NULL,
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp without time zone
);


ALTER TABLE "school"."general_register" OWNER TO "postgres";

--
-- TOC entry 189 (class 1259 OID 247698)
-- Name: general_register_id_seq; Type: SEQUENCE; Schema: school; Owner: postgres
--

CREATE SEQUENCE "school"."general_register_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "school"."general_register_id_seq" OWNER TO "postgres";

--
-- TOC entry 2170 (class 0 OID 0)
-- Dependencies: 189
-- Name: general_register_id_seq; Type: SEQUENCE OWNED BY; Schema: school; Owner: postgres
--

ALTER SEQUENCE "school"."general_register_id_seq" OWNED BY "school"."general_register"."id";


--
-- TOC entry 2026 (class 2604 OID 247736)
-- Name: activities id; Type: DEFAULT; Schema: credentials; Owner: postgres
--

ALTER TABLE ONLY "credentials"."activities" ALTER COLUMN "id" SET DEFAULT "nextval"('"credentials"."activities_id_seq"'::"regclass");


--
-- TOC entry 2031 (class 2604 OID 247730)
-- Name: roles id; Type: DEFAULT; Schema: credentials; Owner: postgres
--

ALTER TABLE ONLY "credentials"."roles" ALTER COLUMN "id" SET DEFAULT "nextval"('"credentials"."roles_id_seq"'::"regclass");


--
-- TOC entry 2024 (class 2604 OID 247713)
-- Name: users id; Type: DEFAULT; Schema: credentials; Owner: postgres
--

ALTER TABLE ONLY "credentials"."users" ALTER COLUMN "id" SET DEFAULT "nextval"('"credentials"."users_id_seq"'::"regclass");


--
-- TOC entry 2027 (class 2604 OID 247703)
-- Name: general_register id; Type: DEFAULT; Schema: school; Owner: postgres
--

ALTER TABLE ONLY "school"."general_register" ALTER COLUMN "id" SET DEFAULT "nextval"('"school"."general_register_id_seq"'::"regclass");


--
-- TOC entry 2152 (class 0 OID 247651)
-- Dependencies: 188
-- Data for Name: activities; Type: TABLE DATA; Schema: credentials; Owner: postgres
--

INSERT INTO "credentials"."activities" ("module_name", "page_name", "action", "user_id", "account_id", "ip_address", "action_datetime", "message", "status", "request_origin", "url", "id", "createdAt", "updatedAt") VALUES ('general_registration', 'add-general-registration', 'INSERT', 1, NULL, '192.169.11.11', '2018-12-12 15:01:10.9', 'Record added successfully', '200', 'system', 'http://localhost:4200/nges/gr/add', 2, '2018-12-12 15:01:10.902', '2018-12-12 15:01:10.902');


--
-- TOC entry 2171 (class 0 OID 0)
-- Dependencies: 194
-- Name: activities_id_seq; Type: SEQUENCE SET; Schema: credentials; Owner: postgres
--

SELECT pg_catalog.setval('"credentials"."activities_id_seq"', 2, true);


--
-- TOC entry 2156 (class 0 OID 247722)
-- Dependencies: 192
-- Data for Name: roles; Type: TABLE DATA; Schema: credentials; Owner: postgres
--

INSERT INTO "credentials"."roles" ("role_name", "role_description", "is_active", "user_id", "createdAt", "updatedAt", "id") VALUES ('STAFF', 'This role belongs to the staff of the school', true, 1, '2018-12-12 14:22:28.885', '2018-12-12 14:22:28.885', 3);
INSERT INTO "credentials"."roles" ("role_name", "role_description", "is_active", "user_id", "createdAt", "updatedAt", "id") VALUES ('SYSTEM ADMIN', 'This role belongs to the synepis company', true, 1, '2018-12-12 14:21:02.875', '2018-12-12 14:27:06.545', 1);
INSERT INTO "credentials"."roles" ("role_name", "role_description", "is_active", "user_id", "createdAt", "updatedAt", "id") VALUES ('ADMIN', 'This role belongs to all the school admins', true, 1, '2018-12-12 14:21:33.821', '2018-12-12 14:27:54.5', 2);


--
-- TOC entry 2172 (class 0 OID 0)
-- Dependencies: 193
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: credentials; Owner: postgres
--

SELECT pg_catalog.setval('"credentials"."roles_id_seq"', 3, true);


--
-- TOC entry 2151 (class 0 OID 247640)
-- Dependencies: 187
-- Data for Name: users; Type: TABLE DATA; Schema: credentials; Owner: postgres
--

INSERT INTO "credentials"."users" ("full_name", "email", "username", "password", "mobile", "role_id", "updatedAt", "createdAt", "id") VALUES ('Susana J. Smith', 'susanajsmith@rhyta.com', 'susana', '$2a$10$HajPfdEIknVSyr52HaKje.tnj0Pu82wBMfthek/9Iol5nc8HG07Vu', '9049454409', 2, '2018-12-12 12:16:17.705', '2018-12-12 12:16:17.705', 2);
INSERT INTO "credentials"."users" ("full_name", "email", "username", "password", "mobile", "role_id", "updatedAt", "createdAt", "id") VALUES ('Rosie N. Hazlett', 'rosienhazlett@jourrapide.com', 'rosie', '$2a$10$angdTEwCR5OTH8mxbg6G6OMUMRMxxjvgLKeHvsXAsI6Mj87m4V6v6', '3307710999', 2, '2018-12-12 12:17:55.959', '2018-12-12 12:17:55.959', 3);
INSERT INTO "credentials"."users" ("full_name", "email", "username", "password", "mobile", "role_id", "updatedAt", "createdAt", "id") VALUES ('Teresa P. Fuller', 'teresapfuller@rhyta.com', 'teresa', 'pass@123', '9517822091', 2, '2018-12-12 12:36:57.97', '2018-12-12 12:36:57.97', 5);


--
-- TOC entry 2173 (class 0 OID 0)
-- Dependencies: 191
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: credentials; Owner: postgres
--

SELECT pg_catalog.setval('"credentials"."users_id_seq"', 5, true);


--
-- TOC entry 2154 (class 0 OID 247700)
-- Dependencies: 190
-- Data for Name: general_register; Type: TABLE DATA; Schema: school; Owner: postgres
--



--
-- TOC entry 2174 (class 0 OID 0)
-- Dependencies: 189
-- Name: general_register_id_seq; Type: SEQUENCE SET; Schema: school; Owner: postgres
--

SELECT pg_catalog.setval('"school"."general_register_id_seq"', 1, false);


--
-- TOC entry 2033 (class 2606 OID 247710)
-- Name: general_register generalstudent_pkey; Type: CONSTRAINT; Schema: school; Owner: postgres
--

ALTER TABLE ONLY "school"."general_register"
    ADD CONSTRAINT "generalstudent_pkey" PRIMARY KEY ("id");


-- Completed on 2018-12-12 20:37:35

--
-- PostgreSQL database dump complete
--

