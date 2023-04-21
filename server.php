<?php

if (isset($_POST['toDoItem'])) {

    $toDoItem = array();
    $toDoItem['element'] = $_POST['toDoItem'];
    $toDoItem['isDone'] = false;
    $toDoJSON = file_get_contents('todos.json');
    $toDoList = json_decode($toDoJSON);
    $toDoList[] = $toDoItem;
    $newToDoJSON = json_encode($toDoList);
    file_put_contents('todos.json', $newToDoJSON);
    
} else {

    //Salvo l'array presente nel file json per poterlo utilizzare nell'app
    $fileString = file_get_contents('todos.json');
    //Lo converto in un array PHP
    $toDoList = json_decode($fileString);
    //Funzione di specifica del tipo di file
    header('Content-type: application/json');
    //Stampa dell'array convertito in PHP in formato json
    echo json_encode($toDoList);
}
