import{a as g}from"./chunk-ZACVS3L3.js";import{Bb as h,Ea as u,Jb as x,Lb as f,Ta as d,Ua as e,Va as t,Wa as l,ba as p,fb as a,gb as o,hb as r,jb as s,kb as n,ra as i}from"./chunk-XVAADARM.js";var w=class v{showToast1=p(!1,{});showToast2=p(!1,{});showToast3=p(!1,{});showToast4=p(!1,{});showToast5=p(!1,{});showToast6=p(!1,{});successToastCode=`<div class="toast show fade toast-success" role="alert" aria-live="polite" aria-atomic="true">
  <div class="toast-icon">
    <i class="bi bi-check-circle toast-icon"></i>
  </div>
  <div class="toast-content">
    <div class="toast-header">
      <strong>Success</strong>
    </div>
    <div class="toast-body">
      Your action was completed successfully!
    </div>
    <div class="toast-footer">
      <button type="button" class="btn btn-subtle btn-sm">Action</button>
      <button type="button" class="btn btn-subtle btn-sm" data-bs-dismiss="toast" aria-label="Close">Dismiss</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
</div>`;dangerToastCode=`<div class="toast show fade toast-danger" role="alert" aria-live="polite" aria-atomic="true">
  <div class="toast-icon">
    <i class="bi bi-exclamation-circle toast-icon"></i>
  </div>
  <div class="toast-content">
    <div class="toast-header">
      <strong>Error</strong>
    </div>
    <div class="toast-body">
      There was an error processing your request.
    </div>
    <div class="toast-footer">
      <button type="button" class="btn btn-subtle btn-sm">Action</button>
      <button type="button" class="btn btn-subtle btn-sm" data-bs-dismiss="toast" aria-label="Close">Dismiss</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
</div>`;warningToastCode=`<div class="toast show fade toast-warning" role="alert" aria-live="polite" aria-atomic="true">
  <div class="toast-icon">
    <i class="bi bi-exclamation-triangle toast-icon"></i>
  </div>
  <div class="toast-content">
    <div class="toast-header">
      <strong>Warning</strong>
    </div>
    <div class="toast-body">
      Please review your changes before proceeding.
    </div>
    <div class="toast-footer">
      <button type="button" class="btn btn-subtle btn-sm">Action</button>
      <button type="button" class="btn btn-subtle btn-sm" data-bs-dismiss="toast" aria-label="Close">Dismiss</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
</div>`;infoToastCode=`<div class="toast show fade toast-info" role="alert" aria-live="polite" aria-atomic="true">
  <div class="toast-icon">
    <i class="bi bi-info-circle toast-icon"></i>
  </div>
  <div class="toast-content">
    <div class="toast-header">
      <strong>Information</strong>
    </div>
    <div class="toast-body">
      Here's some helpful information for you.
    </div>
    <div class="toast-footer">
      <button type="button" class="btn btn-subtle btn-sm">Action</button>
      <button type="button" class="btn btn-subtle btn-sm" data-bs-dismiss="toast" aria-label="Close">Dismiss</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
</div>`;neutralToastCode=`<div class="toast show fade toast-neutral" role="alert" aria-live="polite" aria-atomic="true">
  <div class="toast-icon">
    <i class="bi bi-info-circle toast-icon"></i>
  </div>
  <div class="toast-content">
    <div class="toast-header">
      <strong>Neutral</strong>
    </div>
    <div class="toast-body">
      This is a neutral notification message.
    </div>
    <div class="toast-footer">
      <button type="button" class="btn btn-subtle btn-sm">Action</button>
      <button type="button" class="btn btn-subtle btn-sm" data-bs-dismiss="toast" aria-label="Close">Dismiss</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
</div>`;fullToastCode=`<div class="toast-container">
  <div class="toast show fade toast-success" role="alert" aria-live="polite" aria-atomic="true">
    <div class="toast-icon">
      <i class="bi bi-check-circle toast-icon"></i>
    </div>
    <div class="toast-content">
      <div class="toast-header">
        <strong>Success</strong>
      </div>
      <div class="toast-body">
        Your action was completed successfully!
      </div>
      <div class="toast-footer">
        <button type="button" class="btn btn-subtle btn-sm">Action</button>
        <button type="button" class="btn btn-subtle btn-sm" data-bs-dismiss="toast" aria-label="Close">Dismiss</button>
      </div>
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>`;dismissibleToastCode=`<div class="toast show fade toast-success" role="alert" aria-live="polite" aria-atomic="true">
  <div class="toast-icon">
    <i class="bi bi-check-circle toast-icon"></i>
  </div>
  <div class="toast-content">
    <div class="toast-header">
      <strong>Success</strong>
    </div>
    <div class="toast-body">
      Your action was completed successfully!
    </div>
    <div class="toast-footer">
      <button type="button" class="btn btn-subtle btn-sm">Action</button>
      <button type="button" class="btn btn-subtle btn-sm" data-bs-dismiss="toast" aria-label="Close">Dismiss</button>
    </div>
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
</div>`;hideToast(b){switch(b){case 1:this.showToast1.set(!1);break;case 2:this.showToast2.set(!1);break;case 3:this.showToast3.set(!1);break;case 4:this.showToast4.set(!1);break;case 5:this.showToast5.set(!1);break;case 6:this.showToast6.set(!1);break}}showAllToasts(){this.showToast1.set(!0),this.showToast2.set(!0),this.showToast3.set(!0),this.showToast4.set(!0),this.showToast5.set(!0),this.showToast6.set(!0)}static \u0275fac=function(m){return new(m||v)};static \u0275cmp=u({type:v,selectors:[["app-toasts"]],decls:174,vars:100,consts:[[1,"container","py-5"],[1,"display-4","mb-4"],[1,"lead","mb-5"],[1,"demo-section","mb-5"],[1,"mt-5"],[1,"h5","mt-4","mb-3"],[1,"d-flex","flex-wrap","gap-3","mb-3"],[1,"toast-container"],["role","alert","aria-live","polite","aria-atomic","true",1,"toast","show","fade","toast-success"],[1,"toast-icon"],[1,"bi","bi-check-circle","toast-icon"],[1,"toast-content"],[1,"toast-header"],[1,"toast-body"],[1,"toast-footer"],["type","button",1,"btn","btn-subtle","btn-sm"],["type","button","data-bs-dismiss","toast","aria-label","Close",1,"btn","btn-subtle","btn-sm"],["type","button","data-bs-dismiss","toast","aria-label","Close",1,"btn-close"],["title","Success Toast with Icon",3,"htmlCode"],["role","alert","aria-live","polite","aria-atomic","true",1,"toast","show","fade","toast-danger"],[1,"bi","bi-exclamation-circle","toast-icon"],["title","Danger Toast with Icon",3,"htmlCode"],["role","alert","aria-live","polite","aria-atomic","true",1,"toast","show","fade","toast-warning"],[1,"bi","bi-exclamation-triangle","toast-icon"],["title","Warning Toast with Icon",3,"htmlCode"],["role","alert","aria-live","polite","aria-atomic","true",1,"toast","show","fade","toast-info"],[1,"bi","bi-info-circle","toast-icon"],["title","Info Toast with Icon",3,"htmlCode"],["role","alert","aria-live","polite","aria-atomic","true",1,"toast","show","fade","toast-neutral"],["title","Neutral Toast with Icon",3,"htmlCode"],["title","Toast with Header, Body, and Footer Actions",3,"htmlCode"],["title","Dismissible Toast",3,"htmlCode"]],template:function(m,c){m&1&&(e(0,"div",0)(1,"h1",1),a(2),s(3,"translate"),t(),e(4,"p",2),a(5),s(6,"translate"),t(),e(7,"section",3)(8,"h2",4),a(9),s(10,"translate"),t(),e(11,"h3",5),a(12,"Success Toast with Icon"),t(),e(13,"div",6)(14,"div",7)(15,"div",8)(16,"div",9),l(17,"i",10),t(),e(18,"div",11)(19,"div",12)(20,"strong"),a(21),s(22,"translate"),t()(),e(23,"div",13),a(24),s(25,"translate"),t(),e(26,"div",14)(27,"button",15),a(28),s(29,"translate"),t(),e(30,"button",16),a(31),s(32,"translate"),t()()(),l(33,"button",17),t()()(),l(34,"app-code-example",18),e(35,"h3",5),a(36,"Danger Toast with Icon"),t(),e(37,"div",6)(38,"div",19)(39,"div",9),l(40,"i",20),t(),e(41,"div",11)(42,"div",12)(43,"strong"),a(44),s(45,"translate"),t()(),e(46,"div",13),a(47),s(48,"translate"),t(),e(49,"div",14)(50,"button",15),a(51),s(52,"translate"),t(),e(53,"button",16),a(54),s(55,"translate"),t()()(),l(56,"button",17),t()(),l(57,"app-code-example",21),e(58,"h3",5),a(59,"Warning Toast with Icon"),t(),e(60,"div",6)(61,"div",22)(62,"div",9),l(63,"i",23),t(),e(64,"div",11)(65,"div",12)(66,"strong"),a(67),s(68,"translate"),t()(),e(69,"div",13),a(70),s(71,"translate"),t(),e(72,"div",14)(73,"button",15),a(74),s(75,"translate"),t(),e(76,"button",16),a(77),s(78,"translate"),t()()(),l(79,"button",17),t()(),l(80,"app-code-example",24),e(81,"h3",5),a(82,"Info Toast with Icon"),t(),e(83,"div",6)(84,"div",25)(85,"div",9),l(86,"i",26),t(),e(87,"div",11)(88,"div",12)(89,"strong"),a(90),s(91,"translate"),t()(),e(92,"div",13),a(93),s(94,"translate"),t(),e(95,"div",14)(96,"button",15),a(97),s(98,"translate"),t(),e(99,"button",16),a(100),s(101,"translate"),t()()(),l(102,"button",17),t()(),l(103,"app-code-example",27),e(104,"h3",5),a(105,"Neutral Toast with Icon"),t(),e(106,"div",6)(107,"div",28)(108,"div",9),l(109,"i",26),t(),e(110,"div",11)(111,"div",12)(112,"strong"),a(113),s(114,"translate"),t()(),e(115,"div",13),a(116),s(117,"translate"),t(),e(118,"div",14)(119,"button",15),a(120),s(121,"translate"),t(),e(122,"button",16),a(123),s(124,"translate"),t()()(),l(125,"button",17),t()(),l(126,"app-code-example",29),e(127,"h3",5),a(128,"Toast with Header, Body, and Footer Actions"),t(),e(129,"div",6)(130,"div",7)(131,"div",8)(132,"div",9),l(133,"i",10),t(),e(134,"div",11)(135,"div",12)(136,"strong"),a(137),s(138,"translate"),t()(),e(139,"div",13),a(140),s(141,"translate"),t(),e(142,"div",14)(143,"button",15),a(144),s(145,"translate"),t(),e(146,"button",16),a(147),s(148,"translate"),t()()(),l(149,"button",17),t()()(),l(150,"app-code-example",30),e(151,"h3",5),a(152,"Dismissible Toast"),t(),e(153,"div",6)(154,"div",8)(155,"div",9),l(156,"i",10),t(),e(157,"div",11)(158,"div",12)(159,"strong"),a(160),s(161,"translate"),t()(),e(162,"div",13),a(163),s(164,"translate"),t(),e(165,"div",14)(166,"button",15),a(167),s(168,"translate"),t(),e(169,"button",16),a(170),s(171,"translate"),t()()(),l(172,"button",17),t()(),l(173,"app-code-example",31),t()()),m&2&&(i(2),o(n(3,38,"toasts.title")),i(3),o(n(6,40,"toasts.subtitle")),i(4),o(n(10,42,"toasts.section_variants")),i(12),o(n(22,44,"toasts.success")),i(3),r(" ",n(25,46,"toasts.success_text")," "),i(4),o(n(29,48,"toasts.action")),i(3),o(n(32,50,"toasts.dismiss")),i(3),d("htmlCode",c.successToastCode),i(10),o(n(45,52,"toasts.danger")),i(3),r(" ",n(48,54,"toasts.danger_text")," "),i(4),o(n(52,56,"toasts.action")),i(3),o(n(55,58,"toasts.dismiss")),i(3),d("htmlCode",c.dangerToastCode),i(10),o(n(68,60,"toasts.warning")),i(3),r(" ",n(71,62,"toasts.warning_text")," "),i(4),o(n(75,64,"toasts.action")),i(3),o(n(78,66,"toasts.dismiss")),i(3),d("htmlCode",c.warningToastCode),i(10),o(n(91,68,"toasts.info")),i(3),r(" ",n(94,70,"toasts.info_text")," "),i(4),o(n(98,72,"toasts.action")),i(3),o(n(101,74,"toasts.dismiss")),i(3),d("htmlCode",c.infoToastCode),i(10),o(n(114,76,"toasts.neutral")),i(3),r(" ",n(117,78,"toasts.neutral_text")," "),i(4),o(n(121,80,"toasts.action")),i(3),o(n(124,82,"toasts.dismiss")),i(3),d("htmlCode",c.neutralToastCode),i(11),o(n(138,84,"toasts.success")),i(3),r(" ",n(141,86,"toasts.success_text")," "),i(4),o(n(145,88,"toasts.action")),i(3),o(n(148,90,"toasts.dismiss")),i(3),d("htmlCode",c.fullToastCode),i(10),o(n(161,92,"toasts.success")),i(3),r(" ",n(164,94,"toasts.success_text")," "),i(4),o(n(168,96,"toasts.action")),i(3),o(n(171,98,"toasts.dismiss")),i(3),d("htmlCode",c.dismissibleToastCode))},dependencies:[h,f,g,x],encapsulation:2,changeDetection:0})};export{w as ToastsComponent};
