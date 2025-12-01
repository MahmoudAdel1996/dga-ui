import{a as v}from"./chunk-522BR6GU.js";import{$a as s,Ea as r,La as b,Ma as n,Na as e,Oa as p,Ya as o,Za as l,_a as d,ab as i,bb as a,oa as t,vb as x,xb as y,ya as g}from"./chunk-6STGATHH.js";var h=class c{solidButtonsCode=`<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-neutral">Neutral</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-danger">Danger</button>`;outlineButtonsCode=`<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-neutral">Neutral</button>
<button type="button" class="btn btn-outline-danger">Danger</button>`;buttonSizesCode=`<button type="button" class="btn btn-primary btn-lg">Large</button>
<button type="button" class="btn btn-primary">Default</button>
<button type="button" class="btn btn-primary btn-sm">Small</button>
<button type="button" class="btn btn-primary btn-xs">Extra Small</button>`;buttonStatesCode=`<button type="button" class="btn btn-primary">Normal</button>
<button type="button" class="btn btn-primary active">Active</button>
<button type="button" class="btn btn-primary" disabled>Disabled</button>`;buttonIconLeftCode=`<button type="button" class="btn btn-primary btn-icon">
  <i class="hgi hgi-stroke hgi-download-04"></i>Download
</button>
<button type="button" class="btn btn-neutral btn-icon">
  <i class="hgi hgi-stroke hgi-upload-04"></i>Upload
</button>
<button type="button" class="btn btn-secondary btn-icon">
  <i class="hgi hgi-stroke hgi-pencil-edit-02"></i>Edit
</button>
<button type="button" class="btn btn-danger btn-icon">
  <i class="hgi hgi-stroke hgi-delete-02"></i>Delete
</button>`;buttonIconRightCode=`<button type="button" class="btn btn-primary btn-icon">
  Save<i class="hgi hgi-stroke hgi-tick-02"></i>
</button>
<button type="button" class="btn btn-neutral btn-icon">
  Search<i class="hgi hgi-stroke hgi-search-01"></i>
</button>
<button type="button" class="btn btn-secondary btn-icon">
  Settings<i class="hgi hgi-stroke hgi-settings-02"></i>
</button>`;buttonIconOnlyCode=`<button type="button" class="btn btn-primary btn-icon" aria-label="Download">
  <i class="hgi hgi-stroke hgi-download-04"></i>
</button>
<button type="button" class="btn btn-neutral btn-icon" aria-label="Upload">
  <i class="hgi hgi-stroke hgi-upload-04"></i>
</button>
<button type="button" class="btn btn-secondary btn-icon" aria-label="Edit">
  <i class="hgi hgi-stroke hgi-pencil-edit-02"></i>
</button>
<button type="button" class="btn btn-danger btn-icon" aria-label="Delete">
  <i class="hgi hgi-stroke hgi-delete-02"></i>
</button>`;dropdownButtonCode=`<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown Primary
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

<div class="dropdown">
  <button class="btn btn-neutral dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown Neutral
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>`;dropdownSizesCode=`<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Large
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

<div class="dropdown">
  <button class="btn btn-neutral dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Default
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Small
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>`;iconDropdownCode=`<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="hgi hgi-stroke hgi-settings-02"></i>
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

<div class="dropdown">
  <button class="btn btn-neutral dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="hgi hgi-stroke hgi-settings-02"></i>
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="hgi hgi-stroke hgi-settings-02"></i>
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>`;static \u0275fac=function(m){return new(m||c)};static \u0275cmp=g({type:c,selectors:[["app-buttons"]],decls:416,vars:326,consts:[[1,"container","py-5"],[1,"display-4","mb-4"],[1,"lead","mb-5"],[1,"demo-section"],[1,"component-showcase"],["type","button",1,"btn","btn-primary"],["type","button",1,"btn","btn-neutral"],["type","button",1,"btn","btn-secondary"],["type","button",1,"btn","btn-danger"],[3,"htmlCode"],[1,"mt-5"],["type","button",1,"btn","btn-outline-primary"],["type","button",1,"btn","btn-outline-secondary"],["type","button",1,"btn","btn-outline-neutral"],["type","button",1,"btn","btn-outline-danger"],["type","button",1,"btn","btn-primary","btn-lg"],["type","button",1,"btn","btn-primary","btn-sm"],["type","button",1,"btn","btn-primary","btn-xs"],[1,"component-showcase","mb-3"],["type","button",1,"btn","btn-primary","active"],["type","button","disabled","",1,"btn","btn-primary"],["type","button",1,"btn","btn-neutral","active"],["type","button","disabled","",1,"btn","btn-neutral"],["type","button",1,"btn","btn-secondary","active"],["type","button","disabled","",1,"btn","btn-secondary"],["type","button",1,"btn","btn-danger","active"],["type","button","disabled","",1,"btn","btn-danger"],["type","button",1,"btn","btn-primary","btn-icon"],[1,"hgi","hgi-stroke","hgi-download-04"],["type","button",1,"btn","btn-neutral","btn-icon"],[1,"hgi","hgi-stroke","hgi-upload-04"],["type","button",1,"btn","btn-secondary","btn-icon"],[1,"hgi","hgi-stroke","hgi-pencil-edit-02"],["type","button",1,"btn","btn-danger","btn-icon"],[1,"hgi","hgi-stroke","hgi-delete-02"],[1,"hgi","hgi-stroke","hgi-tick-02"],[1,"hgi","hgi-stroke","hgi-search-01"],[1,"hgi","hgi-stroke","hgi-settings-02"],["type","button",1,"btn","btn-primary","btn-icon","btn-sm"],[1,"hgi","hgi-stroke","hgi-plus-sign-circle"],["type","button",1,"btn","btn-outline-primary","btn-icon"],[1,"hgi","hgi-stroke","hgi-arrow-right-01"],["type","button",1,"btn","btn-outline-secondary","btn-icon"],[1,"hgi","hgi-stroke","hgi-arrow-left-01"],["type","button",1,"btn","btn-primary","btn-icon",3,"aria-label"],["type","button",1,"btn","btn-neutral","btn-icon",3,"aria-label"],["type","button",1,"btn","btn-secondary","btn-icon",3,"aria-label"],["type","button",1,"btn","btn-danger","btn-icon",3,"aria-label"],["type","button",1,"btn","btn-outline-primary","btn-icon",3,"aria-label"],["type","button",1,"btn","btn-outline-secondary","btn-icon",3,"aria-label"],["type","button",1,"btn","btn-outline-neutral","btn-icon",3,"aria-label"],["type","button",1,"btn","btn-neutral","btn-icon","btn-sm",3,"aria-label"],["type","button",1,"btn","btn-secondary","btn-icon","btn-xs",3,"aria-label"],[1,"dropdown"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-primary","dropdown-toggle"],[1,"dropdown-menu"],["type","button",1,"dropdown-item"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-neutral","dropdown-toggle"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-secondary","dropdown-toggle"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-danger","dropdown-toggle"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-outline-primary","dropdown-toggle"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-outline-secondary","dropdown-toggle"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-outline-neutral","dropdown-toggle"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-primary","dropdown-toggle","btn-lg"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-secondary","dropdown-toggle","btn-sm"]],template:function(m,u){m&1&&(n(0,"div",0)(1,"h1",1),o(2),i(3,"translate"),e(),n(4,"p",2),o(5),i(6,"translate"),e(),n(7,"section",3)(8,"h2"),o(9),i(10,"translate"),e(),n(11,"div",4)(12,"button",5),o(13),i(14,"translate"),e(),n(15,"button",6),o(16),i(17,"translate"),e(),n(18,"button",7),o(19),i(20,"translate"),e(),n(21,"button",8),o(22),i(23,"translate"),e()(),p(24,"app-code-example",9),n(25,"h3",10),o(26),i(27,"translate"),e(),n(28,"div",4)(29,"button",11),o(30),i(31,"translate"),e(),n(32,"button",12),o(33),i(34,"translate"),e(),n(35,"button",13),o(36),i(37,"translate"),e(),n(38,"button",14),o(39),i(40,"translate"),e()(),p(41,"app-code-example",9),n(42,"h3",10),o(43),i(44,"translate"),e(),n(45,"div",4)(46,"button",15),o(47),i(48,"translate"),e(),n(49,"button",5),o(50),i(51,"translate"),e(),n(52,"button",16),o(53),i(54,"translate"),e(),n(55,"button",17),o(56),i(57,"translate"),e()(),p(58,"app-code-example",9),n(59,"h3",10),o(60),i(61,"translate"),e(),n(62,"div",18)(63,"button",5),o(64),i(65,"translate"),e(),n(66,"button",19),o(67),i(68,"translate"),e(),n(69,"button",20),o(70),i(71,"translate"),e()(),n(72,"div",18)(73,"button",6),o(74),i(75,"translate"),e(),n(76,"button",21),o(77),i(78,"translate"),e(),n(79,"button",22),o(80),i(81,"translate"),e()(),n(82,"div",18)(83,"button",7),o(84),i(85,"translate"),e(),n(86,"button",23),o(87),i(88,"translate"),e(),n(89,"button",24),o(90),i(91,"translate"),e()(),n(92,"div",4)(93,"button",8),o(94),i(95,"translate"),e(),n(96,"button",25),o(97),i(98,"translate"),e(),n(99,"button",26),o(100),i(101,"translate"),e()(),p(102,"app-code-example",9),n(103,"h3",10),o(104),i(105,"translate"),e(),n(106,"div",18)(107,"button",27),p(108,"i",28),o(109),i(110,"translate"),e(),n(111,"button",29),p(112,"i",30),o(113),i(114,"translate"),e(),n(115,"button",31),p(116,"i",32),o(117),i(118,"translate"),e(),n(119,"button",33),p(120,"i",34),o(121),i(122,"translate"),e()(),p(123,"app-code-example",9),n(124,"div",18)(125,"button",27),o(126),i(127,"translate"),p(128,"i",35),e(),n(129,"button",29),o(130),i(131,"translate"),p(132,"i",36),e(),n(133,"button",31),o(134),i(135,"translate"),p(136,"i",37),e()(),p(137,"app-code-example",9),n(138,"div",18)(139,"button",38),p(140,"i",39),o(141),i(142,"translate"),e(),n(143,"button",40),p(144,"i",41),o(145),i(146,"translate"),e(),n(147,"button",42),p(148,"i",43),o(149),i(150,"translate"),e()(),n(151,"h3",10),o(152),i(153,"translate"),e(),n(154,"div",18)(155,"button",44),i(156,"translate"),p(157,"i",28),e(),n(158,"button",45),i(159,"translate"),p(160,"i",30),e(),n(161,"button",46),i(162,"translate"),p(163,"i",32),e(),n(164,"button",47),i(165,"translate"),p(166,"i",34),e()(),n(167,"div",18)(168,"button",48),i(169,"translate"),p(170,"i",36),e(),n(171,"button",49),i(172,"translate"),p(173,"i",37),e(),n(174,"button",50),i(175,"translate"),p(176,"i",39),e()(),n(177,"div",4)(178,"button",44),i(179,"translate"),p(180,"i",36),e(),n(181,"button",51),i(182,"translate"),p(183,"i",37),e(),n(184,"button",52),i(185,"translate"),p(186,"i",39),e()(),p(187,"app-code-example",9),n(188,"h3",10),o(189),i(190,"translate"),e(),n(191,"div",18)(192,"div",53)(193,"button",54),o(194),i(195,"translate"),e(),n(196,"ul",55)(197,"li")(198,"button",56),o(199),i(200,"translate"),e()(),n(201,"li")(202,"button",56),o(203),i(204,"translate"),e()(),n(205,"li")(206,"button",56),o(207),i(208,"translate"),e()()()(),n(209,"div",53)(210,"button",57),o(211),i(212,"translate"),e(),n(213,"ul",55)(214,"li")(215,"button",56),o(216),i(217,"translate"),e()(),n(218,"li")(219,"button",56),o(220),i(221,"translate"),e()(),n(222,"li")(223,"button",56),o(224),i(225,"translate"),e()()()(),n(226,"div",53)(227,"button",58),o(228),i(229,"translate"),e(),n(230,"ul",55)(231,"li")(232,"button",56),o(233),i(234,"translate"),e()(),n(235,"li")(236,"button",56),o(237),i(238,"translate"),e()(),n(239,"li")(240,"button",56),o(241),i(242,"translate"),e()()()(),n(243,"div",53)(244,"button",59),o(245),i(246,"translate"),e(),n(247,"ul",55)(248,"li")(249,"button",56),o(250),i(251,"translate"),e()(),n(252,"li")(253,"button",56),o(254),i(255,"translate"),e()(),n(256,"li")(257,"button",56),o(258),i(259,"translate"),e()()()()(),p(260,"app-code-example",9),n(261,"div",18)(262,"div",53)(263,"button",60),o(264),i(265,"translate"),e(),n(266,"ul",55)(267,"li")(268,"button",56),o(269),i(270,"translate"),e()(),n(271,"li")(272,"button",56),o(273),i(274,"translate"),e()(),n(275,"li")(276,"button",56),o(277),i(278,"translate"),e()()()(),n(279,"div",53)(280,"button",61),o(281),i(282,"translate"),e(),n(283,"ul",55)(284,"li")(285,"button",56),o(286),i(287,"translate"),e()(),n(288,"li")(289,"button",56),o(290),i(291,"translate"),e()(),n(292,"li")(293,"button",56),o(294),i(295,"translate"),e()()()(),n(296,"div",53)(297,"button",62),o(298),i(299,"translate"),e(),n(300,"ul",55)(301,"li")(302,"button",56),o(303),i(304,"translate"),e()(),n(305,"li")(306,"button",56),o(307),i(308,"translate"),e()(),n(309,"li")(310,"button",56),o(311),i(312,"translate"),e()()()()(),n(313,"div",4)(314,"div",53)(315,"button",63),o(316),i(317,"translate"),e(),n(318,"ul",55)(319,"li")(320,"button",56),o(321),i(322,"translate"),e()(),n(323,"li")(324,"button",56),o(325),i(326,"translate"),e()(),n(327,"li")(328,"button",56),o(329),i(330,"translate"),e()()()(),n(331,"div",53)(332,"button",57),o(333),i(334,"translate"),e(),n(335,"ul",55)(336,"li")(337,"button",56),o(338),i(339,"translate"),e()(),n(340,"li")(341,"button",56),o(342),i(343,"translate"),e()(),n(344,"li")(345,"button",56),o(346),i(347,"translate"),e()()()(),n(348,"div",53)(349,"button",64),o(350),i(351,"translate"),e(),n(352,"ul",55)(353,"li")(354,"button",56),o(355),i(356,"translate"),e()(),n(357,"li")(358,"button",56),o(359),i(360,"translate"),e()(),n(361,"li")(362,"button",56),o(363),i(364,"translate"),e()()()()(),p(365,"app-code-example",9),n(366,"div",4)(367,"div",53)(368,"button",63),p(369,"i",37),e(),n(370,"ul",55)(371,"li")(372,"button",56),o(373),i(374,"translate"),e()(),n(375,"li")(376,"button",56),o(377),i(378,"translate"),e()(),n(379,"li")(380,"button",56),o(381),i(382,"translate"),e()()()(),n(383,"div",53)(384,"button",57),p(385,"i",37),e(),n(386,"ul",55)(387,"li")(388,"button",56),o(389),i(390,"translate"),e()(),n(391,"li")(392,"button",56),o(393),i(394,"translate"),e()(),n(395,"li")(396,"button",56),o(397),i(398,"translate"),e()()()(),n(399,"div",53)(400,"button",64),p(401,"i",37),e(),n(402,"ul",55)(403,"li")(404,"button",56),o(405),i(406,"translate"),e()(),n(407,"li")(408,"button",56),o(409),i(410,"translate"),e()(),n(411,"li")(412,"button",56),o(413),i(414,"translate"),e()()()()(),p(415,"app-code-example",9),e()()),m&2&&(t(2),l(a(3,122,"buttons.title")),t(3),l(a(6,124,"buttons.subtitle")),t(4),l(a(10,126,"buttons.section_solid")),t(4),l(a(14,128,"buttons.primary")),t(3),l(a(17,130,"buttons.neutral")),t(3),l(a(20,132,"buttons.secondary")),t(3),l(a(23,134,"buttons.danger")),t(2),b("htmlCode",u.solidButtonsCode),t(2),l(a(27,136,"buttons.section_outline")),t(4),l(a(31,138,"buttons.primary")),t(3),l(a(34,140,"buttons.secondary")),t(3),l(a(37,142,"buttons.neutral")),t(3),l(a(40,144,"buttons.danger")),t(2),b("htmlCode",u.outlineButtonsCode),t(2),l(a(44,146,"buttons.section_sizes")),t(4),l(a(48,148,"buttons.large")),t(3),l(a(51,150,"buttons.default")),t(3),l(a(54,152,"buttons.small")),t(3),l(a(57,154,"buttons.extra_small")),t(2),b("htmlCode",u.buttonSizesCode),t(2),l(a(61,156,"buttons.section_states")),t(4),l(a(65,158,"buttons.normal")),t(3),l(a(68,160,"buttons.active")),t(3),l(a(71,162,"buttons.disabled")),t(4),l(a(75,164,"buttons.normal")),t(3),l(a(78,166,"buttons.active")),t(3),l(a(81,168,"buttons.disabled")),t(4),l(a(85,170,"buttons.normal")),t(3),l(a(88,172,"buttons.active")),t(3),l(a(91,174,"buttons.disabled")),t(4),l(a(95,176,"buttons.normal")),t(3),l(a(98,178,"buttons.active")),t(3),l(a(101,180,"buttons.disabled")),t(2),b("htmlCode",u.buttonStatesCode),t(2),l(a(105,182,"buttons.section_icons")),t(5),d("",a(110,184,"buttons.download")," "),t(4),d("",a(114,186,"buttons.upload")," "),t(4),d("",a(118,188,"buttons.edit")," "),t(4),d("",a(122,190,"buttons.delete")," "),t(2),b("htmlCode",u.buttonIconLeftCode),t(3),d(" ",a(127,192,"buttons.save")),t(4),d(" ",a(131,194,"buttons.search")),t(4),d(" ",a(135,196,"buttons.settings")),t(3),b("htmlCode",u.buttonIconRightCode),t(4),d("",a(142,198,"buttons.add")," "),t(4),d("",a(146,200,"buttons.next")," "),t(4),d("",a(150,202,"buttons.previous")," "),t(3),l(a(153,204,"buttons.section_icon_only")),t(3),r("aria-label",s(a(156,206,"buttons.download"))),t(3),r("aria-label",s(a(159,208,"buttons.upload"))),t(3),r("aria-label",s(a(162,210,"buttons.edit"))),t(3),r("aria-label",s(a(165,212,"buttons.delete"))),t(4),r("aria-label",s(a(169,214,"buttons.search"))),t(3),r("aria-label",s(a(172,216,"buttons.settings"))),t(3),r("aria-label",s(a(175,218,"buttons.add"))),t(4),r("aria-label",s(a(179,220,"buttons.search"))),t(3),r("aria-label",s(a(182,222,"buttons.settings"))),t(3),r("aria-label",s(a(185,224,"buttons.add"))),t(3),b("htmlCode",u.buttonIconOnlyCode),t(2),l(a(190,226,"buttons.section_dropdown")),t(5),d(" ",a(195,228,"buttons.dropdown_primary")," "),t(5),l(a(200,230,"buttons.dropdown_action")),t(4),l(a(204,232,"buttons.dropdown_another")),t(4),l(a(208,234,"buttons.dropdown_something")),t(4),d(" ",a(212,236,"buttons.dropdown_neutral")," "),t(5),l(a(217,238,"buttons.dropdown_action")),t(4),l(a(221,240,"buttons.dropdown_another")),t(4),l(a(225,242,"buttons.dropdown_something")),t(4),d(" ",a(229,244,"buttons.dropdown_secondary")," "),t(5),l(a(234,246,"buttons.dropdown_action")),t(4),l(a(238,248,"buttons.dropdown_another")),t(4),l(a(242,250,"buttons.dropdown_something")),t(4),d(" ",a(246,252,"buttons.dropdown_danger")," "),t(5),l(a(251,254,"buttons.dropdown_action")),t(4),l(a(255,256,"buttons.dropdown_another")),t(4),l(a(259,258,"buttons.dropdown_something")),t(2),b("htmlCode",u.dropdownButtonCode),t(4),d(" ",a(265,260,"buttons.dropdown_outline")," "),t(5),l(a(270,262,"buttons.dropdown_action")),t(4),l(a(274,264,"buttons.dropdown_another")),t(4),l(a(278,266,"buttons.dropdown_something")),t(4),d(" ",a(282,268,"buttons.dropdown_outline")," "),t(5),l(a(287,270,"buttons.dropdown_action")),t(4),l(a(291,272,"buttons.dropdown_another")),t(4),l(a(295,274,"buttons.dropdown_something")),t(4),d(" ",a(299,276,"buttons.dropdown_outline")," "),t(5),l(a(304,278,"buttons.dropdown_action")),t(4),l(a(308,280,"buttons.dropdown_another")),t(4),l(a(312,282,"buttons.dropdown_something")),t(5),d(" ",a(317,284,"buttons.large")," "),t(5),l(a(322,286,"buttons.dropdown_action")),t(4),l(a(326,288,"buttons.dropdown_another")),t(4),l(a(330,290,"buttons.dropdown_something")),t(4),d(" ",a(334,292,"buttons.default")," "),t(5),l(a(339,294,"buttons.dropdown_action")),t(4),l(a(343,296,"buttons.dropdown_another")),t(4),l(a(347,298,"buttons.dropdown_something")),t(4),d(" ",a(351,300,"buttons.small")," "),t(5),l(a(356,302,"buttons.dropdown_action")),t(4),l(a(360,304,"buttons.dropdown_another")),t(4),l(a(364,306,"buttons.dropdown_something")),t(2),b("htmlCode",u.dropdownSizesCode),t(8),l(a(374,308,"buttons.dropdown_action")),t(4),l(a(378,310,"buttons.dropdown_another")),t(4),l(a(382,312,"buttons.dropdown_something")),t(8),l(a(390,314,"buttons.dropdown_action")),t(4),l(a(394,316,"buttons.dropdown_another")),t(4),l(a(398,318,"buttons.dropdown_something")),t(8),l(a(406,320,"buttons.dropdown_action")),t(4),l(a(410,322,"buttons.dropdown_another")),t(4),l(a(414,324,"buttons.dropdown_something")),t(2),b("htmlCode",u.iconDropdownCode))},dependencies:[y,v,x],styles:[".demo-section[_ngcontent-%COMP%]{margin-bottom:4rem}.component-showcase[_ngcontent-%COMP%]{display:flex;gap:1rem;flex-wrap:wrap;align-items:center;padding:1.5rem;background:#f8f9fa;border-radius:.5rem}"],changeDetection:0})};export{h as a};
