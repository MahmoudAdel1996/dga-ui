import{a as g}from"./chunk-ZACVS3L3.js";import{Ea as S,Jb as f,Lb as y,Ma as v,Oa as h,Pa as C,Ta as o,Ua as i,Va as e,Wa as c,ab as u,ba as E,db as b,fb as a,gb as l,ib as x,jb as d,kb as n,ra as t}from"./chunk-XVAADARM.js";function I(s,p){s&1&&(i(0,"div",30)(1,"p",34),a(2),d(3,"translate"),e(),i(4,"ul")(5,"li"),a(6),d(7,"translate"),e(),i(8,"li"),a(9),d(10,"translate"),e(),i(11,"li"),a(12),d(13,"translate"),e()()()),s&2&&(t(2),l(n(3,4,"cards.expanded_content")),t(4),l(n(7,6,"cards.detail_1")),t(3),l(n(10,8,"cards.detail_2")),t(3),l(n(13,10,"cards.detail_3")))}function w(s,p){s&1&&(i(0,"div",30)(1,"p",34),a(2),d(3,"translate"),e(),i(4,"ul")(5,"li"),a(6),d(7,"translate"),e(),i(8,"li"),a(9),d(10,"translate"),e(),i(11,"li"),a(12),d(13,"translate"),e()(),i(14,"div",35)(15,"button",36),a(16),d(17,"translate"),e(),i(18,"button",37),a(19),d(20,"translate"),e()()()),s&2&&(t(2),l(n(3,6,"cards.expanded_content")),t(4),l(n(7,8,"cards.detail_1")),t(3),l(n(10,10,"cards.detail_2")),t(3),l(n(13,12,"cards.detail_3")),t(4),l(n(17,14,"cards.action")),t(3),l(n(20,16,"cards.cancel")))}var k=class s{expandedCards=E(new Set,{});toggleCard(p){this.expandedCards.update(m=>{let r=new Set(m);return r.has(p)?r.delete(p):r.add(p),r})}isExpanded(p){return this.expandedCards().has(p)}cardWithIconCode=`<div class="card" tabindex="0">
  <div class="card-body">
    <h5 class="card-title">
      <div class="dga-featured-icon dga-featured-icon-circle">
       <i class="bi bi-check-circle"></i>
      </div>
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
      <div class="dga-featured-icon dga-featured-icon-circle disabled">
       <i class="bi bi-check-circle"></i>
      </div>
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
      <div class="dga-featured-icon dga-featured-icon-circle">
       <i class="bi bi-check-circle"></i>
      </div>
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
      <i class="bi card-expanded-icon" 
         [class.bi-chevron-up]="isExpanded(1)" 
         [class.bi-chevron-down]="!isExpanded(1)" 
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
      <div class="dga-featured-icon dga-featured-icon-circle">
       <i class="bi bi-check-circle"></i>
      </div>
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
      <i class="bi card-expanded-icon" 
         [class.bi-chevron-up]="isExpanded(2)" 
         [class.bi-chevron-down]="!isExpanded(2)" 
         (click)="toggleCard(2)"></i>
    </div>
  </div>
</div>`;static \u0275fac=function(m){return new(m||s)};static \u0275cmp=S({type:s,selectors:[["app-cards"]],decls:139,vars:107,consts:[[1,"container","py-5"],[1,"display-4","mb-4"],[1,"lead","mb-5"],[1,"demo-section"],[1,"mb-4"],[1,"mb-3"],[1,"demo-card-grid","mb-3"],["tabindex","0",1,"card"],[1,"card-body"],[1,"card-title"],[1,"dga-featured-icon","dga-featured-icon-circle"],[1,"bi","bi-check-circle"],[1,"card-subtitle","mb-2"],[1,"card-text"],[1,"card-footer"],["href","javascript:void(0);",1,"btn","btn-outline-secondary"],["href","javascript:void(0);",1,"btn","btn-primary"],["title","Card with Icon and Header",3,"htmlCode"],[1,"mb-3","mt-5"],["type","checkbox","value","","id","check2",1,"card-title-checked","form-check-input","ripple",3,"aria-label"],["title","Card with Checkbox",3,"htmlCode"],["tabindex","0",1,"card","disabled"],[1,"dga-featured-icon","dga-featured-icon-circle","disabled"],["disabled","","type","checkbox","value","","id","check1",1,"card-title-checked","form-check-input","ripple",3,"aria-label"],["href","javascript:void(0);",1,"btn","btn-outline-secondary","disabled"],["href","javascript:void(0);",1,"btn","btn-primary","disabled"],["title","Disabled Card with Icon and Checkbox",3,"htmlCode"],["tabindex","0",1,"card","shadow-none"],["title","Card with Shadow Removed (shadow-none)",3,"htmlCode"],["type","checkbox","value","","id","check3",1,"card-title-checked","form-check-input","ripple",3,"aria-label"],[1,"card-expanded-content"],[1,"bi","card-expanded-icon",3,"click"],["title","Expandable Card with Checkbox - HTML Template",3,"htmlCode","tsCode"],["title","Expandable Card with Actions - HTML Template",3,"htmlCode","tsCode"],[1,"mt-3"],[1,"d-flex","align-items-center","gap-3","mb-3"],[1,"btn","btn-sm","btn-primary"],[1,"btn","btn-sm","btn-outline-secondary"]],template:function(m,r){m&1&&(i(0,"div",0)(1,"h1",1),a(2),d(3,"translate"),e(),i(4,"p",2),a(5),d(6,"translate"),e(),i(7,"section",3)(8,"h2",4),a(9),d(10,"translate"),e(),i(11,"h3",5),a(12,"Card with Icon"),e(),i(13,"div",6)(14,"div",7)(15,"div",8)(16,"h5",9)(17,"div",10),c(18,"i",11),e()(),i(19,"h6",12),a(20),d(21,"translate"),e(),i(22,"p",13),a(23),d(24,"translate"),e(),i(25,"div",14)(26,"a",15),a(27),d(28,"translate"),e(),i(29,"a",16),a(30),d(31,"translate"),e()()()()(),c(32,"app-code-example",17),i(33,"h3",18),a(34,"Card with Checkbox"),e(),i(35,"div",6)(36,"div",7)(37,"div",8)(38,"h5",9),c(39,"input",19),d(40,"translate"),e(),i(41,"h6",12),a(42),d(43,"translate"),e(),i(44,"p",13),a(45),d(46,"translate"),e(),i(47,"div",14)(48,"a",15),a(49),d(50,"translate"),e(),i(51,"a",16),a(52),d(53,"translate"),e()()()()(),c(54,"app-code-example",20),i(55,"h3",18),a(56,"Disabled Card"),e(),i(57,"div",6)(58,"div",21)(59,"div",8)(60,"h5",9)(61,"div",22),c(62,"i",11),e(),c(63,"input",23),d(64,"translate"),e(),i(65,"h6",12),a(66),d(67,"translate"),e(),i(68,"p",13),a(69),d(70,"translate"),e(),i(71,"div",14)(72,"a",24),a(73),d(74,"translate"),e(),i(75,"a",25),a(76),d(77,"translate"),e()()()()(),c(78,"app-code-example",26),i(79,"h3",18),a(80,"Card without Shadow"),e(),i(81,"div",6)(82,"div",27)(83,"div",8)(84,"h5",9),c(85,"input",19),d(86,"translate"),e(),i(87,"h6",12),a(88),d(89,"translate"),e(),i(90,"p",13),a(91),d(92,"translate"),e(),i(93,"div",14)(94,"a",15),a(95),d(96,"translate"),e(),i(97,"a",16),a(98),d(99,"translate"),e()()()()(),c(100,"app-code-example",28),i(101,"h3",18),a(102,"Expandable Card (Interactive)"),e(),i(103,"div",6)(104,"div",7)(105,"div",8)(106,"h5",9)(107,"div",10),c(108,"i",11),e(),c(109,"input",29),d(110,"translate"),e(),i(111,"h6",12),a(112),d(113,"translate"),e(),i(114,"p",13),a(115),d(116,"translate"),e(),h(117,I,14,12,"div",30),i(118,"div",14)(119,"i",31),u("click",function(){return r.toggleCard(1)}),e()()()()(),c(120,"app-code-example",32),i(121,"h3",18),a(122,"Expandable Card (Simple)"),e(),i(123,"div",6)(124,"div",7)(125,"div",8)(126,"h5",9)(127,"div",10),c(128,"i",11),e()(),i(129,"h6",12),a(130),d(131,"translate"),e(),i(132,"p",13),a(133),d(134,"translate"),e(),h(135,w,21,18,"div",30),i(136,"div",14)(137,"i",31),u("click",function(){return r.toggleCard(2)}),e()()()()(),c(138,"app-code-example",33),e()()),m&2&&(t(2),l(n(3,53,"cards.title")),t(3),l(n(6,55,"cards.subtitle")),t(4),l(n(10,57,"cards.section_examples")),t(11),l(n(21,59,"cards.card_title")),t(3),l(n(24,61,"cards.card_text")),t(4),l(n(28,63,"cards.action_secondary")),t(3),l(n(31,65,"cards.action")),t(2),o("htmlCode",r.cardWithIconCode),t(7),v("aria-label",x(n(40,67,"cards.select_card"))),t(3),l(n(43,69,"cards.card_title")),t(3),l(n(46,71,"cards.card_text")),t(4),l(n(50,73,"cards.action_secondary")),t(3),l(n(53,75,"cards.action")),t(2),o("htmlCode",r.cardWithCheckboxCode),t(9),v("aria-label",x(n(64,77,"cards.select_card"))),t(3),l(n(67,79,"cards.card_title")),t(3),l(n(70,81,"cards.card_text")),t(4),l(n(74,83,"cards.action_secondary")),t(3),l(n(77,85,"cards.action")),t(2),o("htmlCode",r.disabledCardCode),t(7),v("aria-label",x(n(86,87,"cards.select_card"))),t(3),l(n(89,89,"cards.card_title")),t(3),l(n(92,91,"cards.card_text")),t(4),l(n(96,93,"cards.action_secondary")),t(3),l(n(99,95,"cards.action")),t(2),o("htmlCode",r.cardNoShadowCode),t(4),b("expanded",r.isExpanded(1)),t(5),v("aria-label",x(n(110,97,"cards.select_card"))),t(3),l(n(113,99,"cards.expandable_title")),t(3),l(n(116,101,"cards.expandable_text")),t(2),C(r.isExpanded(1)?117:-1),t(2),b("bi-chevron-up",r.isExpanded(1))("bi-chevron-down",!r.isExpanded(1)),t(),o("htmlCode",r.expandableCardHtmlCode)("tsCode",r.expandableCardTsCode),t(4),b("expanded",r.isExpanded(2)),t(6),l(n(131,103,"cards.expandable_title")),t(3),l(n(134,105,"cards.expandable_text")),t(2),C(r.isExpanded(2)?135:-1),t(2),b("bi-chevron-up",r.isExpanded(2))("bi-chevron-down",!r.isExpanded(2)),t(),o("htmlCode",r.expandableCardSimpleHtmlCode)("tsCode",r.expandableCardTsCode))},dependencies:[y,g,f],styles:[".demo-section[_ngcontent-%COMP%]{margin-bottom:4rem}.demo-card-grid[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem;align-items:flex-start}"],changeDetection:0})};export{k as CardsComponent};
