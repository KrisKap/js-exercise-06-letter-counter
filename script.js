function letterCounter() {

  var result = 0;         // zmienna przechowująca informaję wynikową o ilości znaków w słowie


  // W tym bloku użytkownik wprowadza słowo i znak który program ma zliczać
	do {
		var word = prompt("Podaj dowolne słowo...", "");
	} while (!word);

	do {
		var letter = prompt("Podaj literę którą chcesz zliczyć w tym słowie...", "");
	} while(!letter);




  // W tym bloku porównujemy każdy znak słowa z szukanym znakiem
  var wordLength = word.length;

  for (var i = 0; i < wordLength; i++) {
    if (word.charAt(i) === letter) {
      result += 1;
    }
  }



  // Inforamcja do uzytkownika  o rezultacie zliczania znaku w słowie
  if (result == 0) {
    alert("W słowie " + "\"" + word + "\"" + " nie ma znaku " + letter);
  } 
  else {
    alert('W słowie ' + "\"" + word + "\"" + ' są znaki ' + "\"" + letter + "\". Jest ich " + result + "." );
  }
 
}

letterCounter();


