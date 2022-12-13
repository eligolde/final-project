//onmouseover events

//baseball
let bb_photo = document.querySelector('#bball_photo');
let bb_div = document.querySelector('#bball_title');

bb_div.style.display = 'none';

bb_photo.addEventListener("mouseenter", MouseOverEffect);
bb_photo.addEventListener("mouseleave", MouseLeaveEffect);

function MouseOverEffect() {
	bb_div.style.display = 'block';
};

function MouseLeaveEffect() {
	bb_div.style.display = 'none';
};

//cricket
let c_photo = document.querySelector('#cricket_photo');
let c_div = document.querySelector('#cricket_title');

c_div.style.display = 'none';

c_photo.addEventListener("mouseenter", CMouseOverEffect);
c_photo.addEventListener("mouseleave", CMouseLeaveEffect);

function CMouseOverEffect() {
	c_div.style.display = 'block';
};

function CMouseLeaveEffect() {
	c_div.style.display = 'none';
};

//squash
let s_photo = document.querySelector('#squash_photo');
let s_div = document.querySelector('#squash_title');

s_div.style.display = 'none';

s_photo.addEventListener("mouseenter", SMouseOverEffect);
s_photo.addEventListener("mouseleave", SMouseLeaveEffect);

function SMouseOverEffect() {
	s_div.style.display = 'block';
};

function SMouseLeaveEffect() {
	s_div.style.display = 'none';
};

//motorsport
let m_photo = document.querySelector('#motorsport_photo');
let m_div = document.querySelector('#motorsport_title');

m_div.style.display = 'none';

m_photo.addEventListener("mouseenter", MMouseOverEffect);
m_photo.addEventListener("mouseleave", MMouseLeaveEffect);

function MMouseOverEffect() {
	m_div.style.display = 'block';
};

function MMouseLeaveEffect() {
	m_div.style.display = 'none';
};

//lacrosse
let l_photo = document.querySelector('#lax_photo');
let l_div = document.querySelector('#lacrosse_title');

l_div.style.display = 'none';

l_photo.addEventListener("mouseenter", LMouseOverEffect);
l_photo.addEventListener("mouseleave", LMouseLeaveEffect);

function LMouseOverEffect() {
	l_div.style.display = 'block';
};

function LMouseLeaveEffect() {
	l_div.style.display = 'none';
};

//kickboxing
let kb_photo = document.querySelector('#kickboxing_photo');
let kb_div = document.querySelector('#kickboxing_title');

kb_div.style.display = 'none';

kb_photo.addEventListener("mouseenter", KBMouseOverEffect);
kb_photo.addEventListener("mouseleave", KBMouseLeaveEffect);

function KBMouseOverEffect() {
	kb_div.style.display = 'block';
};

function KBMouseLeaveEffect() {
	kb_div.style.display = 'none';
};

//breaking
let b_photo = document.querySelector('#breaking_photo');
let b_div = document.querySelector('#breaking_title');

b_div.style.display = 'none';

b_photo.addEventListener("mouseenter", BMouseOverEffect);
b_photo.addEventListener("mouseleave", BMouseLeaveEffect);

function BMouseOverEffect() {
	b_div.style.display = 'block';
};

function BMouseLeaveEffect() {
	b_div.style.display = 'none';
};

//flag Football
let ff_photo = document.querySelector('#flag_photo');
let ff_div = document.querySelector('#flag_title');

ff_div.style.display = 'none';

ff_photo.addEventListener("mouseenter", FFMouseOverEffect);
ff_photo.addEventListener("mouseleave", FFMouseLeaveEffect);

function FFMouseOverEffect() {
	ff_div.style.display = 'block';
};

function FFMouseLeaveEffect() {
	ff_div.style.display = 'none';
};

//karate
let k_photo = document.querySelector('#karate_photo');
let k_div = document.querySelector('#karate_title');

k_div.style.display = 'none';

k_photo.addEventListener("mouseenter", KMouseOverEffect);
k_photo.addEventListener("mouseleave", KMouseLeaveEffect);

function KMouseOverEffect() {
	k_div.style.display = 'block';
};

