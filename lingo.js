var ENGLISH=0, FRENCH=1, GERMAN=2, ITALIAN=3, PORTUGUESE=4, SPANISH=5;
var LANG_CODE=['en-US','fr-FR','de-DE','it-IT','pt-BR','es-ES'];

var WORDS=new Array(6);
WORDS[0]=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven',
    'twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen',
    'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety',
    'hundred','thousand','million',
	'Test','Score','Best','Time left','Question ','Stop','Options',
	'Test language','English','French','German','Italian','Portuguese','Spanish',
	'Test type','Decimals to words','Words to decimal','Arithmetic to words','Arithmetic to decimal',
	'Difficulty','Test duration (minutes):','Close',
	'Press here to begin test', 'Test over. Press here to start another','Press again to continue',
	'Type the corresponding number:','Select the corresponding words:','plus','minus','Listen to the words','Speak word questions'];
WORDS[1]=['z\u00E9ro','un','deux','trois','quatre','cinq','six','sept','huit','neuf','dix','onze',
    'douze','treize','quatorze','quinze','seize','dix-sept','dix-huit','dix-neuf',
    'vingt','trente','quarante','cinquante','soixante','soixante','quatre-vingt','quatre-vingt',
    'cent','mille','million',
	'Test','Score','Meilleur','Temps restant','Question ','Arr\u00EAter','Options',
	'Langue du test','Anglais','Fran\u00E7ais','Allemand','Italien','Portugais','Espagnol',
	'Type du test','D\u00E9cimales aux mots','Mots aux d\u00E9cimales','Arithm\u00E9tique aux mots','Arithm\u00E9tique \u00E0 decimale',
	'Difficult\u00E9','Dur\u00E9e du test (minutes):','Fermer',
	'Appuyez ici pour commencer le test', 'Test termin\u00E9. Appuyez ici pour recommencer','Appuyez de nouveau pour continuer',
	'Tapez le num\u00E9ro correspondant:','S\u00E9lectionnez les mots correspondants:','plus','moins','\u00C9coutez les mots','Parler des questions de mots']
WORDS[2]=['Null','ein','zwei','drei','vier','f\u00FCnf','sechs','sieben','acht','neun','zehn','elf',
    'zw\u00F6lf','dreizehn','vierzehn','f\u00FCnfzehn','sechzehn','siebzehn','achtzehn','neunzehn',
    'zwanzig','drei\u00DFig','vierzig','f\u00FCnfzig','sechzig','siebzig','achtzig','neunzig',
    'hundert','tausend','Million',
	'Test','Punktzahl','Beste','Restzeit','Frage ','Stopp','Optionen',
	'Testsprache','Englisch', 'Franz\u00F6sisch', 'Deutsch', 'Italienisch', 'Portugiesisch', 'Spanisch',
	'Test-Typ','Dezimalzahlen zum W\u00F6rter','W\u00F6rter zu Dezimalzahlen','Arithmetik zu Worte','Arithmetik zu decimal',
	'Schwierigkeit','Test Dauer (minuten):','Schlie\u00DFen',
	'Dr\u00FCcken Sie hier, um Test zu beginnen', 'Test \u00FCber. Dr\u00FCcken Sie hier, um ein anderes zu starten','Dr\u00FCcken Sie erneut, um fortzufahren',
	'Geben Sie die entsprechende Anzahl:','W\u00E4hlen Sie die entsprechenden W\u00F6rter:','plus','minus','H\u00F6re auf die Worte','Sprich Wort Fragen']
WORDS[3]=['zero','uno','due','tre','quattro','cinque','sei','sette','otto','nove','dieci','undici',
    'dodici','tredici','quattordici','quindici','sedici','diciassette','diciotto','diciannove',
    'vent','trent','quarant','cinquant','sessant','settant','ottant','novant',
    'cento','mil','milione',
	'Test','Punteggio','Best','Tempo rimanente','Domanda ','Stop','Opzioni',
	'Lingua Test', 'inglese', 'francese', 'tedesco', 'italiano', 'portoghese', 'spagnolo',
	'Test tipo','Decimale in parole','Words to decimal','Arithmetic to words','Arithmetic to decimal',
	'Difficolt\u00E0','durata della prova (minuti):','Chiudi',
	'Premere qui per iniziare test', 'Prova finita. Premere qui per ricominciare un altro','Premere per continuare',
	'Corrispondente Inserisci il numero:','Seleziona le parole corrispondenti:','pi\u00F9','meno','Ascoltate le parole','Parla domande di parola']
