import{a as u}from"./chunk-522BR6GU.js";import{La as s,Ma as t,Na as e,Oa as r,Ya as n,Za as o,_a as c,ab as a,bb as l,oa as i,ob as v,vb as h,xb as f,ya as k}from"./chunk-6STGATHH.js";var x=class m{basicLinksCode=`<a href="#" class="link-primary">Primary link</a>
<a href="#" class="link-secondary">Secondary link</a>
<a href="#" class="link-success">Success link</a>
<a href="#" class="link-danger">Danger link</a>
<a href="#" class="link-warning">Warning link</a>
<a href="#" class="link-info">Info link</a>`;underlineLinksCode=`<!-- Default underline -->
<a href="#" class="link-underline">Link with underline</a>

<!-- Opacity variants -->
<a href="#" class="link-underline-opacity-0">No underline (opacity 0)</a>
<a href="#" class="link-underline-opacity-25">25% underline opacity</a>
<a href="#" class="link-underline-opacity-50">50% underline opacity</a>
<a href="#" class="link-underline-opacity-75">75% underline opacity</a>
<a href="#" class="link-underline-opacity-100">100% underline opacity</a>`;hoverLinksCode=`<!-- Show underline on hover -->
<a href="#" class="link-primary link-underline-opacity-0 link-underline-opacity-100-hover">
  Underline appears on hover
</a>

<!-- Hide underline on hover -->
<a href="#" class="link-secondary link-underline-opacity-100 link-underline-opacity-0-hover">
  Underline disappears on hover
</a>`;offsetLinksCode=`<a href="#" class="link-offset-1">Link with offset 1</a>
<a href="#" class="link-offset-2">Link with offset 2</a>
<a href="#" class="link-offset-3">Link with offset 3</a>`;offsetHoverCode=`<a href="#" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
  Link with offset that changes on hover
</a>`;iconLinksCode=`<!-- Icon before text -->
<a href="#" class="link-primary">
  <i class="hgi hgi-stroke hgi-link-01 me-2"></i>
  Link with leading icon
</a>

<!-- Icon after text -->
<a href="#" class="link-secondary">
  External link
  <i class="hgi hgi-stroke hgi-link-external-01 ms-2"></i>
</a>

<!-- Icon with arrow -->
<a href="#" class="link-success">
  <i class="hgi hgi-stroke hgi-arrow-right-01 me-2"></i>
  Arrow link
</a>`;subtleLinkCode='<a href="#" class="custom-link-subtle">Subtle link style</a>';subtleLinkScss=`.custom-link-subtle {
  color: var(--dga-neutral-600);
  text-decoration: none;
  
  &:hover {
    color: var(--dga-primary);
    text-decoration: underline;
  }
}`;boldLinkCode='<a href="#" class="custom-link-bold">Bold link style</a>';boldLinkScss=`.custom-link-bold {
  color: var(--dga-primary);
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    color: var(--dga-primary-dark);
    text-decoration: underline;
  }
}`;decoratedLinkCode='<a href="#" class="custom-link-decorated">Decorated link with animated underline</a>';decoratedLinkScss=`.custom-link-decorated {
  color: var(--dga-secondary);
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--dga-secondary);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
}`;static \u0275fac=function(p){return new(p||m)};static \u0275cmp=k({type:m,selectors:[["app-links"]],decls:152,vars:105,consts:[[1,"container","py-5"],[1,"display-4","mb-4"],[1,"lead","mb-5"],[1,"demo-section","mb-5"],[1,"d-flex","flex-column","gap-3"],["href","javascript:void(0);",1,"link-primary"],["href","javascript:void(0);",1,"link-secondary"],["href","javascript:void(0);",1,"link-success"],["href","javascript:void(0);",1,"link-danger"],["href","javascript:void(0);",1,"link-warning"],["href","javascript:void(0);",1,"link-info"],[3,"htmlCode"],["href","javascript:void(0);",1,"link-underline"],["href","javascript:void(0);",1,"link-underline-opacity-0"],["href","javascript:void(0);",1,"link-underline-opacity-25"],["href","javascript:void(0);",1,"link-underline-opacity-50"],["href","javascript:void(0);",1,"link-underline-opacity-75"],["href","javascript:void(0);",1,"link-underline-opacity-100"],["href","javascript:void(0);",1,"link-primary","link-underline-opacity-0","link-underline-opacity-100-hover"],["href","javascript:void(0);",1,"link-secondary","link-underline-opacity-100","link-underline-opacity-0-hover"],["href","javascript:void(0);",1,"link-offset-1"],["href","javascript:void(0);",1,"link-offset-2"],["href","javascript:void(0);",1,"link-offset-3"],[1,"mt-4","mb-3"],["href","javascript:void(0);",1,"link-offset-2","link-offset-3-hover","link-underline","link-underline-opacity-0","link-underline-opacity-75-hover"],[1,"hgi","hgi-stroke","hgi-link-01","me-2"],[1,"hgi","hgi-stroke","hgi-link-external-01","ms-2"],[1,"hgi","hgi-stroke","hgi-arrow-right-01","me-2"],[1,"demo-section"],[1,"h5","mb-3"],[1,"mb-3"],["href","javascript:void(0);",1,"custom-link-subtle"],[3,"htmlCode","scssCode"],[1,"h5","mb-3","mt-4"],["href","javascript:void(0);",1,"custom-link-bold"],["href","javascript:void(0);",1,"custom-link-decorated"]],template:function(p,d){p&1&&(t(0,"div",0)(1,"h1",1),n(2),a(3,"translate"),e(),t(4,"p",2),n(5),a(6,"translate"),e(),t(7,"section",3)(8,"h2"),n(9),a(10,"translate"),e(),t(11,"div",4)(12,"div")(13,"a",5),n(14),a(15,"translate"),e()(),t(16,"div")(17,"a",6),n(18),a(19,"translate"),e()(),t(20,"div")(21,"a",7),n(22),a(23,"translate"),e()(),t(24,"div")(25,"a",8),n(26),a(27,"translate"),e()(),t(28,"div")(29,"a",9),n(30),a(31,"translate"),e()(),t(32,"div")(33,"a",10),n(34),a(35,"translate"),e()()(),r(36,"app-code-example",11),e(),t(37,"section",3)(38,"h2"),n(39),a(40,"translate"),e(),t(41,"div",4)(42,"div")(43,"a",12),n(44),a(45,"translate"),e()(),t(46,"div")(47,"a",13),n(48),a(49,"translate"),e()(),t(50,"div")(51,"a",14),n(52),a(53,"translate"),e()(),t(54,"div")(55,"a",15),n(56),a(57,"translate"),e()(),t(58,"div")(59,"a",16),n(60),a(61,"translate"),e()(),t(62,"div")(63,"a",17),n(64),a(65,"translate"),e()()(),r(66,"app-code-example",11),e(),t(67,"section",3)(68,"h2"),n(69),a(70,"translate"),e(),t(71,"div",4)(72,"div")(73,"a",18),n(74),a(75,"translate"),e()(),t(76,"div")(77,"a",19),n(78),a(79,"translate"),e()()(),r(80,"app-code-example",11),e(),t(81,"section",3)(82,"h2"),n(83),a(84,"translate"),e(),t(85,"div",4)(86,"div")(87,"a",20),n(88),a(89,"translate"),e()(),t(90,"div")(91,"a",21),n(92),a(93,"translate"),e()(),t(94,"div")(95,"a",22),n(96),a(97,"translate"),e()()(),r(98,"app-code-example",11),t(99,"h3",23),n(100,"Combining Offset with Hover Effects"),e(),t(101,"div",4)(102,"div")(103,"a",24),n(104," Link with changing offset on hover "),e()()(),r(105,"app-code-example",11),e(),t(106,"section",3)(107,"h2"),n(108),a(109,"translate"),e(),t(110,"div",4)(111,"div")(112,"a",5),r(113,"i",25),n(114),a(115,"translate"),e()(),t(116,"div")(117,"a",6),n(118),a(119,"translate"),r(120,"i",26),e()(),t(121,"div")(122,"a",7),r(123,"i",27),n(124),a(125,"translate"),e()()(),r(126,"app-code-example",11),e(),t(127,"section",28)(128,"h2"),n(129),a(130,"translate"),e(),t(131,"h3",29),n(132,"Subtle Link"),e(),t(133,"div",30)(134,"a",31),n(135),a(136,"translate"),e()(),r(137,"app-code-example",32),t(138,"h3",33),n(139,"Bold Link"),e(),t(140,"div",30)(141,"a",34),n(142),a(143,"translate"),e()(),r(144,"app-code-example",32),t(145,"h3",33),n(146,"Decorated Link"),e(),t(147,"div",30)(148,"a",35),n(149),a(150,"translate"),e()(),r(151,"app-code-example",32),e()()),p&2&&(i(2),o(l(3,43,"links.title")),i(3),o(l(6,45,"links.subtitle")),i(4),o(l(10,47,"links.section_basic")),i(5),o(l(15,49,"links.primary_link")),i(4),o(l(19,51,"links.secondary_link")),i(4),o(l(23,53,"links.success_link")),i(4),o(l(27,55,"links.danger_link")),i(4),o(l(31,57,"links.warning_link")),i(4),o(l(35,59,"links.info_link")),i(2),s("htmlCode",d.basicLinksCode),i(3),o(l(40,61,"links.section_underline")),i(5),o(l(45,63,"links.underline_link")),i(4),o(l(49,65,"links.no_underline")),i(4),o(l(53,67,"links.underline_25")),i(4),o(l(57,69,"links.underline_50")),i(4),o(l(61,71,"links.underline_75")),i(4),o(l(65,73,"links.underline_100")),i(2),s("htmlCode",d.underlineLinksCode),i(3),o(l(70,75,"links.section_hover")),i(5),o(l(75,77,"links.hover_underline")),i(4),o(l(79,79,"links.hover_remove")),i(2),s("htmlCode",d.hoverLinksCode),i(3),o(l(84,81,"links.section_offset")),i(5),o(l(89,83,"links.offset_1")),i(4),o(l(93,85,"links.offset_2")),i(4),o(l(97,87,"links.offset_3")),i(2),s("htmlCode",d.offsetLinksCode),i(7),s("htmlCode",d.offsetHoverCode),i(3),o(l(109,89,"links.section_icons")),i(6),c(" ",l(115,91,"links.link_with_icon")," "),i(4),c(" ",l(119,93,"links.external_link")," "),i(6),c(" ",l(125,95,"links.arrow_link")," "),i(2),s("htmlCode",d.iconLinksCode),i(3),o(l(130,97,"links.section_custom")),i(6),o(l(136,99,"links.subtle_link")),i(2),s("htmlCode",d.subtleLinkCode)("scssCode",d.subtleLinkScss),i(5),o(l(143,101,"links.bold_link")),i(2),s("htmlCode",d.boldLinkCode)("scssCode",d.boldLinkScss),i(5),o(l(150,103,"links.decorated_link")),i(2),s("htmlCode",d.decoratedLinkCode)("scssCode",d.decoratedLinkScss))},dependencies:[v,f,u,h],styles:['.demo-section[_ngcontent-%COMP%]{margin-bottom:3rem}.demo-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:1.5rem;padding-bottom:.5rem;border-bottom:1px solid var(--dga-border-color)}.demo-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1rem;transition:all .2s ease}.custom-link-subtle[_ngcontent-%COMP%]{color:var(--dga-neutral-600);text-decoration:none}.custom-link-subtle[_ngcontent-%COMP%]:hover{color:var(--dga-primary);text-decoration:underline}.custom-link-bold[_ngcontent-%COMP%]{color:var(--dga-primary);font-weight:600;text-decoration:none}.custom-link-bold[_ngcontent-%COMP%]:hover{color:var(--dga-primary-dark);text-decoration:underline}.custom-link-decorated[_ngcontent-%COMP%]{color:var(--dga-secondary);text-decoration:none;position:relative;padding-bottom:2px}.custom-link-decorated[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;width:0;height:2px;background-color:var(--dga-secondary);transition:width .3s ease}.custom-link-decorated[_ngcontent-%COMP%]:hover:after{width:100%}']})};export{x as LinksComponent};