function KMouseLeaveEffect() {
	k_div.style.display = 'none';
};

//onclick Events

//baseball

let bb_clicker = document.querySelector('#bball_photo');
let bb_Text = document.querySelector('#baseball');
let bb_content = document.querySelector('#bb_hide')
let bb_hide1 = document.querySelector('#c_hide');
let bb_hide2 = document.querySelector('#s_hide');
let bb_hide3 = document.querySelector('#m_hide');
let bb_hide4 = document.querySelector('#l_hide');
let bb_hide5 = document.querySelector('#kb_hide');
let bb_hide6 = document.querySelector('#b_hide');
let bb_hide7 = document.querySelector('#ff_hide');
let bb_hide8 = document.querySelector('#k_hide');
let grid = document.querySelector('article');
let bb_headline = document.querySelector('#bb_headline');


// hide the P
bb_Text.style.display = 'none';

// make button work
bb_clicker.onclick = bb_showAndHide;

// this function runs each time button is clicked
function bb_showAndHide() {
  if (bb_Text.classList.contains('showing')) {
		bb_hide1.style.display = 'block';
		bb_hide2.style.display = 'block';
		bb_hide3.style.display = 'block';
		bb_hide4.style.display = 'block';
		bb_hide5.style.display = 'block';
		bb_hide6.style.display = 'block';
		bb_hide7.style.display = 'block';
		bb_hide8.style.display = 'block';
		// hide it
    bb_Text.style.display = 'none';
    // remove class
    bb_Text.classList.remove('showing');
		//change position
		bb_content.style.gridColumn = '1';
		bb_content.style.gridRow = '1';
		bb_headline.style.display = 'none';
		grid.style.gridTemplateColumns = '1fr 1fr 1fr';
		bb_photo.addEventListener("mouseenter", MouseOverEffect);
  } else {
		bb_hide1.style.display = 'none';
		bb_hide2.style.display = 'none';
		bb_hide3.style.display = 'none';
		bb_hide4.style.display = 'none';
		bb_hide5.style.display = 'none';
		bb_hide6.style.display = 'none';
		bb_hide7.style.display = 'none';
		bb_hide8.style.display = 'none';
    // show it
    bb_Text.style.display = 'block';
    // add class
    bb_Text.classList.add('showing');
		//change position
		bb_content.style.gridColumn = '2';
		bb_content.style.gridRow = '1';
		//hide map
		bbMap.style.display = 'none';
		grid.style.gridTemplateColumns = '1fr 2.5fr 1fr';
		grid.style.gridTemplateRows = '1fr';
		bb_headline.style.display = 'block';
		bb_photo.removeEventListener("mouseenter", MouseOverEffect);
  }
};

let bbMap = document.querySelector('#bb_map');
let bbButton = document.querySelector('#bb_button');

bbButton.onclick = function () {
  if (bbMap.style.display !== "none") {
    bbMap.style.display = "none";
  } else {
    bbMap.style.display = "block";
		xMap.style.display = "block";
  }
};

//cricket

let c_clicker = document.querySelector('#cricket_photo');
let c_Text = document.querySelector('#cricket');
let c_content = document.querySelector('#c_hide');
let c_hide1 = document.querySelector('#bb_hide');
let c_hide2 = document.querySelector('#s_hide');
let c_hide3 = document.querySelector('#m_hide');
let c_hide4 = document.querySelector('#l_hide');
let c_hide5 = document.querySelector('#kb_hide');
let c_hide6 = document.querySelector('#b_hide');
let c_hide7 = document.querySelector('#ff_hide');
let c_hide8 = document.querySelector('#k_hide');
let c_headline = document.querySelector('#c_headline');

// hide the P
c_Text.style.display = 'none';

// make button work
c_clicker.onclick = c_showAndHide;

