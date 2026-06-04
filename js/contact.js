// Contact JavaScript for Tilahun Metal Art Furniture

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const fileUpload = document.getElementById('file-upload');
    const fileInput = document.getElementById('file-input');
    const fileList = document.getElementById('file-list');
    
    // File upload functionality
    fileUpload.addEventListener('click', () => {
        fileInput.click();
    });
    
    fileUpload.addEventListener('dragover', (e) => {
        e.preventDefault();
        fileUpload.classList.add('dragover');
    });
    
    fileUpload.addEventListener('dragleave', () => {
        fileUpload.classList.remove('dragover');
    });
    
    fileUpload.addEventListener('drop', (e) => {
        e.preventDefault();
        fileUpload.classList.remove('dragover');
        
        const files = e.dataTransfer.files;
        handleFiles(files);
    });
    
    fileInput.addEventListener('change', (e) => {
        const files = e.target.files;
        handleFiles(files);
    });
    
    function handleFiles(files) {
        Array.from(files).forEach(file => {
            // Validate file size (10MB max)
            if (file.size > 10 * 1024 * 1024) {
                alert(`File ${file.name} is too large. Maximum size is 10MB.`);
                return;
            }
            
            // Validate file type
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
            if (!validTypes.includes(file.type)) {
                alert(`File ${file.name} is not a valid type. Accepted formats: JPG, PNG, GIF, PDF.`);
                return;
            }
            
            // Add file to list
            addFileToList(file);
        });
    }
    
    function addFileToList(file) {
        const fileItem = document.createElement('div');
        fileItem.className = 'flex items-center justify-between bg-off-white p-3 rounded';
        
        const fileInfo = document.createElement('div');
        fileInfo.className = 'flex items-center';
        
        const fileIcon = document.createElement('svg');
        fileIcon.className = 'w-5 h-5 text-burnished-gold mr-2';
        fileIcon.setAttribute('fill', 'none');
        fileIcon.setAttribute('stroke', 'currentColor');
        fileIcon.setAttribute('viewBox', '0 0 24 24');
        fileIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>';
        
        const fileName = document.createElement('span');
        fileName.className = 'text-sm text-gray-700';
        fileName.textContent = file.name;
        
        const fileSize = document.createElement('span');
        fileSize.className = 'text-xs text-gray-500 ml-2';
        fileSize.textContent = formatFileSize(file.size);
        
        fileInfo.appendChild(fileIcon);
        fileInfo.appendChild(fileName);
        fileInfo.appendChild(fileSize);
        
        const removeBtn = document.createElement('button');
        removeBtn.className = 'text-red-500 hover:text-red-700 transition-colors';
        removeBtn.innerHTML = '&times;';
        removeBtn.addEventListener('click', () => {
            fileItem.remove();
        });
        
        fileItem.appendChild(fileInfo);
        fileItem.appendChild(removeBtn);
        fileList.appendChild(fileItem);
    }
    
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    }
    
    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            // Validate required fields
            if (!data.firstName || !data.lastName || !data.email || !data.inquiryType) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you within 24 hours.');
                contactForm.reset();
                fileList.innerHTML = '';
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
});
