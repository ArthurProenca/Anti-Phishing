document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const statusText = document.getElementById('statusText');
  
    // Verifica o estado do switch ao carregar o popup
    chrome.storage.sync.get('enabled', function(data) {
      toggleSwitch.checked = data.enabled;
      setStatusText(data.enabled);
    });
  
    // Escuta a mudança no switch
    toggleSwitch.addEventListener('change', function(event) {
      const isChecked = event.target.checked;
      chrome.storage.sync.set({ 'enabled': isChecked });
      setStatusText(isChecked);
    });
  
    // Atualiza o texto de status
    function setStatusText(enabled) {
      statusText.textContent = enabled ? 'Habilitado' : 'Desabilitado';
    }
  });
  