// this function runs each time button is clicked
function c_showAndHide() {
  if (c_Text.classList.contains('showing')) {
		c_hide1.style.display = 'block';
		c_hide2.style.display = 'block';
		c_hide3.style.display = 'block';
		c_hide4.style.display = 'block';
		c_hide5.style.display = 'block';
		c_hide6.style.display = 'block';
		c_hide7.style.display = 'block';
		c_hide8.style.display = 'block';
		// hide it
    c_Text.style.display = 'none';
    // remove class
    c_Text.classList.remove('showing');
		//change position
		c_content.style.gridColumn = '2';
		c_content.style.gridRow = '1';
		grid.style.gridTemplateColumns = '1fr 1fr 1fr';
		c_headline.style.display = 'none';
		c_photo.addEventListener("mouseenter", CMouseOverEffect);
  } else {
		c_hide1.style.display = 'none';
		c_hide2.style.display = 'none';
		c_hide3.style.display = 'none';
		c_hide4.style.display = 'none';
		c_hide5.style.display = 'none';
		c_hide6.style.display = 'none';
		c_hide7.style.display = 'none';
		c_hide8.style.display = 'none';
		// show it
    c_Text.style.display = 'block';
    // add class
    c_Text.classList.add('showing');
		//change position
		c_content.style.gridColumn = '2';
		c_content.style.gridRow = '1';
		grid.style.gridTemplateColumns = '1fr 2.5fr 1fr';
		grid.style.gridTemplateRows = '1fr';
		cMap.style.display = 'none';
		c_headline.style.display = 'block';
		c_photo.removeEventListener("mouseenter", CMouseOverEffect);
  }
};

let cMap = document.querySelector('#c_map');
let cButton = document.querySelector('#c_button');

cButton.onclick = function () {
  if (cMap.style.display !== "none") {
    cMap.style.display = "none";
  } else {
    cMap.style.display = "block";
  }
};

//squash
let s_clicker = document.querySelector('#squash_photo');
let s_Text = document.querySelector('#squash');
let s_content = document.querySelector('#s_hide');
let s_hide1 = document.querySelector('#bb_hide');
let s_hide2 = document.querySelector('#c_hide');
let s_hide3 = document.querySelector('#m_hide');
let s_hide4 = document.querySelector('#l_hide');
let s_hide5 = document.querySelector('#kb_hide');
let s_hide6 = document.querySelector('#b_hide');
let s_hide7 = document.querySelector('#ff_hide');
let s_hide8 = document.querySelector('#k_hide');
let s_headline = document.querySelector('#s_headline');

// hide the P
s_Text.style.display = 'none';

// make button work
s_clicker.onclick = s_showAndHide;

// this function runs each time button is clicked
function s_showAndHide() {
  if (s_Text.classList.contains('showing')) {
		s_hide1.style.display = 'block';
		s_hide2.style.display = 'block';
		s_hide3.style.display = 'block';
		s_hide4.style.display = 'block';
		s_hide5.style.display = 'block';
		s_hide6.style.display = 'block';
		s_hide7.style.display = 'block';
		s_hide8.style.display = 'block';
		// hide it
    s_Text.style.display = 'none';
    // remove class
    s_Text.classList.remove('showing');
		//change position
		s_content.style.gridColumn = '3';
		s_content.style.gridRow = '1';
		grid.style.gridTemplateColumns = '1fr 1fr 1fr';
		s_headline.style.display = 'none';
		s_photo.addEventListener("mouseenter", SMouseOverEffect);
  } else {
		s_hide1.style.display = 'none';
		s_hide2.style.display = 'none';
		s_hide3.style.display = 'none';
		s_hide4.style.display = 'none';
		s_hide5.style.display = 'none';
		s_hide6.style.display = 'none';
		s_hide7.style.display = 'none';
		s_hide8.style.display = 'none';
		// show it
    s_Text.style.display = 'block';
    // add class
    s_Text.classList.add('showing');
		//change position
		s_content.style.gridColumn = '2';
		s_content.style.gridRow = '1';
		grid.style.gridTemplateColumns = '1fr 2.5fr 1fr';
		grid.style.gridTemplateRows = '1fr';
		sMap.style.display = 'none';
		s_headline.style.display = 'block';
		s_photo.removeEventListener("mouseenter", SMouseOverEffect);
  }
};

let sMap = document.querySelector('#s_map');
let sButton = document.querySelector('#s_button');

