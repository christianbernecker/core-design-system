/**
 * EINFACHE, DIREKTE DROPDOWN-LÖSUNG
 * Funktioniert garantiert ohne komplexe Klassen-Struktur
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 Simple Dropdown Fix loaded');
    
    // ALLE DROPDOWN-TRIGGER FINDEN UND HANDLER HINZUFÜGEN
    function setupDropdowns() {
        // Select-Komponenten
        document.querySelectorAll('.core-select-trigger').forEach(function(trigger, index) {
            console.log('📋 Select trigger ' + index + ' setup');
            
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('🖱️ Select trigger clicked');
                
                const dropdown = this.nextElementSibling;
                const select = this.closest('.core-select');
                
                if (!dropdown || !select) {
                    console.log('❌ Dropdown oder Select nicht gefunden');
                    return;
                }
                
                const isOpen = dropdown.classList.contains('show');
                console.log('📊 Dropdown isOpen:', isOpen);
                
                // Alle anderen schließen
                document.querySelectorAll('.core-select-dropdown').forEach(function(otherDropdown) {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('show');
                        const otherSelect = otherDropdown.closest('.core-select');
                        const otherTrigger = otherSelect.querySelector('.core-select-trigger');
                        if (otherSelect) otherSelect.classList.remove('active');
                        if (otherTrigger) otherTrigger.classList.remove('active');
                    }
                });
                
                // Current toggle
                if (isOpen) {
                    dropdown.classList.remove('show');
                    select.classList.remove('active');
                    this.classList.remove('active');
                    console.log('🔒 Select closed');
                } else {
                    // EINFACH: Nur CSS-Klassen setzen - Position über CSS
                    dropdown.classList.add('show');
                    select.classList.add('active');
                    this.classList.add('active');
                    console.log('🔓 Select opened - CSS handles positioning');
                }
            });
        });
        
        // Dropdown-Komponenten
        document.querySelectorAll('.core-dropdown-trigger').forEach(function(trigger, index) {
            console.log('📋 Dropdown trigger ' + index + ' setup');
            
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('🖱️ Dropdown trigger clicked');
                
                const dropdown = this.nextElementSibling;
                const container = this.closest('.core-dropdown');
                
                if (!dropdown || !container) {
                    console.log('❌ Dropdown oder Container nicht gefunden');
                    return;
                }
                
                const isOpen = dropdown.classList.contains('active');
                console.log('📊 Dropdown isOpen:', isOpen);
                
                // Alle anderen schließen
                document.querySelectorAll('.core-dropdown-menu').forEach(function(otherDropdown) {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                        const otherContainer = otherDropdown.closest('.core-dropdown');
                        const otherTrigger = otherContainer.querySelector('.core-dropdown-trigger');
                        if (otherContainer) otherContainer.classList.remove('active');
                        if (otherTrigger) otherTrigger.classList.remove('active');
                    }
                });
                
                // Current toggle
                if (isOpen) {
                    dropdown.classList.remove('active');
                    container.classList.remove('active');
                    this.classList.remove('active');
                    console.log('🔒 Dropdown closed');
                } else {
                    dropdown.classList.add('active');
                    container.classList.add('active');
                    this.classList.add('active');
                    console.log('🔓 Dropdown opened');
                }
            });
        });
        
        // Option-Handler für Select
        document.querySelectorAll('.core-select-option').forEach(function(option, index) {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('🎯 Select option clicked:', this.textContent.trim());
                
                const dropdown = this.closest('.core-select-dropdown');
                const select = this.closest('.core-select');
                const trigger = select.querySelector('.core-select-trigger');
                const selectedText = trigger.querySelector('.core-select-text, span');
                
                if (selectedText) {
                    selectedText.textContent = this.textContent.trim();
                }
                
                // Selected state
                dropdown.querySelectorAll('.core-select-option').forEach(function(opt) {
                    opt.classList.remove('selected');
                });
                this.classList.add('selected');
                
                // Close dropdown
                dropdown.classList.remove('show');
                select.classList.remove('active');
                trigger.classList.remove('active');
                console.log('✅ Option selected and dropdown closed');
            });
        });
        
        // Outside click
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.core-select, .core-dropdown, .core-autocomplete')) {
                console.log('🌍 Outside click - closing all dropdowns');
                
                document.querySelectorAll('.core-select-dropdown').forEach(function(dropdown) {
                    dropdown.classList.remove('show');
                    const select = dropdown.closest('.core-select');
                    const trigger = select.querySelector('.core-select-trigger');
                    if (select) select.classList.remove('active');
                    if (trigger) trigger.classList.remove('active');
                });
                
                document.querySelectorAll('.core-dropdown-menu').forEach(function(dropdown) {
                    dropdown.classList.remove('active');
                    const container = dropdown.closest('.core-dropdown');
                    const trigger = container.querySelector('.core-dropdown-trigger');
                    if (container) container.classList.remove('active');
                    if (trigger) trigger.classList.remove('active');
                });
            }
        });
    }
    
    // Setup mit Delay um sicherzustellen dass DOM ready ist
    setTimeout(setupDropdowns, 100);
    
    console.log('✅ Simple Dropdown Fix initialized');
});
