#!/usr/bin/env node
// 用于命令行交互
import { program } from "commander";

import { helpOptions } from "./lib/core/help.js";

import { createCommands } from "./lib/core/create.js";

program.version("2.0.0");

helpOptions();
//创建指令
createCommands();

program.parse(process.argv);