sButton.onclick = function () {
  if (sMap.style.display !== "none") {
    sMap.style.display = "none";
  } else {
    sMap.style.display = "block";
  }
};

//Motorsport

let m_clicker = document.querySelector('#motorsport_photo');
let m_Text = document.querySelector('#motorsport');
let m_content = document.querySelector('#m_hide');
let m_hide1 = document.querySelector('#bb_hide');
let m_hide2 = document.querySelector('#c_hide');
let m_hide3 = document.querySelector('#s_hide');
let m_hide4 = document.querySelector('#l_hide');
let m_hide5 = document.querySelector('#kb_hide');
let m_hide6 = document.querySelector('#b_hide');
let m_hide7 = document.querySelector('#ff_hide');
let m_hide8 = document.querySelector('#k_hide');
let m_headline = document.querySelector('#m_headline');

// hide the P
m_Text.style.display = 'none';

// make button work
m_clicker.onclick = m_showAndHide;

// this function runs each time button is clicked
function m_showAndHide() {
  if (m_Text.classList.contains('showing')) {
		m_hide1.style.display = 'block';
		m_hide2.style.display = 'block';
		m_hide3.style.display = 'block';
		m_hide4.style.display = 'block';
		m_hide5.style.display = 'block';
		m_hide6.style.display = 'block';
		m_hide7.style.display = 'block';
		m_hide8.style.display = 'block';
		// hide it
    m_Text.style.display = 'none';
    // remove class
    m_Text.classList.remove('showing');
		//change position
		m_content.style.gridColumn = '1';
		m_content.style.gridRow = '2';
		grid.style.gridTemplateColumns = '1fr 1fr 1fr';
		m_headline.style.display = 'none';
		m_photo.addEventListener("mouseenter", MMouseOverEffect);
  } else {
		m_hide1.style.display = 'none';
		m_hide2.style.display = 'none';
		m_hide3.style.display = 'none';
		m_hide4.style.display = 'none';
		m_hide5.style.display = 'none';
		m_hide6.style.display = 'none';
		m_hide7.style.display = 'none';
		m_hide8.style.display = 'none';
		// show it
    m_Text.style.display = 'block';
    // add class
    m_Text.classList.add('showing');
		//change position
		m_content.style.gridColumn = '2';
		m_content.style.gridRow = '1';
		grid.style.gridTemplateColumns = '1fr 2.5fr 1fr';
		grid.style.gridTemplateRows = '1fr';
		mMap.style.display = 'none';
		m_headline.style.display = 'block';
		m_photo.removeEventListener("mouseenter", MMouseOverEffect);
  }
};

let mMap = document.querySelector('#m_map');
let mButton = document.querySelector('#m_button');

mButton.onclick = function () {
  if (mMap.style.display !== "none") {
    mMap.style.display = "none";
  } else {
    mMap.style.display = "block";
  }
};

//lacrosse

let l_clicker = document.querySelector('#lax_photo');
let l_Text = document.querySelector('#lacrosse');
let l_content = document.querySelector('#l_hide');
let l_hide1 = document.querySelector('#bb_hide');
let l_hide2 = document.querySelector('#c_hide');
let l_hide3 = document.querySelector('#s_hide');
let l_hide4 = document.querySelector('#m_hide');
let l_hide5 = document.querySelector('#kb_hide');
let l_hide6 = document.querySelector('#b_hide');
let l_hide7 = document.querySelector('#ff_hide');
let l_hide8 = document.querySelector('#k_hide');
let l_headline = document.querySelector('#l_headline');

// hide the P
l_Text.style.display = 'none';

// make button work
l_clicker.onclick = l_showAndHide;

