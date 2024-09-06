/*
import {fun1,fun2} from "./Module 22.js"
fun1("Abdul Asheen");
fun2()
*/
//Renaming for importing
/*
import {fun1 as func1,fun2 as func2} from "./Module 22.js"
func1("Abdul Asheen");
func2();
*/
//Renaming for exporting
import * as expfiles from "./Module 22.js"
expfiles.sample1("Abdul Asheen");
expfiles.sample2();