WORDS[4]=['zero','um','dois','tr\u00EAs','quatro','cinco','seis','sete','oito','nove','dez','onze',
    'doze','treze','catorze','quinze','dezasseis','dezassete','dezoito','dezanove',
    'vinte','trinta','quarenta','cinquenta','sessenta','setenta','oitenta','noventa',
    'cento','mil','milh\u00E3o',
	'Test','Pontua\u00E7\u00E3o','Melhor','Tempo restante','Pergunta ','Stop','Op\u00E7\u00F5es',
	'Linguagem Teste','Ingl\u00EAs','Franc\u00EAs','Alem\u00E3','Italiano','Portugu\u00EAs','Espanhol',
	'Tipo de teste','Decimais em palavras','Palavras para decimal','Aritm\u00E9tica de palavras','Decimal para Aritm\u00E9tica',
	'Dificuldade','dura\u00E7\u00E3o do teste (minutos):','Close',
	'Prima aqui para iniciar o teste', 'Teste de novo. Pressione aqui para iniciar outro','Pressione novamente para continuar',
	'Digite o n\u00FAmero correspondente:','Selecione as palavras correspondentes:','mais','menos','Ou\u00E7a as palavras','Fale perguntas palavra']
WORDS[5]=['cero','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once',
    'doce','trece','catorce','quince','diecis\u00E9is','diecisiete','dieciocho','diecinueve',
    'veint','treinta','cuarenta','cincuenta','sesenta','setenta','ochenta','noventa',
    'cien','mil','mill\u00F3n',
	'Test','Score','Mejor','Tiempo restante','Pregunta ','Stop','Opciones',
	'Lenguaje Test','Ingl\u00E9s','Franc\u00E9s','Alem\u00E1n','Italiano','Portugu\u00E9s','Espa\u00F1ol',
	'Tipo de prueba', 'Decimales a las palabras', 'Palabras a decimal', 'Aritm\u00E9tica a las palabras', 'Decimal a Aritm\u00E9tica',
	'Dificultad','Duraci\u00F3n de la prueba (minutos):','Close',
	'Pulse aqu\u00ED para iniciar la prueba', 'Pon a prueba otra vez. Pulse aqu\u00ED para iniciar otro','Pulse de nuevo para continuar',
	'Tipo correspondiente al n\u00FAmero:','Seleccione las palabras correspondientes:','m\u00E0s','menos','Escucha las palabras','Hable preguntas de palabras']
	
var score, topScore=0, previousNumber1, previousNumber2, testType=0, questionNo, answerNo, currentPoint, answer, timer, state=0, uiLang, testLang=0;

$(document).on('pageinit', function() {
	$('#optionsPanel').on('panelclose', optionsClose);
	if (window.localStorage && localStorage.getItem('difficulty')!==null)	{
		$('#level'+localStorage.difficulty).prop('checked',true);
		$('input:radio[name=difficulty]').checkboxradio('refresh');
		testType=localStorage.testType;
	 	$('#duration').val(localStorage.duration).slider('refresh');
		testLang=localStorage.testLang;
		$('#useSpeech').prop('checked', localStorage.useSpeech).checkboxradio('refresh');
		}
	uiLang=localStorage.uiLang||0;
	changeLabels();
	changeControls();
	$('#uiLang').prop('selectedIndex', uiLang).selectmenu('refresh');
	previousNumber1=0;
	$('#multichoice a').on('vclick',function(e){e.preventDefault(); markAnswer(this.id.charAt(7))});
	$('#numeric a').on('vclick',function(e){e.preventDefault(); markAnswer($(this).text())});
	$('#arabicNumber').on('vclick',function(){if (state==3) showQuestion()});
	$('#questionBox').on('vclick',function(){if (state==0) startTest(); else showQuestion()});
	var userAgent = navigator.userAgent.toLowerCase();
	if ((userAgent.indexOf('firefox')>=0) && (userAgent.indexOf('android')>=0)) {
		$('[data-position="fixed"]').fixedtoolbar('hide');
		}
	if (!window.SpeechSynthesisUtterance) $('#useSpeech').checkboxradio('disable');
	});
	
