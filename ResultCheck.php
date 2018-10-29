<?php

$answerKey = "cccdcbda";
$co=0;
$userAnswer = $_POST['answer'];
for($i=0 ; $i<8 ; $i++){
 if($userAnswer[$i] == $answerKey[$i])
   $co = $co + 1;
}

echo $co;

?>