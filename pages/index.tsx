import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { query, initThinBackend, ensureIsUser, getCurrentUser } from 'thin-backend';
import { useEffect, useState } from 'react';

import RecentlyAdded from '../components/recently-added'

import { Col, Text, Grid } from "@nextui-org/react";

import { useQuery } from "thin-backend-react";



initThinBackend({ host: process.env.NEXT_PUBLIC_BACKEND_URL });

const Home: NextPage = () => {
  return (<>
    <Head>
      <title>Curate</title>
    </Head>

    <RecentlyAdded/>
  </>)
}

export default Home