function changeLabels() {
	var i, S='', labelWords = WORDS[uiLang].slice(31);
	$('#lblTest').text(labelWords[0]);
	$('#lblScore').text(labelWords[1]);
	$('#lblBest').text(labelWords[2]);
	$('#lblTime').text(labelWords[3]);
	$('#questionHeading').text(labelWords[4]);
	$('#btnStop .ui-btn-text').text(labelWords[5]);
	$('#btnOptions .ui-btn-text').text(labelWords[6]);
	$('#lblTestLang').text(labelWords[7]);
	for (i=8; i<14; i++) S+='<option>' +labelWords[i]+'</option>';
	$('#testLang').html(S).prop('selectedIndex', testLang).selectmenu('refresh');
	$('#lblTestType').text(labelWords[14]);
	S='';
	for (i=15; i<19; i++) S+='<option>' +labelWords[i]+'</option>';
	$('#testType').html(S).prop('selectedIndex', testType).selectmenu('refresh');
	$('#lblDifficulty').text(labelWords[19]);
	$('#lblDuration').text(labelWords[20]);
	$('#btnClose .ui-btn-text').text(labelWords[21]);
	if (timer==null) $('#questionBox .ui-btn-text').text(labelWords[22]);
	$('html').attr('lang',LANG_CODE[uiLang].substr(0,2));
	$('#lblUseSpeech span.ui-btn-text').text(labelWords[30]);
	}
	
function optionsClose()	{
	endTest();
	testType = $('#testType').prop('selectedIndex');
	testLang = $('#testLang').prop('selectedIndex');
	changeControls();
	if (typeof(Storage)!=='undefined') {
		localStorage.uiLang=uiLang;
		localStorage.testLang=testLang;
		localStorage.difficulty=$('input:radio[name=difficulty]:checked').val();
		localStorage.testType=testType;
		localStorage.duration=$('#duration').val();
		localStorage.useSpeech=$('#useSpeech').prop('checked');
		}
	}
	
function changeControls() {
	if (testType==0 || testType==2)	{
		$('#numeric').hide();
		$('#multichoice').show();
		}
	else {
		$('#multichoice').hide();
		$('#numeric').show();
		}
	$('#timebar').attr('max',60 * $('#duration').val());
	}

function startTest() {
	if (state!=0) return;
	state = 1;//test has started, so cannot be started again unless Stop pressed
	questionNo=0;
	score=0;
	$('#score').text('0');
	$('#timebar').val(60* $('#duration').val()).slider('refresh');;
	timer = setInterval(timerEvent,1000);
	showQuestion();
	}
	
function timerEvent() {
	var timeleft = $('#timebar').val() - 1;
	$('#timebar').val(timeleft).slider('refresh');
	if (timeleft==0) endTest();
	}

function endTest() {
	if (state==0) return;//test cannot be stopped if not started
	state=0;//ready for next test
	$('#timebar').val(0).slider('refresh');
	clearInterval(timer);
	$('#questionBox .ui-btn-text').text(WORDS[uiLang][54]);
	$('.answerHeading').text('');
	if (score>topScore)	{
		topScore=score;
		$('#topscore').text(topScore);
		}
	}
	
