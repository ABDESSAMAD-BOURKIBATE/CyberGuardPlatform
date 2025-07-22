// Personal Avatar Management Functions

// Load saved avatar on page load
document.addEventListener('DOMContentLoaded', function() {
    loadSavedAvatar();
    
    // Auto-optimize for mobile if needed
    if (isMobileDevice()) {
        const savedAvatar = localStorage.getItem('personalAvatar');
        if (savedAvatar && !isOptimizedForMobile(savedAvatar)) {
            setTimeout(() => {
                reOptimizeAvatarForMobile();
            }, 1000); // Delay to ensure page is fully loaded
        }
    }
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
        
        // Optimize image for mobile devices
        optimizeImageForMobile(imageData, function(optimizedImage) {
            // Save optimized image to localStorage
            localStorage.setItem('personalAvatar', optimizedImage);
            
            // Update preview
            updateAvatarPreview(optimizedImage);
            
            // Update main avatar
            updateMainAvatar(optimizedImage);
            
            // Show success message
            showNotification(
                currentLanguage === 'ar' ? 'تم رفع الصورة بنجاح وتحسينها للهاتف!' : 'Image uploaded and optimized for mobile!',
                'success'
            );
        });
    };
    
    reader.readAsDataURL(file);
}

// Optimize image for mobile devices
function optimizeImageForMobile(imageSrc, callback) {
    const img = new Image();
    img.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Determine optimal size for mobile
        const maxSize = 300; // Maximum size for mobile optimization
        let { width, height } = img;
        
        // Calculate new dimensions while maintaining aspect ratio
        if (width > height) {
            if (width > maxSize) {
                height = (height * maxSize) / width;
                width = maxSize;
            }
        } else {
            if (height > maxSize) {
                width = (width * maxSize) / height;
                height = maxSize;
            }
        }
        
        // Set canvas size
        canvas.width = width;
        canvas.height = height;
        
        // Enable image smoothing for better quality
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        
        // Draw and optimize image
        ctx.drawImage(img, 0, 0, width, height);
        
        // Convert to optimized format with good quality for mobile
        const optimizedImage = canvas.toDataURL('image/jpeg', 0.85);
        callback(optimizedImage);
    };
    
    img.src = imageSrc;
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
        currentAvatar.style.objectPosition = 'center';
        
        // Add mobile-specific optimizations
        currentAvatar.style.maxWidth = '100%';
        currentAvatar.style.height = 'auto';
        currentAvatar.style.aspectRatio = '1';
        
        // Ensure crisp rendering on mobile
        currentAvatar.style.imageRendering = 'crisp-edges';
        currentAvatar.style.imageRendering = '-webkit-optimize-contrast';
        
        // Add loading optimization
        currentAvatar.loading = 'lazy';
        currentAvatar.decoding = 'async';
    }
    
    // Update all avatar instances on the page
    const avatarElements = document.querySelectorAll('.avatar-image, .developer-avatar img');
    avatarElements.forEach(avatar => {
        if (avatar) {
            avatar.src = imageSrc;
            avatar.style.borderRadius = '50%';
            avatar.style.objectFit = 'cover';
            avatar.style.objectPosition = 'center';
            avatar.style.maxWidth = '100%';
            avatar.style.height = 'auto';
            avatar.style.aspectRatio = '1';
            avatar.loading = 'lazy';
            avatar.decoding = 'async';
        }
    });
}

// Load saved avatar
function loadSavedAvatar() {
    const savedAvatar = localStorage.getItem('personalAvatar');
    if (savedAvatar) {
        // Check if the saved avatar needs optimization for mobile
        if (isMobileDevice() && !isOptimizedForMobile(savedAvatar)) {
            optimizeImageForMobile(savedAvatar, function(optimizedImage) {
                localStorage.setItem('personalAvatar', optimizedImage);
                updateAvatarPreview(optimizedImage);
                updateMainAvatar(optimizedImage);
            });
        } else {
            updateAvatarPreview(savedAvatar);
            updateMainAvatar(savedAvatar);
        }
    }
}

// Check if device is mobile
function isMobileDevice() {
    return window.innerWidth <= 768 || 
           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Check if image is already optimized for mobile
function isOptimizedForMobile(imageData) {
    return imageData.length < 100000; // Less than ~100KB suggests it's optimized
}

// Force re-optimize current avatar for mobile
function reOptimizeAvatarForMobile() {
    const savedAvatar = localStorage.getItem('personalAvatar');
    if (savedAvatar) {
        optimizeImageForMobile(savedAvatar, function(optimizedImage) {
            localStorage.setItem('personalAvatar', optimizedImage);
            updateAvatarPreview(optimizedImage);
            updateMainAvatar(optimizedImage);
            
            showNotification(
                currentLanguage === 'ar' ? 'تم تحسين الصورة للهاتف المحمول!' : 'Avatar optimized for mobile!',
                'success'
            );
        });
    } else {
        showNotification(
            currentLanguage === 'ar' ? 'لا توجد صورة شخصية لتحسينها' : 'No personal avatar to optimize',
            'info'
        );
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
        currentAvatar.style.objectPosition = 'center';
        
        // Add mobile-specific optimizations
        currentAvatar.style.maxWidth = '100%';
        currentAvatar.style.height = 'auto';
        currentAvatar.style.aspectRatio = '1';
        currentAvatar.loading = 'lazy';
        currentAvatar.decoding = 'async';
    }
    
    // Update all avatar instances on the page with default image
    const avatarElements = document.querySelectorAll('.avatar-image, .developer-avatar img');
    avatarElements.forEach(avatar => {
        if (avatar) {
            avatar.src = defaultAvatarSrc;
            avatar.style.borderRadius = '50%';
            avatar.style.objectFit = 'cover';
            avatar.style.objectPosition = 'center';
            avatar.style.maxWidth = '100%';
            avatar.style.height = 'auto';
            avatar.style.aspectRatio = '1';
            avatar.loading = 'lazy';
            avatar.decoding = 'async';
        }
    });
    
    // Remove personal avatar from storage
    localStorage.removeItem('personalAvatar');
    
    // Hide preview
    const preview = document.getElementById('avatarPreview');
    if (preview) preview.style.display = 'none';
    
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

/* Mobile Avatar Optimizations */
@media (max-width: 768px) {
    .avatar-image, .developer-avatar img, #currentAvatar {
        width: 80px !important;
        height: 80px !important;
        min-width: 80px;
        min-height: 80px;
        border-radius: 50% !important;
        object-fit: cover !important;
        object-position: center !important;
        image-rendering: crisp-edges;
        image-rendering: -webkit-optimize-contrast;
        background-size: cover;
        background-position: center;
    }
    
    .professional-avatar {
        width: 80px !important;
        height: 80px !important;
    }
    
    .developer-profile {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    .developer-avatar {
        margin-bottom: 20px;
    }
}

@media (max-width: 480px) {
    .avatar-image, .developer-avatar img, #currentAvatar {
        width: 60px !important;
        height: 60px !important;
        min-width: 60px;
        min-height: 60px;
    }
    
    .professional-avatar {
        width: 60px !important;
        height: 60px !important;
    }
}
`;

// Add styles to page
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);