// this function runs each time button is clicked
function l_showAndHide() {
  if (l_Text.classList.contains('showing')) {
		l_hide1.style.display = 'block';
		l_hide2.style.display = 'block';
		l_hide3.style.display = 'block';
		l_hide4.style.display = 'block';
		l_hide5.style.display = 'block';
		l_hide6.style.display = 'block';
		l_hide7.style.display = 'block';
		l_hide8.style.display = 'block';
		// hide it
    l_Text.style.display = 'none';
    // remove class
    l_Text.classList.remove('showing');
		//position change
		l_content.style.gridColumn = '2';
		l_content.style.gridRow = '2';
		grid.style.gridTemplateColumns = '1fr 1fr 1fr';
		l_headline.style.display = 'none';
		l_photo.addEventListener("mouseenter", LMouseOverEffect);
  } else {
		l_hide1.style.display = 'none';
		l_hide2.style.display = 'none';
		l_hide3.style.display = 'none';
		l_hide4.style.display = 'none';
		l_hide5.style.display = 'none';
		l_hide6.style.display = 'none';
		l_hide7.style.display = 'none';
		l_hide8.style.display = 'none';
		// show it
    l_Text.style.display = 'block';
    // add class
    l_Text.classList.add('showing');
		//position change
		l_content.style.gridColumn = '2';
		l_content.style.gridRow = '1';
		grid.style.gridTemplateColumns = '1fr 2.5fr 1fr';
		grid.style.gridTemplateRows = '1fr';
		lMap.style.display = 'none';
		l_headline.style.display = 'block';
		l_photo.removeEventListener("mouseenter", LMouseOverEffect);
  }
};

let lMap = document.querySelector('#l_map');
let lButton = document.querySelector('#l_button');

lButton.onclick = function () {
  if (lMap.style.display !== "none") {
    lMap.style.display = "none";
  } else {
    lMap.style.display = "block";
  }
};

//kickboxing
let kb_clicker = document.querySelector('#kickboxing_photo');
let kb_Text = document.querySelector('#kickboxing');
let kb_content = document.querySelector('#kb_hide');
let kb_hide1 = document.querySelector('#bb_hide');
let kb_hide2 = document.querySelector('#c_hide');
let kb_hide3 = document.querySelector('#s_hide');
let kb_hide4 = document.querySelector('#m_hide');
let kb_hide5 = document.querySelector('#l_hide');
let kb_hide6 = document.querySelector('#b_hide');
let kb_hide7 = document.querySelector('#ff_hide');
let kb_hide8 = document.querySelector('#k_hide');
let kb_headline = document.querySelector('#kb_headline');

// hide the P
kb_Text.style.display = 'none';

// make button work
kb_clicker.onclick = kb_showAndHide;

// this function runs each time button is clicked
function kb_showAndHide() {
  if (kb_Text.classList.contains('showing')) {
		kb_hide1.style.display = 'block';
		kb_hide2.style.display = 'block';
		kb_hide3.style.display = 'block';
		kb_hide4.style.display = 'block';
		kb_hide5.style.display = 'block';
		kb_hide6.style.display = 'block';
		kb_hide7.style.display = 'block';
		kb_hide8.style.display = 'block';
		// hide it
    kb_Text.style.display = 'none';
    // remove class
    kb_Text.classList.remove('showing');
		//position change
		kb_content.style.gridColumn = '3';
		kb_content.style.gridRow = '2';
		grid.style.gridTemplateColumns = '1fr 1fr 1fr';
		kb_headline.style.display = 'none';
		kb_photo.addEventListener("mouseenter", KBMouseOverEffect);
  } else {
		kb_hide1.style.display = 'none';
		kb_hide2.style.display = 'none';
		kb_hide3.style.display = 'none';
		kb_hide4.style.display = 'none';
		kb_hide5.style.display = 'none';
		kb_hide6.style.display = 'none';
		kb_hide7.style.display = 'none';
		kb_hide8.style.display = 'none';
		// show it
    kb_Text.style.display = 'block';
    // add class
    kb_Text.classList.add('showing');
		//position change
		kb_content.style.gridColumn = '2';
		kb_content.style.gridRow = '1';
		grid.style.gridTemplateColumns = '1fr 2.5fr 1fr';
		grid.style.gridTemplateRows = '1fr';
		kbMap.style.display = 'none';
		kb_headline.style.display = 'block';
		kb_photo.removeEventListener("mouseenter", KBMouseOverEffect);
  }
};

let kbMap = document.querySelector('#kb_map');
let kbButton = document.querySelector('#kb_button');

kbButton.onclick = function () {
  if (kbMap.style.display !== "none") {
    kbMap.style.display = "none";
  } else {
    kbMap.style.display = "block";
  }
};