function showQuestion() {
	if (state==2 || $('#timebar').val()==0) return;//previous question not yet answered
	var number1, number2, randomBase, i, j, numericAnswer, answerBase, choices = new Array(), S;
	state=2;//question shown
	questionNo++;
	$('#questionHeading').text(WORDS[uiLang][35]+questionNo);
	randomBase=Math.pow(10,$('input:radio[name=difficulty]:checked').val());
	do
	   number1=Math.floor(randomBase*(9*Math.random()+1));
	while (number1==previousNumber1);
	previousNumber1=number1;
	if (testType>1) {//second number needed
		do
			number2=Math.floor(9*randomBase*Math.random()+randomBase);
		while (number2==previousNumber2 || number2==number1);
		//get random operator and calculate result
		if (Math.random()<0.5) {
			S='<br>'+WORDS[testLang][58];
			numericAnswer=number1+number2;
			}
		else {
			S='<br>'+WORDS[testLang][59];
			if (number1<number2) {
				temp=number1;
				number1=number2;
				number2=temp;
				}
			numericAnswer=number1-number2;
			}
		S=S+'<br>'+decimalToWords(number2);
		}
	else {
		numericAnswer=number1;
		S='';
		}
	if (testType>0) //question is in words
		S=decimalToWords(number1)+S;
	else
		S=number1+S;
	if ((testType>0) && ($('#useSpeech').prop('checked'))) {
		$('#questionBox .ui-btn-text').html(WORDS[uiLang][60]);
		var msg = new SpeechSynthesisUtterance(S.replace(/<br>/g,' '));
		msg.lang = LANG_CODE[testLang];
		speechSynthesis.speak(msg);
		}		
	else
		$('#questionBox .ui-btn-text').html(S);
	if (testType==1 || testType==3) { //answer is in digits
		$('.answerHeading').text(WORDS[uiLang][56]);
		currentPoint=0; //amount of answer entered so far
		$('#arabicNumber').text('');
		$('#correction').text('');
		answer=numericAnswer.toString();
		}
	else { //multiple choice
		$('.answerHeading').text(WORDS[uiLang][57]);
		answerNo=Math.floor(4*Math.random());
		answer=String.fromCharCode(answerNo+97); //a,b,c,d
		for (i=0; i<4; i++) choices[i]=0;
		// show multiple choices
		if (randomBase==1) randomBase=10;
		answerBase=randomBase*Math.floor(numericAnswer/randomBase);
		for (i=0; i<4; i++) {
			S=String.fromCharCode(i+97)+') ';
			if (i==answerNo)
				S=S+decimalToWords(numericAnswer);
			else {
				do {
					choices[i]=1+Math.floor(randomBase*Math.random())+1+answerBase;
					j=0;
					while (j<i)	{
						if (choices[i]==choices[j]) break; //choice already used
						j++;
						}
					}
				while (j!=i || choices[i]==numericAnswer);
				S=S+decimalToWords(choices[i]);
				}
			$('#choice-' + S.charAt(0) + ' .ui-btn-text').css('color','white').text(S);
			}
		}
	}

