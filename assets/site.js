// ONBOARD — shared interactive components (flow diagrams, tooltip, model cards)
(function(){
  var tip;
  function ensureTooltip(){
    if(tip) return tip;
    tip = document.createElement('div');
    tip.id = 'vizTooltip';
    document.body.appendChild(tip);
    document.body.addEventListener('mouseover', function(e){
      var node = e.target.closest('.flownode');
      if(!node || !node.dataset.tip) return;
      tip.textContent = node.dataset.tip;
      tip.classList.add('show');
    });
    document.body.addEventListener('mousemove', function(e){
      if(!tip.classList.contains('show')) return;
      var x = e.clientX + 14, y = e.clientY + 14;
      if(x + 240 > window.innerWidth) x = e.clientX - 254;
      tip.style.left = x + 'px';
      tip.style.top = y + 'px';
    });
    document.body.addEventListener('mouseout', function(e){
      var leavingNode = e.target.closest('.flownode');
      if(leavingNode && !(e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('.flownode'))){
        tip.classList.remove('show');
      }
    });
    return tip;
  }

  // Builds a horizontal (default) or vertical flow diagram.
  // container: element to fill. nodes: [{label, tip}]. cls: 'auto' | 'semi'.
  window.ONBOARD_buildFlow = function(container, nodes, cls, opts){
    ensureTooltip();
    opts = opts || {};
    if(opts.vertical) container.classList.add('vertical');
    nodes.forEach(function(n, i){
      var el = document.createElement('div');
      el.className = 'flownode ' + cls;
      el.textContent = n.label;
      if(n.tip) el.dataset.tip = n.tip;
      container.appendChild(el);
      if(i < nodes.length - 1){
        var arrow = document.createElement('div');
        arrow.className = 'flowarrow';
        arrow.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
        container.appendChild(arrow);
      }
    });
  };

  // Builds the 4-up business-model icon card grid.
  window.ONBOARD_buildModelGrid = function(container, models){
    models.forEach(function(m){
      var card = document.createElement('div');
      card.className = 'modelcard ' + (m.cls || '');
      card.innerHTML = '<svg class="micon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">' + m.icon + '</svg>' +
        '<h4>' + m.label + '</h4><p>' + m.desc + '</p><span class="mex">' + m.ex + '</span>';
      container.appendChild(card);
    });
  };
})();