//Breaking

let b_clicker = document.querySelector('#breaking_photo');
let b_Text = document.querySelector('#breaking');
let b_content = document.querySelector('#b_hide');
let b_hide1 = document.querySelector('#bb_hide');
let b_hide2 = document.querySelector('#c_hide');
let b_hide3 = document.querySelector('#s_hide');
let b_hide4 = document.querySelector('#m_hide');
let b_hide5 = document.querySelector('#l_hide');
let b_hide6 = document.querySelector('#kb_hide');
let b_hide7 = document.querySelector('#ff_hide');
let b_hide8 = document.querySelector('#k_hide');
let b_headline = document.querySelector('#b_headline');

// hide the P
b_Text.style.display = 'none';

// make button work
b_clicker.onclick = b_showAndHide;

// this function runs each time button is clicked
function b_showAndHide() {
  if (b_Text.classList.contains('showing')) {
		b_hide1.style.display = 'block';
		b_hide2.style.display = 'block';
		b_hide3.style.display = 'block';
		b_hide4.style.display = 'block';
		b_hide5.style.display = 'block';
		b_hide6.style.display = 'block';
		b_hide7.style.display = 'block';
		b_hide8.style.display = 'block';
		// hide it
    b_Text.style.display = 'none';
    // remove class
    b_Text.classList.remove('showing');
		//change position
		b_content.style.gridColumn = '1';
		b_content.style.gridRow = '3';
		grid.style.gridTemplateColumns = '1fr 1fr 1fr';
		b_headline.style.display = 'none';
		b_photo.addEventListener("mouseenter", BMouseOverEffect);
  } else {
		b_hide1.style.display = 'none';
		b_hide2.style.display = 'none';
		b_hide3.style.display = 'none';
		b_hide4.style.display = 'none';
		b_hide5.style.display = 'none';
		b_hide6.style.display = 'none';
		b_hide7.style.display = 'none';
		b_hide8.style.display = 'none';
		// show it
    b_Text.style.display = 'block';
    // add class
    b_Text.classList.add('showing');
		//change position
		b_content.style.gridColumn = '2';
		b_content.style.gridRow = '1';
		grid.style.gridTemplateColumns = '1fr 2.5fr 1fr';
		grid.style.gridTemplateRows = '1fr';
		bMap.style.display = 'none';
		b_headline.style.display = 'block';
		b_photo.removeEventListener("mouseenter", BMouseOverEffect);
  }
};

let bMap = document.querySelector('#b_map');
let bButton = document.querySelector('#b_button');

bButton.onclick = function () {
  if (bMap.style.display !== "none") {
    bMap.style.display = "none";
  } else {
    bMap.style.display = "block";
  }
};

//flag football

let ff_clicker = document.querySelector('#flag_photo');
let ff_Text = document.querySelector('#flag');
let ff_content = document.querySelector('#ff_hide');
let ff_hide1 = document.querySelector('#bb_hide');
let ff_hide2 = document.querySelector('#c_hide');
let ff_hide3 = document.querySelector('#s_hide');
let ff_hide4 = document.querySelector('#m_hide');
let ff_hide5 = document.querySelector('#l_hide');
let ff_hide6 = document.querySelector('#kb_hide');
let ff_hide7 = document.querySelector('#b_hide');
let ff_hide8 = document.querySelector('#k_hide');
let ff_headline = document.querySelector('#ff_headline');

// hide the P
ff_Text.style.display = 'none';

// make button work
ff_clicker.onclick = ff_showAndHide;