function decimalToWords(number)	{
	if (number==0) return WORDS[testLang][0];
	var phrase='';
	if (number>999)	{
		if (number>1999 || testLang==ENGLISH) phrase=WORDS[testLang][Math.floor(number/1000)];//no. of thousands
		if (testLang!=GERMAN && testLang!=ITALIAN)
			phrase=phrase+' '+WORDS[testLang][29]+' ';// add word for 'thousand'
		else {
			phrase=phrase+WORDS[testLang][29];
			if (testLang==ITALIAN) {
				if (number>1999) phrase=phrase+'a'; else phrase=phrase+'le';
				}
			}
		number=number % 1000;
		if (number<100 && number>0)	{
			if (testLang==ENGLISH)
				phrase=phrase+'and ';
			else if (testLang==PORTUGUESE)
				phrase=phrase+'e ';
			}
		}
	if (number>99) {
		var hundreds=Math.floor(number/100)
		if (testLang==SPANISH) {
			switch (hundreds) {
				case 5: phrase=phrase+'quinientos'; break;
				case 7: phrase=phrase+'setecientos'; break;
				case 9: phrase=phrase+'novecientos'; break;
				default: 
					if (number>199)	phrase=phrase+WORDS[SPANISH][hundreds];
					phrase=phrase+WORDS[SPANISH][28];
					if (number>100) phrase=phrase+'to';
					if (number>199) phrase=phrase+'s';
				}
			}
		else if (testLang==PORTUGUESE) {
			switch (hundreds) {
				case 1: if (number>100) phrase=phrase+'cento'; else phrase=phrase+'cem';
				case 2: phrase=phrase+'duzentos';
				case 3: phrase=phrase+'trezentos';
				case 5: phrase=phrase+'quinhentos';
				default:
					phrase=phrase+WORDS[PORTUGUESE][hundreds]+'centos';
				}
			}
		else {
			if (number>199 || testLang==ENGLISH || (testLang==GERMAN && phrase>'')) {
				phrase=phrase+WORDS[testLang][hundreds];//no. of hundreds
				if (testLang!=GERMAN && testLang!=ITALIAN) phrase=phrase+' ';
				}
			phrase=phrase+WORDS[testLang][28];//word for 'hundreds'
			}
		if (number % 100 > 0) {
			if (testLang==ENGLISH)
				phrase=phrase+' and';
			else if (testLang==PORTUGUESE)
				phrase=phrase+' e';
			}
		else if (testLang==FRENCH && number>199)
			phrase=phrase+'s';//add 's' to 'cent' if number precedes but no number follows
		number=number % 100;
		if (testLang!=GERMAN && testLang!=ITALIAN) phrase=phrase+' ';
		}
	if (number>19) {
		if (testLang==GERMAN) {
			if (number % 10 > 0) phrase=phrase+WORDS[GERMAN][number % 10]+'und';
			phrase=phrase+WORDS[GERMAN][Math.floor(number/10) + 18];
			number=0;
			}
		else {
			phrase=phrase+WORDS[testLang][Math.floor(number/10) + 18];
			if (testLang==FRENCH) {
				if (number % 10 == 1 && number<80)
					phrase=phrase+' et ';
				else if (number % 10 > 0 || number==90 || number==70)
					phrase=phrase+'-';
				if (number<60)
					number=number % 10
				else if (number<80)
					number-=60;
				else {
					if (number==80) phrase=phrase+'s';
					number-=80;
					}
				}
			else if (testLang==SPANISH) {
				if (number==20)
					phrase=phrase+'e';
				else if (number % 10 > 0) {
					if (number>29)
						phrase=phrase+' y ';
					else if (number==22) {
						phrase=phrase+'id\u00F3s';
						number=0;
						}
					else if (number==23) {
						phrase=phrase+'itr\u00E9s';
						number=0;
						}
					else
						phrase=phrase+'i';
					}
				number=number % 10;
				}
			else if (testLang==ITALIAN) {
				if (number>29) {
					number=number % 10;
					if (number!=1 && number!=8) phrase=phrase+'a';
					}
				else {
					number=number % 10;
					if (number!=1 && number!=8) phrase=phrase+'i';
					}
				}
			else if (testLang==PORTUGUESE) {
				number=number % 10;
				if (number>0) phrase=phrase+' e ';
				}
			else {
				number=number % 10;
				phrase=phrase+' ';
				}
			}
		}
	if (number>0) {
		if (testLang==ITALIAN && number==3 && phrase>'') 
			phrase=phrase+'tr\u00E8';
		else {
			phrase=phrase+WORDS[testLang][number];
			if (number==1 && testLang==GERMAN) phrase=phrase+'s';
			}
		}
	return phrase;
	}

function markAnswer(key)
	{
	var correctOption, correctPos, answerId;
	
	if ($('#timebar').val()==0)
		return;
	else if (state==3) {
		showQuestion();
		return;
		}
	if (testType==1 || testType==3) { //not multiple choice
	    if (key<'0' || key>'9')	return;
		$('#arabicNumber').text($('#arabicNumber').text()+key);
		if (key==answer.charAt(currentPoint)) {
			if (++currentPoint>=answer.length) {
				$('#correction').text('\u2713').css('color', 'blue');//tick;
				$('#score').text(++score);
				}
			else
				return;
			}
		else
			$('#correction').text('\u2717 ' + answer).css('color', 'red');//cross
		}
	else {
		key=key.toLowerCase();
		if (key<'a' || key>'d') return;
		answerId = $('#choice-' + key + ' .ui-btn-text');
		if (key==answer) {
			answerId.text(answerId.text() + ' \u2713').css('color', 'blue');//tick;
			$('#score').text(++score);
			}
		else {
			correctOption = $('#choice-' + answer + ' .ui-btn-text');
			correctOption.text(correctOption.text() + ' \u21D0').css('color', 'green');
			answerId.text(answerId.text() + ' \u2717').css('color', 'red');//cross
			}
		}
	$('.answerHeading').text(WORDS[uiLang][55]);
	state=3;//answer has been given: wait for Next to be pressed
	}