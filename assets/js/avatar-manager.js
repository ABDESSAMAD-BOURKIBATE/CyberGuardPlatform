// Personal Avatar Management Functions

// Load saved avatar on page load
document.addEventListener('DOMContentLoaded', function() {
    loadSavedAvatar();
});

// Handle avatar upload
function handleAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
        alert(currentLanguage === 'ar' ? 'يرجى اختيار ملف صورة صحيح' : 'Please select a valid image file');
        return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
        alert(currentLanguage === 'ar' ? 'حجم الصورة يجب أن يكون أقل من 5 ميجابايت' : 'Image size must be less than 5MB');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const imageData = e.target.result;
        
        // Save to localStorage
        localStorage.setItem('personalAvatar', imageData);
        
        // Update preview
        updateAvatarPreview(imageData);
        
        // Update main avatar
        updateMainAvatar(imageData);
        
        // Show success message
        showNotification(
            currentLanguage === 'ar' ? 'تم رفع الصورة بنجاح!' : 'Image uploaded successfully!',
            'success'
        );
    };
    
    reader.readAsDataURL(file);
}

// Update avatar preview
function updateAvatarPreview(imageSrc) {
    const preview = document.getElementById('avatarPreview');
    const previewImage = document.getElementById('previewImage');
    
    previewImage.src = imageSrc;
    preview.style.display = 'block';
}

// Update main avatar display
function updateMainAvatar(imageSrc) {
    const currentAvatar = document.getElementById('currentAvatar');
    if (currentAvatar) {
        currentAvatar.src = imageSrc;
        currentAvatar.style.borderRadius = '50%';
        currentAvatar.style.objectFit = 'cover';
    }
}

// Load saved avatar
function loadSavedAvatar() {
    const savedAvatar = localStorage.getItem('personalAvatar');
    if (savedAvatar) {
        updateAvatarPreview(savedAvatar);
        updateMainAvatar(savedAvatar);
    }
}

// Remove personal avatar
function removePersonalAvatar() {
    // Remove from localStorage
    localStorage.removeItem('personalAvatar');
    
    // Hide preview
    document.getElementById('avatarPreview').style.display = 'none';
    
    // Reset file input
    document.getElementById('avatarUpload').value = '';
    
    // Use default avatar
    useDefaultAvatar();
    
    // Show success message
    showNotification(
        currentLanguage === 'ar' ? 'تم حذف الصورة الشخصية' : 'Personal photo removed',
        'info'
    );
}

// Use default avatar
function useDefaultAvatar() {
    const defaultAvatarSrc = 'assets/images/developer-photo.png';
    const currentAvatar = document.getElementById('currentAvatar');
    
    if (currentAvatar) {
        currentAvatar.src = defaultAvatarSrc;
        currentAvatar.style.borderRadius = '50%';
        currentAvatar.style.objectFit = 'cover';
    }
    
    // Remove personal avatar from storage
    localStorage.removeItem('personalAvatar');
    
    // Hide preview
    document.getElementById('avatarPreview').style.display = 'none';
    
    // Show success message
    showNotification(
        currentLanguage === 'ar' ? 'تم استخدام الصورة الافتراضية' : 'Using default avatar',
        'info'
    );
}

// Enhanced notification function for avatar operations
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `avatar-notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">
                ${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}
            </span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS for notifications
const notificationStyles = `
.avatar-notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(26, 26, 46, 0.95);
    border: 1px solid #00ff88;
    border-radius: 10px;
    padding: 15px 20px;
    color: #00ff88;
    font-weight: bold;
    transform: translateX(300px);
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 10000;
    box-shadow: 0 5px 20px rgba(0,255,136,0.3);
}

.avatar-notification.show {
    transform: translateX(0);
    opacity: 1;
}

.avatar-notification.success {
    border-color: #00ff88;
    color: #00ff88;
}

.avatar-notification.error {
    border-color: #ff4757;
    color: #ff4757;
}

.avatar-notification.info {
    border-color: #3742fa;
    color: #3742fa;
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 10px;
}

.notification-icon {
    font-size: 16px;
}

.notification-message {
    font-size: 14px;
}
`;

// Add styles to page
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);
