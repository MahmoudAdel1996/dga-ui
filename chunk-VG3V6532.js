import{a as k}from"./chunk-522BR6GU.js";import{$ as S,$a as v,Ea as h,Ga as b,Ha as C,La as o,Ma as i,Na as t,Oa as c,Ua as u,Xa as x,Ya as a,Za as r,ab as d,bb as n,oa as e,vb as g,xb as y,ya as E}from"./chunk-6STGATHH.js";function _(s,p){s&1&&(i(0,"div",28)(1,"p",32),a(2),d(3,"translate"),t(),i(4,"ul")(5,"li"),a(6),d(7,"translate"),t(),i(8,"li"),a(9),d(10,"translate"),t(),i(11,"li"),a(12),d(13,"translate"),t()()()),s&2&&(e(2),r(n(3,4,"cards.expanded_content")),e(4),r(n(7,6,"cards.detail_1")),e(3),r(n(10,8,"cards.detail_2")),e(3),r(n(13,10,"cards.detail_3")))}function I(s,p){s&1&&(i(0,"div",28)(1,"p",32),a(2),d(3,"translate"),t(),i(4,"ul")(5,"li"),a(6),d(7,"translate"),t(),i(8,"li"),a(9),d(10,"translate"),t(),i(11,"li"),a(12),d(13,"translate"),t()(),i(14,"div",33)(15,"button",34),a(16),d(17,"translate"),t(),i(18,"button",35),a(19),d(20,"translate"),t()()()),s&2&&(e(2),r(n(3,6,"cards.expanded_content")),e(4),r(n(7,8,"cards.detail_1")),e(3),r(n(10,10,"cards.detail_2")),e(3),r(n(13,12,"cards.detail_3")),e(4),r(n(17,14,"cards.action")),e(3),r(n(20,16,"cards.cancel")))}var f=class s{expandedCards=S(new Set,{});toggleCard(p){this.expandedCards.update(m=>{let l=new Set(m);return l.has(p)?l.delete(p):l.add(p),l})}isExpanded(p){return this.expandedCards().has(p)}cardWithIconCode=`<div class="card" tabindex="0">
  <div class="card-body">
    <h5 class="card-title">
      <i class="hgi hgi-stroke hgi-checkmark-circle-02 card-title-icon"></i>
    </h5>
    <h6 class="card-subtitle mb-2">Card Title</h6>
    <p class="card-text">This is a sample card text that describes the content.</p>
    <div class="card-footer">
      <a href="javascript:void(0);" class="btn btn-outline-secondary">Secondary Action</a>
      <a href="javascript:void(0);" class="btn btn-primary">Primary Action</a>
    </div>
  </div>
</div>`;cardWithCheckboxCode=`<div class="card" tabindex="0">
  <div class="card-body">
    <h5 class="card-title">
      <input class="card-title-checked form-check-input ripple" 
             type="checkbox" 
             value="" 
             id="check2" 
             aria-label="Select card">
    </h5>
    <h6 class="card-subtitle mb-2">Card Title</h6>
    <p class="card-text">This is a sample card text that describes the content.</p>
    <div class="card-footer">
      <a href="javascript:void(0);" class="btn btn-outline-secondary">Secondary Action</a>
      <a href="javascript:void(0);" class="btn btn-primary">Primary Action</a>
    </div>
  </div>
</div>`;disabledCardCode=`<div class="card disabled" tabindex="0">
  <div class="card-body">
    <h5 class="card-title">
      <i class="hgi hgi-stroke hgi-checkmark-circle-02 card-title-icon"></i>
      <input class="card-title-checked form-check-input ripple" 
             disabled 
             type="checkbox" 
             value="" 
             id="check1" 
             aria-label="Select card">
    </h5>
    <h6 class="card-subtitle mb-2">Card Title</h6>
    <p class="card-text">This is a sample card text that describes the content.</p>
    <div class="card-footer">
      <a href="javascript:void(0);" class="btn btn-outline-secondary disabled">Secondary Action</a>
      <a href="javascript:void(0);" class="btn btn-primary disabled">Primary Action</a>
    </div>
  </div>
</div>`;cardNoShadowCode=`<div class="card shadow-none" tabindex="0">
  <div class="card-body">
    <h5 class="card-title">
      <input class="card-title-checked form-check-input ripple" 
             type="checkbox" 
             value="" 
             id="check2" 
             aria-label="Select card">
    </h5>
    <h6 class="card-subtitle mb-2">Card Title</h6>
    <p class="card-text">This is a sample card text that describes the content.</p>
    <div class="card-footer">
      <a href="javascript:void(0);" class="btn btn-outline-secondary">Secondary Action</a>
      <a href="javascript:void(0);" class="btn btn-primary">Primary Action</a>
    </div>
  </div>
</div>`;expandableCardHtmlCode=`<div class="card" tabindex="0" [class.expanded]="isExpanded(1)">
  <div class="card-body">
    <h5 class="card-title">
      <i class="hgi hgi-stroke hgi-checkmark-circle-02 card-title-icon"></i>
      <input class="card-title-checked form-check-input ripple" 
             type="checkbox" 
             value="" 
             id="check3" 
             aria-label="Select card">
    </h5>
    <h6 class="card-subtitle mb-2">Expandable Card Title</h6>
    <p class="card-text">Click the arrow to see more details.</p>
    
    @if (isExpanded(1)) {
      <div class="card-expanded-content">
        <p class="mt-3">Additional content shown when expanded.</p>
        <ul>
          <li>Detail point 1</li>
          <li>Detail point 2</li>
          <li>Detail point 3</li>
        </ul>
      </div>
    }
    
    <div class="card-footer">
      <i class="hgi hgi-stroke hgi-arrow-up-01 card-expanded-icon" 
         [class.hgi-arrow-up-01]="isExpanded(1)" 
         [class.hgi-arrow-down-01]="!isExpanded(1)" 
         (click)="toggleCard(1)"></i>
    </div>
  </div>
</div>`;expandableCardTsCode=`import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  // Use Angular signals to manage expanded state
  expandedCards = signal<Set<number>>(new Set());
  
  toggleCard(cardId: number) {
    this.expandedCards.update(cards => {
      const newSet = new Set(cards);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  }
  
  isExpanded(cardId: number): boolean {
    return this.expandedCards().has(cardId);
  }
}`;expandableCardSimpleHtmlCode=`<div class="card" tabindex="0" [class.expanded]="isExpanded(2)">
  <div class="card-body">
    <h5 class="card-title">
      <i class="hgi hgi-stroke hgi-checkmark-circle-02 card-title-icon"></i>
    </h5>
    <h6 class="card-subtitle mb-2">Expandable Card Title</h6>
    <p class="card-text">Click the arrow to see more details.</p>
    
    @if (isExpanded(2)) {
      <div class="card-expanded-content">
        <p class="mt-3">Additional content shown when expanded.</p>
        <ul>
          <li>Detail point 1</li>
          <li>Detail point 2</li>
          <li>Detail point 3</li>
        </ul>
        <div class="d-flex align-items-center gap-3 mb-3">
          <button class="btn btn-sm btn-primary">Primary Action</button>
          <button class="btn btn-sm btn-outline-secondary">Cancel</button>
        </div>
      </div>
    }
    
    <div class="card-footer">
      <i class="hgi hgi-stroke hgi-arrow-up-01 card-expanded-icon" 
         [class.hgi-arrow-up-01]="isExpanded(2)" 
         [class.hgi-arrow-down-01]="!isExpanded(2)" 
         (click)="toggleCard(2)"></i>
    </div>
  </div>
</div>`;static \u0275fac=function(m){return new(m||s)};static \u0275cmp=E({type:s,selectors:[["app-cards"]],decls:135,vars:107,consts:[[1,"container","py-5"],[1,"display-4","mb-4"],[1,"lead","mb-5"],[1,"demo-section"],[1,"mb-4"],[1,"mb-3"],[1,"demo-card-grid","mb-3"],["tabindex","0",1,"card"],[1,"card-body"],[1,"card-title"],[1,"hgi","hgi-stroke","hgi-checkmark-circle-02","card-title-icon"],[1,"card-subtitle","mb-2"],[1,"card-text"],[1,"card-footer"],["href","javascript:void(0);",1,"btn","btn-outline-secondary"],["href","javascript:void(0);",1,"btn","btn-primary"],["title","Card with Icon and Header",3,"htmlCode"],[1,"mb-3","mt-5"],["type","checkbox","value","","id","check2",1,"card-title-checked","form-check-input","ripple",3,"aria-label"],["title","Card with Checkbox",3,"htmlCode"],["tabindex","0",1,"card","disabled"],["disabled","","type","checkbox","value","","id","check1",1,"card-title-checked","form-check-input","ripple",3,"aria-label"],["href","javascript:void(0);",1,"btn","btn-outline-secondary","disabled"],["href","javascript:void(0);",1,"btn","btn-primary","disabled"],["title","Disabled Card with Icon and Checkbox",3,"htmlCode"],["tabindex","0",1,"card","shadow-none"],["title","Card with Shadow Removed (shadow-none)",3,"htmlCode"],["type","checkbox","value","","id","check3",1,"card-title-checked","form-check-input","ripple",3,"aria-label"],[1,"card-expanded-content"],[1,"hgi","hgi-stroke","hgi-arrow-up-01","card-expanded-icon",3,"click"],["title","Expandable Card with Checkbox - HTML Template",3,"htmlCode","tsCode"],["title","Expandable Card with Actions - HTML Template",3,"htmlCode","tsCode"],[1,"mt-3"],[1,"d-flex","align-items-center","gap-3","mb-3"],[1,"btn","btn-sm","btn-primary"],[1,"btn","btn-sm","btn-outline-secondary"]],template:function(m,l){m&1&&(i(0,"div",0)(1,"h1",1),a(2),d(3,"translate"),t(),i(4,"p",2),a(5),d(6,"translate"),t(),i(7,"section",3)(8,"h2",4),a(9),d(10,"translate"),t(),i(11,"h3",5),a(12,"Card with Icon"),t(),i(13,"div",6)(14,"div",7)(15,"div",8)(16,"h5",9),c(17,"i",10),t(),i(18,"h6",11),a(19),d(20,"translate"),t(),i(21,"p",12),a(22),d(23,"translate"),t(),i(24,"div",13)(25,"a",14),a(26),d(27,"translate"),t(),i(28,"a",15),a(29),d(30,"translate"),t()()()()(),c(31,"app-code-example",16),i(32,"h3",17),a(33,"Card with Checkbox"),t(),i(34,"div",6)(35,"div",7)(36,"div",8)(37,"h5",9),c(38,"input",18),d(39,"translate"),t(),i(40,"h6",11),a(41),d(42,"translate"),t(),i(43,"p",12),a(44),d(45,"translate"),t(),i(46,"div",13)(47,"a",14),a(48),d(49,"translate"),t(),i(50,"a",15),a(51),d(52,"translate"),t()()()()(),c(53,"app-code-example",19),i(54,"h3",17),a(55,"Disabled Card"),t(),i(56,"div",6)(57,"div",20)(58,"div",8)(59,"h5",9),c(60,"i",10)(61,"input",21),d(62,"translate"),t(),i(63,"h6",11),a(64),d(65,"translate"),t(),i(66,"p",12),a(67),d(68,"translate"),t(),i(69,"div",13)(70,"a",22),a(71),d(72,"translate"),t(),i(73,"a",23),a(74),d(75,"translate"),t()()()()(),c(76,"app-code-example",24),i(77,"h3",17),a(78,"Card without Shadow"),t(),i(79,"div",6)(80,"div",25)(81,"div",8)(82,"h5",9),c(83,"input",18),d(84,"translate"),t(),i(85,"h6",11),a(86),d(87,"translate"),t(),i(88,"p",12),a(89),d(90,"translate"),t(),i(91,"div",13)(92,"a",14),a(93),d(94,"translate"),t(),i(95,"a",15),a(96),d(97,"translate"),t()()()()(),c(98,"app-code-example",26),i(99,"h3",17),a(100,"Expandable Card (Interactive)"),t(),i(101,"div",6)(102,"div",7)(103,"div",8)(104,"h5",9),c(105,"i",10)(106,"input",27),d(107,"translate"),t(),i(108,"h6",11),a(109),d(110,"translate"),t(),i(111,"p",12),a(112),d(113,"translate"),t(),b(114,_,14,12,"div",28),i(115,"div",13)(116,"i",29),u("click",function(){return l.toggleCard(1)}),t()()()()(),c(117,"app-code-example",30),i(118,"h3",17),a(119,"Expandable Card (Simple)"),t(),i(120,"div",6)(121,"div",7)(122,"div",8)(123,"h5",9),c(124,"i",10),t(),i(125,"h6",11),a(126),d(127,"translate"),t(),i(128,"p",12),a(129),d(130,"translate"),t(),b(131,I,21,18,"div",28),i(132,"div",13)(133,"i",29),u("click",function(){return l.toggleCard(2)}),t()()()()(),c(134,"app-code-example",31),t()()),m&2&&(e(2),r(n(3,53,"cards.title")),e(3),r(n(6,55,"cards.subtitle")),e(4),r(n(10,57,"cards.section_examples")),e(10),r(n(20,59,"cards.card_title")),e(3),r(n(23,61,"cards.card_text")),e(4),r(n(27,63,"cards.action_secondary")),e(3),r(n(30,65,"cards.action")),e(2),o("htmlCode",l.cardWithIconCode),e(7),h("aria-label",v(n(39,67,"cards.select_card"))),e(3),r(n(42,69,"cards.card_title")),e(3),r(n(45,71,"cards.card_text")),e(4),r(n(49,73,"cards.action_secondary")),e(3),r(n(52,75,"cards.action")),e(2),o("htmlCode",l.cardWithCheckboxCode),e(8),h("aria-label",v(n(62,77,"cards.select_card"))),e(3),r(n(65,79,"cards.card_title")),e(3),r(n(68,81,"cards.card_text")),e(4),r(n(72,83,"cards.action_secondary")),e(3),r(n(75,85,"cards.action")),e(2),o("htmlCode",l.disabledCardCode),e(7),h("aria-label",v(n(84,87,"cards.select_card"))),e(3),r(n(87,89,"cards.card_title")),e(3),r(n(90,91,"cards.card_text")),e(4),r(n(94,93,"cards.action_secondary")),e(3),r(n(97,95,"cards.action")),e(2),o("htmlCode",l.cardNoShadowCode),e(4),x("expanded",l.isExpanded(1)),e(4),h("aria-label",v(n(107,97,"cards.select_card"))),e(3),r(n(110,99,"cards.expandable_title")),e(3),r(n(113,101,"cards.expandable_text")),e(2),C(l.isExpanded(1)?114:-1),e(2),x("hgi-arrow-up-01",l.isExpanded(1))("hgi-arrow-down-01",!l.isExpanded(1)),e(),o("htmlCode",l.expandableCardHtmlCode)("tsCode",l.expandableCardTsCode),e(4),x("expanded",l.isExpanded(2)),e(5),r(n(127,103,"cards.expandable_title")),e(3),r(n(130,105,"cards.expandable_text")),e(2),C(l.isExpanded(2)?131:-1),e(2),x("hgi-arrow-up-01",l.isExpanded(2))("hgi-arrow-down-01",!l.isExpanded(2)),e(),o("htmlCode",l.expandableCardSimpleHtmlCode)("tsCode",l.expandableCardTsCode))},dependencies:[y,k,g],styles:[".demo-section[_ngcontent-%COMP%]{margin-bottom:4rem}.demo-card-grid[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem;align-items:flex-start}"],changeDetection:0})};export{f as a};
