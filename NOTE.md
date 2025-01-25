SHORTCUT:- by (extension= ES7+ React/Redux/React-Native/JS snippets)
rfce=> react function component export
rafce=>" ..arrow......."

ctrl + space -> for suggestion i the file

const variable not change ,but let veriable change
const name=""; let age="";

---

node_modules=> contains all patterns and dependencies & devDependencies files

-----------------------------------------------------------------------------------------------------------------------------

Workflow:-
App.jsx(component file)=>main.jsx(rendering file)=>index.html (vice versa)

-----------------------------------------------------------------------------------------------------------------------------

eslint=> use for formating code and make is neat

-----------------------------------------------------------------------------------------------------------------------------

React use only one html file to render every thing => index.html

-----------------------------------------------------------------------------------------------------------------------------

JSX=> JS extension => means can use HTML inside javascript easily
In JSX:-
return only single child=> single tag only

talwind overwrite normal css

-----------------------------------------------------------------------------------------------------------------------------

MAke file name as:
//hello world
//HelloWorld -> pascal case (make component & jsx file like this )
//helloWorld -> camel case (make function like this)

-----------------------------------------------------------------------------------------------------------------------------

State -> is a data that may change in future with USER inter-action

-----------------------------------------------------------------------------------------------------------------------------

state management-> to change the state after user interact with UI
In class component we use direct state management
but, in React we use hook for state management  start from "use" to impleement hook

HOOK:-
useState => use to change the state of used component only (jsx file only) & change the state of interact UI only not other of 
           same kind UI like buttons
        => use array destructuring [a,b] => position matter  where 1st position 'a'  is the actual(initial) state variable & 
           2nd position 'b' is the function variable that is used to change the 1st position variable,

useEffect => ,

useRef => to get elements details like it types, attibutes, data ,parameter,etc.. (reference of elements(tag)),

useReducer => use for global level state management like multiple componemet state management , but we use Redux for this

-----------------------------------------------------------------------------------------------------------------------------

Components => small piece of code used in UI like navbar, buttons,tabel,sidebar,form etc... & like home page file are not not components used in same folder like them 

---------------------------------------------------------------------------------------------------------------------------------------

Async Function have 3 compnent => loading, sucess, failure

---------------------------------------------------------------------------------------------------------------------------------------
REDUX
# 3 Core Concept of Redux
1. Store :- Save/store state( as db of frontend), 
            only one store to maintain single source of truth (means should have same name state of same work in whole app) 
2. Action :- Function dispatch on user interaction
3. Reducer :- UI transition, stores state, binds action and store

# Flow of Data in Redux:
--> UI Interaction : User interacts with the UI.
--> Action Dispatch : An action is dispatched.
--> Reducer Update : The reducer updates the state.
--> State Change Notification : UI re-renders based on the updated state.

-----------------------------------------------------------------------------------------------------------------------------------------------