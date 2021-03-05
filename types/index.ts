import { NextPage } from "next";
import { AppProps } from "next/app";

export type RootApp = AppProps & { Component: { layout: any } };

export type AppPage = NextPage & { layout: any };