// this function runs each time button is clicked
function ff_showAndHide() {
  if (ff_Text.classList.contains('showing')) {
		ff_hide1.style.display = 'block';
		ff_hide2.style.display = 'block';
		ff_hide3.style.display = 'block';
		ff_hide4.style.display = 'block';
		ff_hide5.style.display = 'block';
		ff_hide6.style.display = 'block';
		ff_hide7.style.display = 'block';
		ff_hide8.style.display = 'block';
		// hide it
    ff_Text.style.display = 'none';
    // remove class
    ff_Text.classList.remove('showing');
		//change position
		ff_content.style.gridColumn = '2';
		ff_content.style.gridRow = '3';
		grid.style.gridTemplateColumns = '1fr 1fr 1fr';
		ff_headline.style.display = 'none';
		ff_photo.addEventListener("mouseenter", FFMouseOverEffect);
  } else {
		ff_hide1.style.display = 'none';
		ff_hide2.style.display = 'none';
		ff_hide3.style.display = 'none';
		ff_hide4.style.display = 'none';
		ff_hide5.style.display = 'none';
		ff_hide6.style.display = 'none';
		ff_hide7.style.display = 'none';
		ff_hide8.style.display = 'none';
		// show it
    ff_Text.style.display = 'block';
    // add class
    ff_Text.classList.add('showing');
		//change position
		ff_content.style.gridColumn = '2';
		ff_content.style.gridRow = '1';
		grid.style.gridTemplateColumns = '1fr 2.5fr 1fr';
		grid.style.gridTemplateRows = '1fr';
		ffMap.style.display = 'none';
		ff_headline.style.display = 'block';
		ff_photo.removeEventListener("mouseenter", FFMouseOverEffect);
  }
};

let ffMap = document.querySelector('#ff_map');
let ffButton = document.querySelector('#ff_button');

ffButton.onclick = function () {
  if (ffMap.style.display !== "none") {
    ffMap.style.display = "none";
  } else {
    ffMap.style.display = "block";
  }
};


//karate

let k_clicker = document.querySelector('#karate_photo');
let k_Text = document.querySelector('#karate');
let k_content = document.querySelector('#k_hide');
let k_hide1 = document.querySelector('#bb_hide');
let k_hide2 = document.querySelector('#c_hide');
let k_hide3 = document.querySelector('#s_hide');
let k_hide4 = document.querySelector('#m_hide');
let k_hide5 = document.querySelector('#l_hide');
let k_hide6 = document.querySelector('#kb_hide');
let k_hide7 = document.querySelector('#b_hide');
let k_hide8 = document.querySelector('#ff_hide');
let k_headline = document.querySelector('#k_headline');

// hide the P
k_Text.style.display = 'none';

// make button work
k_clicker.onclick = k_showAndHide;

// this function runs each time button is clicked
function k_showAndHide() {
  if (k_Text.classList.contains('showing')) {
		k_hide1.style.display = 'block';
		k_hide2.style.display = 'block';
		k_hide3.style.display = 'block';
		k_hide4.style.display = 'block';
		k_hide5.style.display = 'block';
		k_hide6.style.display = 'block';
		k_hide7.style.display = 'block';
		k_hide8.style.display = 'block';
		// hide it
    k_Text.style.display = 'none';
    // remove class
    k_Text.classList.remove('showing');
		//change position
		k_content.style.gridColumn = '3';
		k_content.style.gridRow = '3';
		grid.style.gridTemplateColumns = '1fr 1fr 1fr';
		k_headline.style.display = 'none';
		k_photo.addEventListener("mouseenter", KMouseOverEffect);
  } else {
		k_hide1.style.display = 'none';
		k_hide2.style.display = 'none';
		k_hide3.style.display = 'none';
		k_hide4.style.display = 'none';
		k_hide5.style.display = 'none';
		k_hide6.style.display = 'none';
		k_hide7.style.display = 'none';
		k_hide8.style.display = 'none';
		// show it
    k_Text.style.display = 'block';
    // add class
    k_Text.classList.add('showing');
		//change position
		k_content.style.gridColumn = '2';
		k_content.style.gridRow = '1';
		grid.style.gridTemplateColumns = '1fr 2.5fr 1fr';
		grid.style.gridTemplateRows = '1fr';
		kMap.style.display = 'none';
		k_headline.style.display = 'block';
		k_photo.removeEventListener("mouseenter", KMouseOverEffect);
  }
};

let kMap = document.querySelector('#k_map');
let kButton = document.querySelector('#k_button');

kButton.onclick = function () {
  if (kMap.style.display !== "none") {
    kMap.style.display = "none";
  } else {
    kMap.style.display = "block";
  }
};
