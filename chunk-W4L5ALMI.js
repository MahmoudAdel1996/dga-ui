import{a as y}from"./chunk-522BR6GU.js";import{L as s,La as c,Ma as e,Na as t,Oa as l,Ya as i,Za as d,ab as n,bb as m,ja as k,oa as a,sb as f,vb as u,xb as x,ya as b}from"./chunk-6STGATHH.js";var v=class h{platformId=s(k);checkboxPrimaryCode=`<div class="form-check form-check-md mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkPrimaryMd" checked>
  <label class="form-check-label" for="chkPrimaryMd">Medium</label>
</div>
<div class="form-check form-check-sm mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkPrimarySm" checked>
  <label class="form-check-label" for="chkPrimarySm">Small</label>
</div>
<div class="form-check form-check-xs mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkPrimaryXs" checked>
  <label class="form-check-label" for="chkPrimaryXs">Extra small</label>
</div>`;checkboxDisabledCode=`<div class="form-check form-check-md mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkDisabledMd" disabled>
  <label class="form-check-label" for="chkDisabledMd">Medium unchecked</label>
</div>
<div class="form-check form-check-md mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkDisabledCheckedMd" checked disabled>
  <label class="form-check-label" for="chkDisabledCheckedMd">Medium checked</label>
</div>
<div class="form-check form-check-sm mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkDisabledSm" disabled>
  <label class="form-check-label" for="chkDisabledSm">Small unchecked</label>
</div>`;checkboxReadonlyCode=`<div class="form-check form-check-md mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkReadonlyMd" readonly>
  <label class="form-check-label" for="chkReadonlyMd">Medium unchecked</label>
</div>
<div class="form-check form-check-md mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkReadonlyCheckedMd" checked readonly>
  <label class="form-check-label" for="chkReadonlyCheckedMd">Medium checked</label>
</div>
<div class="form-check form-check-sm mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkReadonlySm" readonly>
  <label class="form-check-label" for="chkReadonlySm">Small unchecked</label>
</div>`;checkboxNeutralCode=`<div class="form-check form-check-neutral form-check-md mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkNeutralMd" checked>
  <label class="form-check-label" for="chkNeutralMd">Medium</label>
</div>
<div class="form-check form-check-neutral form-check-sm mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkNeutralSm" checked>
  <label class="form-check-label" for="chkNeutralSm">Small</label>
</div>
<div class="form-check form-check-neutral form-check-xs mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkNeutralXs" checked>
  <label class="form-check-label" for="chkNeutralXs">Extra small</label>
</div>`;checkboxIndeterminateHtmlCode=`<div class="form-check form-check-md mb-2">
  <input type="checkbox" class="form-check-input ripple" id="chkIndeterminate" #indeterminateCheckbox>
  <label class="form-check-label" for="chkIndeterminate">Indeterminate checkbox</label>
</div>`;checkboxIndeterminateTsCode=`import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('indeterminateCheckbox') indeterminateCheckbox!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    // Set checkbox to indeterminate state
    if (this.indeterminateCheckbox) {
      this.indeterminateCheckbox.nativeElement.indeterminate = true;
    }
  }
}

// Alternative approach using direct DOM query
ngAfterViewInit(): void {
  const checkbox = document.getElementById('chkIndeterminate') as HTMLInputElement;
  if (checkbox) {
    checkbox.indeterminate = true;
  }
}`;radioPrimaryCode=`<div class="form-check form-check-md mb-2">
  <input class="form-check-input ripple" type="radio" name="radioPrimaryGroup" id="radPrimaryCheckedMd" checked>
  <label class="form-check-label" for="radPrimaryCheckedMd">Medium</label>
</div>
<div class="form-check form-check-sm mb-2">
  <input class="form-check-input ripple" type="radio" name="radioPrimaryGroup" id="radPrimaryCheckedSm">
  <label class="form-check-label" for="radPrimaryCheckedSm">Small</label>
</div>
<div class="form-check form-check-xs mb-2">
  <input class="form-check-input ripple" type="radio" name="radioPrimaryGroup" id="radPrimaryCheckedXs">
  <label class="form-check-label" for="radPrimaryCheckedXs">Extra small</label>
</div>`;radioDisabledCode=`<div class="form-check form-check-md mb-2">
  <input class="form-check-input ripple" type="radio" name="radioDisabled" id="radDisabledMd" disabled>
  <label class="form-check-label" for="radDisabledMd">Medium unchecked</label>
</div>
<div class="form-check form-check-md mb-2">
  <input class="form-check-input ripple" type="radio" name="radioDisabled" id="radDisabledCheckedMd" checked disabled>
  <label class="form-check-label" for="radDisabledCheckedMd">Medium checked</label>
</div>
<div class="form-check form-check-sm mb-2">
  <input class="form-check-input ripple" type="radio" name="radioDisabled" id="radDisabledSm" disabled>
  <label class="form-check-label" for="radDisabledSm">Small unchecked</label>
</div>`;radioReadonlyCode=`<div class="form-check form-check-md mb-2">
  <input class="form-check-input ripple" type="radio" name="radioReadonly" id="radReadonlyMd" readonly>
  <label class="form-check-label" for="radReadonlyMd">Medium unchecked</label>
</div>
<div class="form-check form-check-md mb-2">
  <input class="form-check-input ripple" type="radio" name="radioReadonly" id="radReadonlyCheckedMd" checked readonly>
  <label class="form-check-label" for="radReadonlyCheckedMd">Medium checked</label>
</div>
<div class="form-check form-check-sm mb-2">
  <input class="form-check-input ripple" type="radio" name="radioReadonly" id="radReadonlySm" readonly>
  <label class="form-check-label" for="radReadonlySm">Small unchecked</label>
</div>`;radioNeutralCode=`<div class="form-check form-check-neutral form-check-md mb-2">
  <input class="form-check-input ripple" type="radio" name="radioNeutral" id="radNeutralMd" checked>
  <label class="form-check-label" for="radNeutralMd">Medium</label>
</div>
<div class="form-check form-check-neutral form-check-sm mb-2">
  <input class="form-check-input ripple" type="radio" name="radioNeutral" id="radNeutralSm">
  <label class="form-check-label" for="radNeutralSm">Small</label>
</div>
<div class="form-check form-check-neutral form-check-xs mb-2">
  <input class="form-check-input ripple" type="radio" name="radioNeutral" id="radNeutralXs">
  <label class="form-check-label" for="radNeutralXs">Extra small</label>
</div>`;switchCode=`<div class="form-check form-switch mb-2">
  <input class="form-check-input" type="checkbox" role="switch" id="switchDefault">
  <label class="form-check-label" for="switchDefault">Default switch</label>
</div>
<div class="form-check form-switch mb-2">
  <input class="form-check-input" type="checkbox" role="switch" id="switchDisabled" disabled>
  <label class="form-check-label" for="switchDisabled">Disabled switch</label>
</div>
<div class="form-check form-switch mb-2">
  <input class="form-check-input" checked type="checkbox" role="switch" id="switchChecked">
  <label class="form-check-label" for="switchChecked">Checked switch</label>
</div>
<div class="form-check form-switch mb-2">
  <input class="form-check-input" checked type="checkbox" role="switch" id="switchDisabledChecked" disabled>
  <label class="form-check-label" for="switchDisabledChecked">Disabled checked switch</label>
</div>`;textInputEmailCode=`<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="name@example.com">
  <div class="form-text">We'll never share your email with anyone else.</div>
</div>`;textInputPasswordCode=`<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Password</label>
  <input type="password" class="form-control" id="exampleInputPassword1">
</div>`;textInputTextareaCode=`<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>`;selectCode=`<div class="mb-3">
  <label for="exampleSelect" class="form-label">Example select</label>
  <select class="form-select" id="exampleSelect">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>`;rangeCode=`<div class="mb-3">
  <label for="customRange" class="form-label">Example range</label>
  <input type="range" class="form-range" id="customRange">
</div>`;inputSizesCode=`<input class="form-control form-control-lg mb-2" type="text" placeholder="Large input" aria-label="Large input">
<input class="form-control mb-2" type="text" placeholder="Default input" aria-label="Default input">
<input class="form-control form-control-sm" type="text" placeholder="Small input" aria-label="Small input">`;ngAfterViewInit(){f(this.platformId)&&queueMicrotask(()=>{document.querySelectorAll('[type="checkbox"]').forEach(o=>{o.id.includes("Indeterminate")&&(o.indeterminate=!0,console.log(o))})})}static \u0275fac=function(p){return new(p||h)};static \u0275cmp=b({type:h,selectors:[["app-forms"]],decls:321,vars:59,consts:[[1,"container","py-5"],[1,"display-4","mb-4"],[1,"lead","mb-5"],["aria-labelledby","checkboxesHeading",1,"mb-5"],["id","checkboxesHeading",1,"h4","mb-3"],[1,"d-flex","gap-2","mb-2"],["type","checkbox","id","chkDemoMd","aria-label","Demo checkbox medium","checked","",1,"form-check-input","ripple"],["type","checkbox","id","chkDemoSm","aria-label","Demo checkbox small","checked","",1,"form-check-input","ripple","form-check-input-sm"],["type","checkbox","id","chkDemoXs","aria-label","Demo checkbox extra small","checked","",1,"form-check-input","ripple","form-check-input-xs"],[1,"row","g-3"],[1,"col-md-3"],[1,"h6","mb-2"],[1,"form-check","form-check-md","mb-2"],["type","checkbox","id","chkPrimaryMd","checked","",1,"form-check-input","ripple"],["for","chkPrimaryMd",1,"form-check-label"],["type","checkbox","id","chkPrimaryIndeterminateMd",1,"form-check-input","ripple","indeterminate-check"],["for","chkPrimaryIndeterminateMd",1,"form-check-label"],[1,"form-check","form-check-sm","mb-2"],["type","checkbox","id","chkPrimarySm","checked","",1,"form-check-input","ripple"],["for","chkPrimarySm",1,"form-check-label"],[1,"form-check","form-check-xs","mb-2"],["type","checkbox","id","chkPrimaryXs","checked","",1,"form-check-input","ripple"],["for","chkPrimaryXs",1,"form-check-label"],["type","checkbox","id","chkDisabledMd","disabled","",1,"form-check-input","ripple"],["for","chkDisabledMd",1,"form-check-label"],["type","checkbox","id","chkDisabledCheckedMd","checked","","disabled","",1,"form-check-input","ripple"],["for","chkDisabledCheckedMd",1,"form-check-label"],["type","checkbox","id","chkDisabledIndeterminateMd","disabled","",1,"form-check-input","ripple","indeterminate-check"],["for","chkDisabledIndeterminateMd",1,"form-check-label"],["type","checkbox","id","chkDisabledSm","disabled","",1,"form-check-input","ripple"],["for","chkDisabledSm",1,"form-check-label"],["type","checkbox","id","chkDisabledXs","checked","","disabled","",1,"form-check-input","ripple"],["for","chkDisabledXs",1,"form-check-label"],["type","checkbox","id","chkReadonlyMd","readonly","",1,"form-check-input","ripple"],["for","chkReadonlyMd",1,"form-check-label"],["type","checkbox","id","chkReadonlyCheckedMd","checked","","readonly","",1,"form-check-input","ripple"],["for","chkReadonlyCheckedMd",1,"form-check-label"],["type","checkbox","id","chkReadonlyIndeterminateMd","readonly","",1,"form-check-input","ripple","indeterminate-check"],["for","chkReadonlyIndeterminateMd",1,"form-check-label"],["type","checkbox","id","chkReadonlySm","readonly","",1,"form-check-input","ripple"],["for","chkReadonlySm",1,"form-check-label"],["type","checkbox","id","chkReadonlyXs","checked","","readonly","",1,"form-check-input","ripple"],["for","chkReadonlyXs",1,"form-check-label"],[1,"form-check","form-check-neutral","form-check-md","mb-2"],["type","checkbox","id","chkNeutralMd","checked","",1,"form-check-input","ripple"],["for","chkNeutralMd",1,"form-check-label"],["type","checkbox","id","chkNeutralIndeterminateMd",1,"form-check-input","ripple","indeterminate-check"],["for","chkNeutralIndeterminateMd",1,"form-check-label"],[1,"form-check","form-check-neutral","form-check-sm","mb-2"],["type","checkbox","id","chkNeutralSm","checked","",1,"form-check-input","ripple"],["for","chkNeutralSm",1,"form-check-label"],[1,"form-check","form-check-neutral","form-check-xs","mb-2"],["type","checkbox","id","chkNeutralXs","checked","",1,"form-check-input","ripple"],["for","chkNeutralXs",1,"form-check-label"],[1,"mt-4"],[1,"h6","mb-3"],[3,"htmlCode"],[1,"mt-3"],[3,"htmlCode","tsCode"],["aria-labelledby","radiosHeading",1,"mb-5"],["id","radiosHeading",1,"h4","mb-3"],["type","radio","name","radioDemo","id","radDemoMd","aria-label","Demo radio medium","checked","",1,"form-check-input","ripple"],["type","radio","name","radioDemo","id","radDemoSm","aria-label","Demo radio small",1,"form-check-input","form-check-input-sm","ripple"],["type","radio","name","radioDemo","id","radDemoXs","aria-label","Demo radio extra small",1,"form-check-input","form-check-input-xs","ripple"],["type","radio","name","radioPrimaryGroup","id","radPrimaryCheckedMd","checked","",1,"form-check-input","ripple"],["for","radPrimaryCheckedMd",1,"form-check-label"],["type","radio","name","radioPrimaryGroup","id","radPrimaryCheckedSm",1,"form-check-input","ripple"],["for","radPrimaryCheckedSm",1,"form-check-label"],["type","radio","name","radioPrimaryGroup","id","radPrimaryCheckedXs",1,"form-check-input","ripple"],["for","radPrimaryCheckedXs",1,"form-check-label"],["type","radio","name","radioDisabled","id","radDisabledMd","disabled","",1,"form-check-input","ripple"],["for","radDisabledMd",1,"form-check-label"],["type","radio","name","radioDisabled","id","radDisabledCheckedMd","checked","","disabled","",1,"form-check-input","ripple"],["for","radDisabledCheckedMd",1,"form-check-label"],["type","radio","name","radioDisabled","id","radDisabledSm","disabled","",1,"form-check-input","ripple"],["for","radDisabledSm",1,"form-check-label"],["type","radio","name","radioDisabled","id","radDisabledXs","checked","","disabled","",1,"form-check-input","ripple"],["for","radDisabledXs",1,"form-check-label"],["type","radio","name","radioReadonly","id","radReadonlyMd","readonly","",1,"form-check-input","ripple"],["for","radReadonlyMd",1,"form-check-label"],["type","radio","name","radioReadonly","id","radReadonlyCheckedMd","checked","","readonly","",1,"form-check-input","ripple"],["for","radReadonlyCheckedMd",1,"form-check-label"],["type","radio","name","radioReadonly","id","radReadonlySm","readonly","",1,"form-check-input","ripple"],["for","radReadonlySm",1,"form-check-label"],["type","radio","name","radioReadonly","id","radReadonlyXs","checked","","readonly","",1,"form-check-input","ripple"],["for","radReadonlyXs",1,"form-check-label"],["type","radio","name","radioNeutral","id","radNeutralMd","checked","",1,"form-check-input","ripple"],["for","radNeutralMd",1,"form-check-label"],["type","radio","name","radioNeutral","id","radNeutralSm",1,"form-check-input","ripple"],["for","radNeutralSm",1,"form-check-label"],["type","radio","name","radioNeutral","id","radNeutralXs",1,"form-check-input","ripple"],["for","radNeutralXs",1,"form-check-label"],[1,"d-flex","gap-2","justify-content-between"],["aria-labelledby","switchesHeading",1,"mb-5"],["id","switchesHeading",1,"h4","mb-3"],[1,"form-check","form-switch","mb-2"],["type","checkbox","role","switch","id","switchDefault",1,"form-check-input"],["for","switchDefault",1,"form-check-label"],["type","checkbox","role","switch","id","switchDisabled","disabled","",1,"form-check-input"],["for","switchDisabled",1,"form-check-label"],["checked","","type","checkbox","role","switch","id","switchDefault",1,"form-check-input"],["checked","","type","checkbox","role","switch","id","switchDisabled","disabled","",1,"form-check-input"],["aria-labelledby","textInputsHeading",1,"mb-5"],["id","textInputsHeading",1,"h4","mb-3"],[1,"mb-3"],["for","exampleInputEmail1",1,"form-label"],["type","email","id","exampleInputEmail1","placeholder","name@example.com",1,"form-control"],[1,"form-text"],["for","exampleInputPassword1",1,"form-label"],["type","password","id","exampleInputPassword1",1,"form-control"],["for","exampleFormControlTextarea1",1,"form-label"],["id","exampleFormControlTextarea1","rows","3",1,"form-control"],["aria-labelledby","selectHeading",1,"mb-5"],["id","selectHeading",1,"h4","mb-3"],["for","exampleSelect",1,"form-label"],["id","exampleSelect",1,"form-select"],["selected",""],["value","1"],["value","2"],["value","3"],["aria-labelledby","rangeHeading",1,"mb-5"],["id","rangeHeading",1,"h4","mb-3"],["for","customRange",1,"form-label"],["type","range","id","customRange",1,"form-range"],["aria-labelledby","sizesHeading",1,"mb-5"],["id","sizesHeading",1,"h4","mb-3"],["type","text","placeholder","Large input","aria-label","Large input",1,"form-control","form-control-lg","mb-2"],["type","text","placeholder","Default input","aria-label","Default input",1,"form-control","mb-2"],["type","text","placeholder","Small input","aria-label","Small input",1,"form-control","form-control-sm"],["aria-labelledby","actionsHeading",1,"mb-5"],["id","actionsHeading",1,"h4","mb-3"],["type","button",1,"btn","btn-primary"]],template:function(p,r){p&1&&(e(0,"div",0)(1,"h1",1),i(2),n(3,"translate"),t(),e(4,"p",2),i(5),n(6,"translate"),t(),e(7,"section",3)(8,"h2",4),i(9),n(10,"translate"),t(),e(11,"div",5),l(12,"input",6)(13,"input",7)(14,"input",8),t(),e(15,"div",9)(16,"div",10)(17,"h3",11),i(18,"Primary"),t(),e(19,"div",12),l(20,"input",13),e(21,"label",14),i(22,"Medium"),t()(),e(23,"div",12),l(24,"input",15),e(25,"label",16),i(26,"Medium indeterminate"),t()(),e(27,"div",17),l(28,"input",18),e(29,"label",19),i(30,"Small"),t()(),e(31,"div",20),l(32,"input",21),e(33,"label",22),i(34,"Extra small"),t()()(),e(35,"div",10)(36,"h3",11),i(37,"Disabled"),t(),e(38,"div",12),l(39,"input",23),e(40,"label",24),i(41,"Medium unchecked"),t()(),e(42,"div",12),l(43,"input",25),e(44,"label",26),i(45,"Medium checked"),t()(),e(46,"div",12),l(47,"input",27),e(48,"label",28),i(49,"Medium indeterminate"),t()(),e(50,"div",17),l(51,"input",29),e(52,"label",30),i(53,"Small unchecked"),t()(),e(54,"div",20),l(55,"input",31),e(56,"label",32),i(57,"Extra small checked"),t()()(),e(58,"div",10)(59,"h3",11),i(60,"Readonly"),t(),e(61,"div",12),l(62,"input",33),e(63,"label",34),i(64,"Medium unchecked"),t()(),e(65,"div",12),l(66,"input",35),e(67,"label",36),i(68,"Medium checked"),t()(),e(69,"div",12),l(70,"input",37),e(71,"label",38),i(72,"Medium indeterminate"),t()(),e(73,"div",17),l(74,"input",39),e(75,"label",40),i(76,"Small unchecked"),t()(),e(77,"div",20),l(78,"input",41),e(79,"label",42),i(80,"Extra small checked"),t()()(),e(81,"div",10)(82,"h3",11),i(83,"Neutral"),t(),e(84,"div",43),l(85,"input",44),e(86,"label",45),i(87,"Medium"),t()(),e(88,"div",43),l(89,"input",46),e(90,"label",47),i(91,"Medium indeterminate"),t()(),e(92,"div",48),l(93,"input",49),e(94,"label",50),i(95,"Small"),t()(),e(96,"div",51),l(97,"input",52),e(98,"label",53),i(99,"Extra small"),t()()()(),e(100,"div",54)(101,"h3",55),i(102,"Primary Checkboxes"),t(),l(103,"app-code-example",56),t(),e(104,"div",57)(105,"h3",55),i(106,"Disabled Checkboxes"),t(),l(107,"app-code-example",56),t(),e(108,"div",57)(109,"h3",55),i(110,"Readonly Checkboxes"),t(),l(111,"app-code-example",56),t(),e(112,"div",57)(113,"h3",55),i(114,"Neutral Checkboxes"),t(),l(115,"app-code-example",56),t(),e(116,"div",57)(117,"h3",55),i(118,"Indeterminate Checkbox"),t(),l(119,"app-code-example",58),t()(),e(120,"section",59)(121,"h2",60),i(122),n(123,"translate"),t(),e(124,"div",5),l(125,"input",61)(126,"input",62)(127,"input",63),t(),e(128,"div",9)(129,"div",10)(130,"h3",11),i(131,"Primary"),t(),e(132,"div",12),l(133,"input",64),e(134,"label",65),i(135,"Medium"),t()(),e(136,"div",17),l(137,"input",66),e(138,"label",67),i(139,"Small"),t()(),e(140,"div",20),l(141,"input",68),e(142,"label",69),i(143,"Extra small"),t()()(),e(144,"div",10)(145,"h3",11),i(146,"Disabled"),t(),e(147,"div",12),l(148,"input",70),e(149,"label",71),i(150,"Medium unchecked"),t()(),e(151,"div",12),l(152,"input",72),e(153,"label",73),i(154,"Medium checked"),t()(),e(155,"div",17),l(156,"input",74),e(157,"label",75),i(158,"Small unchecked"),t()(),e(159,"div",20),l(160,"input",76),e(161,"label",77),i(162,"Extra small checked"),t()()(),e(163,"div",10)(164,"h3",11),i(165,"Readonly"),t(),e(166,"div",12),l(167,"input",78),e(168,"label",79),i(169,"Medium unchecked"),t()(),e(170,"div",12),l(171,"input",80),e(172,"label",81),i(173,"Medium checked"),t()(),e(174,"div",17),l(175,"input",82),e(176,"label",83),i(177,"Small unchecked"),t()(),e(178,"div",20),l(179,"input",84),e(180,"label",85),i(181,"Extra small checked"),t()()(),e(182,"div",10)(183,"h3",11),i(184,"Neutral"),t(),e(185,"div",43),l(186,"input",86),e(187,"label",87),i(188,"Medium"),t()(),e(189,"div",48),l(190,"input",88),e(191,"label",89),i(192,"Small"),t()(),e(193,"div",51),l(194,"input",90),e(195,"label",91),i(196,"Extra small"),t()()()(),e(197,"div",54)(198,"h3",55),i(199,"Primary Radio Buttons"),t(),l(200,"app-code-example",56),t(),e(201,"div",57)(202,"h3",55),i(203,"Disabled Radio Buttons"),t(),l(204,"app-code-example",56),t(),e(205,"div",57)(206,"h3",55),i(207,"Readonly Radio Buttons"),t(),l(208,"app-code-example",56),t(),e(209,"div",57)(210,"h3",55),i(211,"Neutral Radio Buttons"),t(),l(212,"app-code-example",56),t()(),e(213,"div",92)(214,"section",93)(215,"h2",94),i(216),n(217,"translate"),t(),e(218,"div",95),l(219,"input",96),e(220,"label",97),i(221),n(222,"translate"),t()(),e(223,"div",95),l(224,"input",98),e(225,"label",99),i(226),n(227,"translate"),t()(),e(228,"div",95),l(229,"input",100),e(230,"label",97),i(231),n(232,"translate"),t()(),e(233,"div",95),l(234,"input",101),e(235,"label",99),i(236),n(237,"translate"),t()(),e(238,"div",54)(239,"h3",55),i(240,"Switch Examples"),t(),l(241,"app-code-example",56),t()()(),e(242,"section",102)(243,"h2",103),i(244),n(245,"translate"),t(),e(246,"div",104)(247,"label",105),i(248,"Email address"),t(),l(249,"input",106),e(250,"div",107),i(251,"We'll never share your email with anyone else."),t()(),e(252,"div",104)(253,"label",108),i(254,"Password"),t(),l(255,"input",109),t(),e(256,"div",104)(257,"label",110),i(258,"Textarea"),t(),l(259,"textarea",111),t(),e(260,"div",54)(261,"h3",55),i(262,"Email Input"),t(),l(263,"app-code-example",56),t(),e(264,"div",57)(265,"h3",55),i(266,"Password Input"),t(),l(267,"app-code-example",56),t(),e(268,"div",57)(269,"h3",55),i(270,"Textarea"),t(),l(271,"app-code-example",56),t()(),e(272,"section",112)(273,"h2",113),i(274),n(275,"translate"),t(),e(276,"div",104)(277,"label",114),i(278,"Example select"),t(),e(279,"select",115)(280,"option",116),i(281,"Open this select menu"),t(),e(282,"option",117),i(283,"One"),t(),e(284,"option",118),i(285,"Two"),t(),e(286,"option",119),i(287,"Three"),t()()(),e(288,"div",54)(289,"h3",55),i(290,"Select Dropdown"),t(),l(291,"app-code-example",56),t()(),e(292,"section",120)(293,"h2",121),i(294),n(295,"translate"),t(),e(296,"div",104)(297,"label",122),i(298,"Example range"),t(),l(299,"input",123),t(),e(300,"div",54)(301,"h3",55),i(302,"Range Slider"),t(),l(303,"app-code-example",56),t()(),e(304,"section",124)(305,"h2",125),i(306),n(307,"translate"),t(),l(308,"input",126)(309,"input",127)(310,"input",128),e(311,"div",54)(312,"h3",55),i(313,"Input Size Variations"),t(),l(314,"app-code-example",56),t()(),e(315,"section",129)(316,"h2",130),i(317),n(318,"translate"),t(),e(319,"button",131),i(320,"Submit"),t()()()),p&2&&(a(2),d(m(3,31,"forms.title")),a(3),d(m(6,33,"forms.subtitle")),a(4),d(m(10,35,"forms.checkboxes")),a(94),c("htmlCode",r.checkboxPrimaryCode),a(4),c("htmlCode",r.checkboxDisabledCode),a(4),c("htmlCode",r.checkboxReadonlyCode),a(4),c("htmlCode",r.checkboxNeutralCode),a(4),c("htmlCode",r.checkboxIndeterminateHtmlCode)("tsCode",r.checkboxIndeterminateTsCode),a(3),d(m(123,37,"forms.radios")),a(78),c("htmlCode",r.radioPrimaryCode),a(4),c("htmlCode",r.radioDisabledCode),a(4),c("htmlCode",r.radioReadonlyCode),a(4),c("htmlCode",r.radioNeutralCode),a(4),d(m(217,39,"forms.switches")),a(5),d(m(222,41,"forms.switch_default")),a(5),d(m(227,43,"forms.switch_disabled")),a(5),d(m(232,45,"forms.switch_checked")),a(5),d(m(237,47,"forms.switch_disabled")),a(5),c("htmlCode",r.switchCode),a(3),d(m(245,49,"forms.text_inputs")),a(19),c("htmlCode",r.textInputEmailCode),a(4),c("htmlCode",r.textInputPasswordCode),a(4),c("htmlCode",r.textInputTextareaCode),a(3),d(m(275,51,"forms.select")),a(17),c("htmlCode",r.selectCode),a(3),d(m(295,53,"forms.range")),a(9),c("htmlCode",r.rangeCode),a(3),d(m(307,55,"forms.input_sizes")),a(8),c("htmlCode",r.inputSizesCode),a(3),d(m(318,57,"forms.actions")))},dependencies:[x,y,u],styles:[".demo-section[_ngcontent-%COMP%]{margin-bottom:4rem}"],changeDetection:0})};export{v as a};
