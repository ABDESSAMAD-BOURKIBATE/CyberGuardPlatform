// Language data for results
const resultMessages = {
    ar: {
        passwordEmpty: 'الرجاء إدخال كلمة مرور.',
        passwordStrength: {
            1: 'ضعيف جدًا: كلمة المرور قصيرة جدًا.',
            2: 'ضعيف: حاول إضافة المزيد من الأحرف.',
            3: 'متوسط: حاول تضمين أرقام ورموز خاصة.',
            4: 'قوي: كلمة مرور جيدة، ولكن يمكن تحسينها.',
            5: 'قوي جدًا: كلمة مرور ممتازة!'
        },
        entropyEmpty: 'كلمة المرور فارغة أو غير صالحة.',
        entropyResult: (entropy) => `الإنتروبيا: ${entropy.toFixed(2)} بت\n(كلمة مرور قوية عادةً > 80 بت)`,
        passwordLengthInvalid: 'الرجاء إدخال طول بين 8 و64.',
        leakEmpty: 'الرجاء إدخال كلمة مرور.',
        leakFound: 'تحذير: تم العثور على كلمة المرور في قوائم التسريب الشائعة!',
        leakNotFound: 'لم يتم العثور على تسريبات لكلمة المرور (محاكاة).',
        hashEmpty: 'الرجاء إدخال نص للتشفير.',
        hashInvalidType: 'نوع هاش غير صالح.',
        hashResult: (type, hash) => `الهاش (${type.toUpperCase()}): ${hash}`,
        fileEmpty: 'الرجاء اختيار ملف.',
        fileTooLarge: 'الملف كبير جدًا (الحد الأقصى 10 ميجابايت).',
        fileReadError: 'خطأ أثناء قراءة الملف.',
        fileHashResult: (type, hash) => `هاش الملف (${type.toUpperCase()}): ${hash}`,
        base64Empty: 'الرجاء إدخال نص.',
        base64InvalidEncode: 'خطأ: إدخال غير صالح للتشفير.',
        base64InvalidDecode: 'خطأ: إدخال غير صالح لفك التشفير.',
        ipEmpty: 'الرجاء إدخال عنوان IP.',
        ipResult: (ip) => `تحديد موقع ${ip}: \nالمدينة: عينة\nالبلد: عينة\n(هذه استجابة وهمية)`,
        myIPResult: 'عنوان IP الخاص بك: 192.168.1.100 (محاكاة)',
        portScanEmpty: 'الرجاء إدخال عنوان IP ونطاق المنافذ.',
        portScanResult: (ip, range) => `فحص ${ip} لنطاق ${range}:\nالمنافذ المفتوحة: 80, 443 (محاكاة)`,
        urlEmpty: 'الرجاء إدخال رابط.',
        urlSafe: (url) => `فحص ${url}:\nالحالة: آمن (محاكاة)`,
        urlSuspicious: (url) => `تحذير: الرابط ${url} يبدو مشبوهًا (محاكاة)`,
        cryptoEmpty: 'الرجاء إدخال النص ومفتاح التشفير.',
        cryptoInvalidType: 'نوع تشفير غير صالح.',
        cryptoInvalidDecrypt: 'خطأ: مفتاح أو نص غير صالح.',
        cryptoEncryptResult: (type, encrypted) => `النص المشفر (${type.toUpperCase()}): ${encrypted}`,
        cryptoDecryptResult: (decrypted) => `النص المفكوك: ${decrypted}`,
        darkWebEmpty: 'الرجاء إدخال بريد إلكتروني أو اسم مستخدم.',
        darkWebResult: (input) => `فحص الويب المظلم لـ ${input}:\nلم يتم العثور على بيانات في الويب المظلم (محاكاة)`,
        trafficResult: (packets, speed) => `محاكاة حركة الشبكة:\nعدد الحزم: ${packets}\nسرعة النقل: ${speed} KB/s`,
        sqlEmpty: 'الرجاء إدخال استعلام SQL.',
        sqlVulnerable: (query) => `تحذير: الاستعلام "${query}" يحتوي على نمط حقن SQL محتمل!`,
        sqlSafe: (query) => `الاستعلام "${query}" يبدو آمنًا (محاكاة).`,
        xssEmpty: 'الرجاء إدخال سكربت أو HTML.',
        xssVulnerable: (input) => `تحذير: الإدخال "${input}" يحتوي على نمط XSS محتمل!`,
        xssSafe: (input) => `الإدخال "${input}" يبدو آمنًا (محاكاة).`,
        latencyEmpty: 'الرجاء إدخال URL أو عنوان IP.',
        latencyResult: (target, latency) => `اختبار زمن التأخير لـ ${target}:\nزمن الاستجابة: ${latency} مللي ثانية (محاكاة)`,
        complexityEmpty: 'الرجاء إدخال كلمة مرور.',
        complexityResult: (score, details) => `تعقيد كلمة المرور: ${score}%\n${details}`,
        copySuccess: 'تم نسخ النتيجة إلى الحافظة!',
        copyEmpty: 'لا توجد نتيجة لنسخها.',
        savedData: 'تم حفظ البيانات بنجاح!',
        saveError: 'خطأ أثناء حفظ البيانات.'
    },
    en: {
        passwordEmpty: 'Please enter a password.',
        passwordStrength: {
            1: 'Very Weak: Password is too short.',
            2: 'Weak: Try adding more characters.',
            3: 'Medium: Try including numbers and special characters.',
            4: 'Strong: Good password, but can be improved.',
            5: 'Very Strong: Excellent password!'
        },
        entropyEmpty: 'Password is empty or invalid.',
        entropyResult: (entropy) => `Entropy: ${entropy.toFixed(2)} bits\n(Strong password usually > 80 bits)`,
        passwordLengthInvalid: 'Please enter a length between 8 and 64.',
        leakEmpty: 'Please enter a password.',
        leakFound: 'Warning: Password found in common leak lists!',
        leakNotFound: 'No leaks found for the password (simulation).',
        hashEmpty: 'Please enter text to hash.',
        hashInvalidType: 'Invalid hash type.',
        hashResult: (type, hash) => `Hash (${type.toUpperCase()}): ${hash}`,
        fileEmpty: 'Please select a file.',
        fileTooLarge: 'File is too large (max 10 MB).',
        fileReadError: 'Error reading the file.',
        fileHashResult: (type, hash) => `File Hash (${type.toUpperCase()}): ${hash}`,
        base64Empty: 'Please enter text.',
        base64InvalidEncode: 'Error: Invalid input for encoding.',
        base64InvalidDecode: 'Error: Invalid input for decoding.',
        ipEmpty: 'Please enter an IP address.',
        ipResult: (ip) => `Geolocation for ${ip}: \nCity: Sample\nCountry: Sample\n(This is a mock response)`,
        myIPResult: 'Your IP address: 192.168.1.100 (simulation)',
        portScanEmpty: 'Please enter an IP address and port range.',
        portScanResult: (ip, range) => `Scanning ${ip} for range ${range}:\nOpen ports: 80, 443 (simulation)`,
        urlEmpty: 'Please enter a URL.',
        urlSafe: (url) => `Checking ${url}:\nStatus: Safe (simulation)`,
        urlSuspicious: (url) => `Warning: The URL ${url} appears suspicious (simulation)`,
        cryptoEmpty: 'Please enter text and encryption key.',
        cryptoInvalidType: 'Invalid encryption type.',
        cryptoInvalidDecrypt: 'Error: Invalid key or text.',
        cryptoEncryptResult: (type, encrypted) => `Encrypted Text (${type.toUpperCase()}): ${encrypted}`,
        cryptoDecryptResult: (decrypted) => `Decrypted Text: ${decrypted}`,
        darkWebEmpty: 'Please enter an email or username.',
        darkWebResult: (input) => `Dark Web scan for ${input}:\nNo data found on the dark web (simulation)`,
        trafficResult: (packets, speed) => `Network Traffic Simulation:\nPackets: ${packets}\nTransfer Speed: ${speed} KB/s`,
        sqlEmpty: 'Please enter an SQL query.',
        sqlVulnerable: (query) => `Warning: The query "${query}" contains a potential SQL injection pattern!`,
        sqlSafe: (query) => `The query "${query}" appears safe (simulation).`,
        xssEmpty: 'Please enter a script or HTML.',
        xssVulnerable: (input) => `Warning: The input "${input}" contains a potential XSS pattern!`,
        xssSafe: (input) => `The input "${input}" appears safe (simulation).`,
        latencyEmpty: 'Please enter a URL or IP address.',
        latencyResult: (target, latency) => `Latency test for ${target}:\nResponse Time: ${latency} ms (simulation)`,
        complexityEmpty: 'Please enter a password.',
        complexityResult: (score, details) => `Password Complexity: ${score}%\n${details}`,
        copySuccess: 'Result copied to clipboard!',
        copyEmpty: 'No result to copy.',
        savedData: 'Data saved successfully!',
        saveError: 'Error saving data.'
    }
};

// Current language
let currentLang = 'ar';

// Network Monitor state
let activeScans = 0;
let networkTraffic = 0;
let monitorInterval = null;

// Professional Custom Cursor - Desktop Only
const cursor = document.getElementById('customCursor');

// Better desktop detection
const isDesktop = () => {
    return window.innerWidth > 768 && 
           !('ontouchstart' in window) && 
           !navigator.maxTouchPoints && 
           window.matchMedia('(pointer: fine)').matches;
};

// Initialize cursor for desktop only
if (cursor && isDesktop()) {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    // Force show cursor with proper styling
    cursor.style.display = 'block';
    cursor.style.visibility = 'visible';
    cursor.style.opacity = '1';
    
    // Add active class for immediate styling
    cursor.classList.add('active');
    
    console.log('🖱️ Custom cursor element found and activated!');
    
    // Smooth cursor following
    const animateCursor = () => {
        const delay = 0.15;
        cursorX += (mouseX - cursorX) * delay;
        cursorY += (mouseY - cursorY) * delay;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    };
    
    document.addEventListener('mousemove', e => {
        mouseX = e.clientX - 16; // Center the cursor
        mouseY = e.clientY - 16;
    });
    
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
    });
    
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
    });
    
    // Add hover effects for interactive elements
    const updateInteractiveElements = () => {
        const interactiveElements = document.querySelectorAll('.btn, .lang-btn, .tool-card, .input-field, .textarea-field, select.input-field, .explain-btn, .copy-btn, .toggle-monitor, .close-modal, .close-explanation');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });
    };
    
    // Initial setup
    updateInteractiveElements();
    
    // Update when DOM changes
    const observer = new MutationObserver(updateInteractiveElements);
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Start cursor animation
    animateCursor();
    
    console.log('🖱️ Professional custom cursor activated for desktop!');
} else {
    console.log('📱 Mobile device detected - using default cursor');
}

// Enhanced Mouse Movement Animation for Tool Cards - Desktop Only
if (isDesktop()) {
    const setupCardAnimations = () => {
        document.querySelectorAll('.tool-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
                const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
                
                card.style.transform = `translateY(-8px) scale(1.02) rotateX(${y * 8}deg) rotateY(${x * 8}deg)`;
                card.style.boxShadow = `
                    0 20px 50px rgba(0, 255, 136, 0.4),
                    inset 0 0 30px rgba(0, 255, 136, 0.1),
                    ${x * 20}px ${y * 20}px 40px rgba(0, 255, 136, 0.2)
                `;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1) rotateX(0) rotateY(0)';
                card.style.boxShadow = `
                    0 8px 32px rgba(0, 255, 136, 0.2),
                    inset 0 0 20px rgba(0, 255, 136, 0.05)
                `;
            });
        });
    };
    
    // Setup after page loads
    document.addEventListener('DOMContentLoaded', setupCardAnimations);
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupCardAnimations);
    } else {
        setupCardAnimations();
    }
}

// Typing Effect with Sound - محسن لتجنب التقطيع خاصة للنص العربي
function typeText(element, text, speed = 30, callback) {
    if (!element || !text) {
        if (callback) callback();
        return;
    }
    
    const typingSound = document.getElementById('typingSound');
    element.textContent = '';
    element.classList.add('typing-effect');
    
    // للنص العربي، نستخدم Array.from للتعامل مع الأحرف المركبة بشكل صحيح
    const isArabic = /[\u0600-\u06FF]/.test(text);
    let chars;
    
    if (isArabic) {
        // للنص العربي: نقسم على أساس الكلمات بدلاً من الأحرف لتجنب التقطيع
        chars = text.split(' ');
        let i = 0;
        let currentText = '';
        
        function typeWord() {
            if (i < chars.length) {
                if (i > 0) currentText += ' ';
                currentText += chars[i];
                element.textContent = currentText;
                
                if (typingSound && i % 2 === 0) {
                    typingSound.currentTime = 0;
                    typingSound.play().catch(e => {/* ignore audio errors */});
                }
                i++;
                setTimeout(typeWord, speed * 3); // أبطأ قليلاً للنص العربي
            } else {
                element.classList.remove('typing-effect');
                if (callback) callback();
            }
        }
        typeWord();
    } else {
        // للنص الإنجليزي: نستخدم الطريقة العادية
        chars = Array.from(text);
        let i = 0;
        
        function type() {
            if (i < chars.length) {
                element.textContent += chars[i];
                if (typingSound && i % 3 === 0) {
                    typingSound.currentTime = 0;
                    typingSound.play().catch(e => {/* ignore audio errors */});
                }
                i++;
                setTimeout(type, speed);
            } else {
                element.classList.remove('typing-effect');
                if (callback) callback();
            }
        }
        type();
    }
}

// Initialize Typing Effect for Header - محسن
document.addEventListener('DOMContentLoaded', () => {
    try {
        const headerTitle = document.querySelector('.header h1 .typing-effect');
        const headerSubtitle = document.querySelector('.header p.typing-effect');
        
        if (headerTitle && headerSubtitle) {
            const titleText = headerTitle.getAttribute('data-ar');
            const subtitleText = headerSubtitle.getAttribute('data-ar');
            
            if (titleText) {
                typeText(headerTitle, titleText, 25, () => {
                    if (subtitleText) {
                        typeText(headerSubtitle, subtitleText, 25);
                    }
                });
            }
        }
        
        startNetworkMonitor();
        initializeNetworkMonitor();
        loadStoredData();
        initializeTooltips();
        
        // Initialize modal close events
        initializeModalEvents();
    } catch (e) {
        console.error('Error in DOMContentLoaded:', e);
    }
});

// Initialize modal events
function initializeModalEvents() {
    try {
        // Close modals when clicking outside
        const platformModal = document.getElementById('platformInfoModal');
        const developerModal = document.getElementById('developerInfoModal');
        
        if (platformModal) {
            platformModal.addEventListener('click', (e) => {
                if (e.target === platformModal) {
                    closePlatformInfo();
                }
            });
        }
        
        if (developerModal) {
            developerModal.addEventListener('click', (e) => {
                if (e.target === developerModal) {
                    closeDeveloperInfo();
                }
            });
        }
        
        // Close modals with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closePlatformInfo();
                closeDeveloperInfo();
            }
        });
    } catch (e) {
        console.error('Error initializing modal events:', e);
    }
}

// Initialize tooltips and interactive elements
function initializeTooltips() {
    try {
        // Add hover effects for explain buttons
        document.querySelectorAll('.explain-btn').forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.6)';
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '';
            });
        });
    } catch (e) {
        console.error('Error initializing tooltips:', e);
    }
}

// Save input data to localStorage with Base64 encoding
function saveInputData(inputId, value) {
    try {
        if (value) {
            const encoded = btoa(value);
            localStorage.setItem(inputId, encoded);
            console.log(resultMessages[currentLang].savedData);
        }
    } catch (e) {
        console.error('Error saving data:', e);
        alert(resultMessages[currentLang].saveError);
    }
}

// Load stored data from localStorage
function loadStoredData() {
    try {
        const inputs = [
            'password', 'entropyPassword', 'leakPassword', 'hashInput', 'base64Input',
            'ipAddress', 'targetIP', 'portRange', 'urlInput', 'cryptoInput',
            'cryptoKey', 'darkWebInput', 'sqlInput', 'xssInput', 'latencyTarget',
            'complexityPassword'
        ];
        inputs.forEach(id => {
            const encoded = localStorage.getItem(id);
            if (encoded) {
                try {
                    const decoded = atob(encoded);
                    document.getElementById(id).value = decoded;
                } catch (e) {
                    console.error(`Error decoding data for ${id}:`, e);
                }
            }
        });
    } catch (e) {
        console.error('Error loading stored data:', e);
    }
}

// Language Switching with Enhanced Header Update
function switchLanguage(lang) {
    try {
        currentLang = lang;
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`.lang-btn[onclick="switchLanguage('${lang}')"]`);
        if (activeBtn) activeBtn.classList.add('active');

        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Update header with smooth typing effect
        const headerTitle = document.querySelector('.header h1 .typing-effect');
        const headerSubtitle = document.querySelector('.header p.typing-effect');
        
        if (headerTitle) {
            const titleText = headerTitle.getAttribute(`data-${lang}`);
            if (titleText) {
                // إضافة class خاص للنص العربي
                if (lang === 'ar') {
                    headerTitle.classList.add('arabic-text');
                } else {
                    headerTitle.classList.remove('arabic-text');
                }
                typeText(headerTitle, titleText, lang === 'ar' ? 40 : 25);
            }
        }
        
        if (headerSubtitle) {
            const subtitleText = headerSubtitle.getAttribute(`data-${lang}`);
            if (subtitleText) {
                setTimeout(() => {
                    if (lang === 'ar') {
                        headerSubtitle.classList.add('arabic-text');
                    } else {
                        headerSubtitle.classList.remove('arabic-text');
                    }
                    typeText(headerSubtitle, subtitleText, lang === 'ar' ? 40 : 25);
                }, 800);
            }
        }

        // Update other elements instantly
        document.querySelectorAll('[data-en][data-ar]:not(.typing-effect)').forEach(elem => {
            const newText = elem.getAttribute(`data-${lang}`);
            if (newText) {
                elem.textContent = newText;
                // For elements with HTML content
                if (elem.innerHTML !== elem.textContent) {
                    elem.innerHTML = newText;
                }
            }
        });

        // Update dashboard elements
        updateDashboardLanguage(lang);

        // Update network monitor text
        const monitor = document.getElementById('networkMonitor');
        const monitorText = monitor?.querySelector('.monitor-text');
        if (monitorText) {
            if (monitor.classList.contains('compact')) {
                monitorText.textContent = lang === 'ar' ? 'المراقب' : 'Monitor';
            } else {
                monitorText.textContent = lang === 'ar' ? 'إخفاء المراقب' : 'Hide Monitor';
            }
        }

        // Update placeholders
        document.querySelectorAll('[data-placeholder-en][data-placeholder-ar]').forEach(elem => {
            elem.placeholder = elem.getAttribute(`data-placeholder-${lang}`);
        });

        // Update modal content language
        updateModalLanguage();

        // Update dashboard language
        updateDashboardLanguage(lang);

        // Update timer display with current language
        if (window.advancedSecurityMonitor) {
            advancedSecurityMonitor.updateScanTimer();
        }

        // Refresh results to match the new language
        refreshAllResults();
        
        // Show success notification
        const successMsg = lang === 'ar' ? 'تم تغيير اللغة بنجاح' : 'Language changed successfully';
        if (typeof showProfessionalNotification === 'function') {
            showProfessionalNotification(successMsg, 'success');
        }
        
        console.log(`✅ Language switched to: ${lang}`);
    } catch (e) {
        console.error('Error switching language:', e);
    }
}

// Dashboard language update function
function updateDashboardLanguage(lang) {
    // Translation mappings for dashboard elements
    const translations = {
        ar: {
            // Dashboard stats
            'الفحوصات النشطة': 'الفحوصات النشطة',
            'التنبيهات': 'التنبيهات',
            'التهديدات المحجوبة': 'التهديدات المحجوبة',
            'الجلسات الآمنة': 'الجلسات الآمنة',
            'الأحداث اليوم': 'الأحداث اليوم',
            'صحة النظام': 'صحة النظام',
            'آخر تحديث': 'آخر تحديث',
            'منذ ثوان': 'منذ ثوان',
            'جيد': 'جيد',
            'ممتاز': 'ممتاز',
            // Control buttons
            'بدء المراقبة': 'بدء المراقبة',
            'إيقاف المراقبة': 'إيقاف المراقبة',
            'فحص سريع': 'فحص سريع',
            'فحص الآن': 'فحص الآن',
            'مسح': 'مسح',
            'الإعدادات المتقدمة': 'الإعدادات المتقدمة',
            'مسح السجل': 'مسح السجل',
            // Timer display
            'الفحص التالي خلال:': 'الفحص التالي خلال:',
            'المراقبة المباشرة': 'المراقبة المباشرة',
            'غير نشط': 'غير نشط',
            'متوقف': 'متوقف',
            'نشط': 'نشط',
            // Activity monitor
            'مراقب النشاط': 'مراقب النشاط',
            'أنشطة الأمان': 'أنشطة الأمان',
            'لا توجد أنشطة': 'لا توجد أنشطة',
            'جميع الأحداث': 'جميع الأحداث',
            'التهديدات': 'التهديدات',
            'الفحوصات': 'الفحوصات',
            'النظام': 'النظام',
            'البحث في الأنشطة...': 'البحث في الأنشطة...',
            // Settings categories
            'المسح': 'المسح',
            'إعدادات الفحص والمراقبة': 'إعدادات الفحص والمراقبة',
            'التنبيهات': 'التنبيهات',
            'الإشعارات والتحذيرات': 'الإشعارات والتحذيرات',
            'العرض': 'العرض',
            'واجهة المستخدم والعرض': 'واجهة المستخدم والعرض',
            'الأمان': 'الأمان',
            'حماية متقدمة وكشف التهديدات': 'حماية متقدمة وكشف التهديدات',
            'الأداء': 'الأداء',
            'تحسين الموارد والسرعة': 'تحسين الموارد والسرعة',
            'متقدم': 'متقدم',
            'إعدادات متقدمة للخبراء': 'إعدادات متقدمة للخبراء',
            // Scan settings
            'إعدادات المسح والمراقبة': 'إعدادات المسح والمراقبة',
            'تحكم في أنظمة الفحص والكشف التلقائي': 'تحكم في أنظمة الفحص والكشف التلقائي',
            'فترة الفحص': 'فترة الفحص',
            'تحديد تكرار عمليات الفحص التلقائي': 'تحديد تكرار عمليات الفحص التلقائي',
            'كل 30 ثانية': 'كل 30 ثانية',
            '30 ثانية': '30 ثانية',
            'عمق الفحص': 'عمق الفحص',
            'مستوى تفصيل عمليات المراقبة': 'مستوى تفصيل عمليات المراقبة',
            'فحص قياسي': 'فحص قياسي',
            'المسح التلقائي': 'المسح التلقائي',
            'تفعيل المراقبة المستمرة': 'تفعيل المراقبة المستمرة',
            'الحماية الفورية': 'الحماية الفورية',
            'كشف التهديدات في الوقت الفعلي': 'كشف التهديدات في الوقت الفعلي',
            'المسح عند البدء': 'المسح عند البدء',
            'تشغيل فحص أمني عند تشغيل النظام': 'تشغيل فحص أمني عند تشغيل النظام',
            'المسح المجدول': 'المسح المجدول',
            'جدولة عمليات فحص دورية': 'جدولة عمليات فحص دورية',
            'Complete control over monitoring and security system': 'تحكم كامل في نظام المراقبة والأمان',
            'الآن': 'الآن',
            // Event types
            'تنبيه أمني عالي': 'تنبيه أمني عالي',
            'محاولة اختراق محجوبة': 'محاولة اختراق محجوبة',
            'رابط مشبوه محجوب': 'رابط مشبوه محجوب',
            'فحص الملفات المؤقتة': 'فحص الملفات المؤقتة',
            'فحص سريع مكتمل': 'فحص سريع مكتمل',
            'تحديث تعريفات الأمان': 'تحديث تعريفات الأمان',
            'تحديث قواعد بيانات الأمان': 'تحديث قواعد بيانات الأمان',
            'فحص النظام الأولي مكتمل': 'فحص النظام الأولي مكتمل',
            // Event statuses
            'تهديد': 'تهديد',
            'محجوب': 'محجوب',
            'فحص': 'فحص',
            'نظيف': 'نظيف',
            'مكتمل': 'مكتمل',
            'محدث': 'محدث',
            'منذ 3 دقائق': 'منذ 3 دقائق',
        },
        en: {
            // Dashboard stats  
            'الفحوصات النشطة': 'Active Scans',
            'التنبيهات': 'Alerts',
            'التهديدات المحجوبة': 'Blocked Threats',
            'الجلسات الآمنة': 'Secure Sessions',
            'الأحداث اليوم': 'Events Today',
            'صحة النظام': 'System Health',
            'آخر تحديث': 'Last Update',
            'منذ ثوان': 'seconds ago',
            'جيد': 'Good',
            'ممتاز': 'Excellent',
            // Control buttons
            'بدء المراقبة': 'Start Monitoring',
            'إيقاف المراقبة': 'Stop Monitoring',
            'فحص سريع': 'Quick Scan',
            'فحص الآن': 'Scan Now',
            'مسح': 'Clear',
            'الإعدادات المتقدمة': 'Advanced Settings',
            'مسح السجل': 'Clear Log',
            // Timer display
            'الفحص التالي خلال:': 'Next scan in:',
            'المراقبة المباشرة': 'LIVE MONITORING',
            'غير نشط': 'Inactive',
            'متوقف': 'Stopped',
            'نشط': 'Active',
            // Activity monitor
            'مراقب النشاط': 'Activity Monitor',
            'أنشطة الأمان': 'Security Activities',
            'لا توجد أنشطة': 'No Activities',
            'جميع الأحداث': 'All Events',
            'التهديدات': 'Threats',
            'الفحوصات': 'Scans',
            'النظام': 'System',
            'البحث في الأنشطة...': 'Search activities...',
            // Settings categories
            'المسح': 'Scanning',
            'إعدادات الفحص والمراقبة': 'Scan and Monitoring Settings',
            'التنبيهات': 'Alerts',
            'الإشعارات والتحذيرات': 'Notifications and Warnings',
            'العرض': 'Display',
            'واجهة المستخدم والعرض': 'User Interface and Display',
            'الأمان': 'Security',
            'حماية متقدمة وكشف التهديدات': 'Advanced Protection and Threat Detection',
            'الأداء': 'Performance',
            'تحسين الموارد والسرعة': 'Resource Optimization and Speed',
            'متقدم': 'Advanced',
            'إعدادات متقدمة للخبراء': 'Advanced Settings for Experts',
            // Scan settings
            'إعدادات المسح والمراقبة': 'Scan and Monitoring Settings',
            'تحكم في أنظمة الفحص والكشف التلقائي': 'Control scanning systems and automatic detection',
            'فترة الفحص': 'Scan Interval',
            'تحديد تكرار عمليات الفحص التلقائي': 'Set frequency of automatic scans',
            'كل 30 ثانية': 'Every 30 seconds',
            '30 ثانية': '30 seconds',
            'عمق الفحص': 'Scan Depth',
            'مستوى تفصيل عمليات المراقبة': 'Level of monitoring detail',
            'فحص قياسي': 'Standard Scan',
            'المسح التلقائي': 'Automatic Scanning',
            'تفعيل المراقبة المستمرة': 'Enable continuous monitoring',
            'الحماية الفورية': 'Real-time Protection',
            'كشف التهديدات في الوقت الفعلي': 'Real-time threat detection',
            'المسح عند البدء': 'Scan on Startup',
            'تشغيل فحص أمني عند تشغيل النظام': 'Run security scan on system startup',
            'المسح المجدول': 'Scheduled Scanning',
            'جدولة عمليات فحص دورية': 'Schedule periodic scan operations',
            'Complete control over monitoring and security system': 'Complete control over monitoring and security system',
            'الآن': 'Now',
            // Event types
            'تنبيه أمني عالي': 'High Security Alert',
            'محاولة اختراق محجوبة': 'Blocked Intrusion Attempt',
            'رابط مشبوه محجوب': 'Suspicious Link Blocked',
            'فحص الملفات المؤقتة': 'Temporary Files Scan',
            'فحص سريع مكتمل': 'Quick Scan Completed',
            'تحديث تعريفات الأمان': 'Security Definitions Update',
            'تحديث قواعد بيانات الأمان': 'Security Database Update',
            'فحص النظام الأولي مكتمل': 'Initial System Scan Completed',
            // Event statuses
            'تهديد': 'Threat',
            'محجوب': 'Blocked',
            'فحص': 'Scan',
            'نظيف': 'Clean',
            'مكتمل': 'Completed',
            'محدث': 'Updated',
            'منذ 3 دقائق': '3 minutes ago',
            'أنشطة الأمان': 'Security Activities',
            'لا توجد أنشطة': 'No activities',
        }
    };

    const langTexts = translations[lang];
    
    // Update dashboard stats labels
    document.querySelectorAll('.dashboard-stats .stat-item h3').forEach(stat => {
        const arabicText = stat.textContent.trim();
        if (langTexts[arabicText]) {
            stat.textContent = langTexts[arabicText];
        }
    });

    // Update control buttons
    document.querySelectorAll('.dashboard-controls button').forEach(btn => {
        const arabicText = btn.textContent.trim();
        if (langTexts[arabicText]) {
            btn.textContent = langTexts[arabicText];
        }
    });

    // Update activity monitor header
    const activityHeader = document.querySelector('.activity-monitor h3');
    if (activityHeader) {
        const arabicText = activityHeader.textContent.trim();
        if (langTexts[arabicText]) {
            activityHeader.textContent = langTexts[arabicText];
        }
    }

    // Update security events header
    const eventsHeader = document.querySelector('.security-events h3');
    if (eventsHeader) {
        const arabicText = eventsHeader.textContent.trim();
        if (langTexts[arabicText]) {
            eventsHeader.textContent = langTexts[arabicText];
        }
    }

    // Update timer label (will be updated by timer function)
    const timerLabel = document.querySelector('.timer-display .timer-label');
    if (timerLabel) {
        timerLabel.textContent = langTexts['الفحص التالي خلال:'];
    }
    
    // Enhanced translation update for all data attributes
    document.querySelectorAll('[data-ar], [data-en]').forEach(element => {
        const langKey = lang === 'ar' ? 'data-ar' : 'data-en';
        const targetText = element.getAttribute(langKey);
        if (targetText) {
            element.textContent = targetText;
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-placeholder-ar], [data-placeholder-en]').forEach(element => {
        const langKey = lang === 'ar' ? 'data-placeholder-ar' : 'data-placeholder-en';
        const targetPlaceholder = element.getAttribute(langKey);
        if (targetPlaceholder) {
            element.placeholder = targetPlaceholder;
        }
    });
    
    // Update activity events with translation
    document.querySelectorAll('.activity-event .event-title').forEach(title => {
        const arabicText = title.textContent.trim();
        if (langTexts[arabicText]) {
            title.textContent = langTexts[arabicText];
        }
    });
    
    // Update event categories and statuses
    document.querySelectorAll('.event-category, .event-result').forEach(element => {
        const arabicText = element.textContent.trim();
        if (langTexts[arabicText]) {
            element.textContent = langTexts[arabicText];
        }
    });
    
    // Update modal content
    document.querySelectorAll('.modal-content, .settings-content').forEach(modal => {
        modal.querySelectorAll('h3, h4, h5, label, span, p').forEach(element => {
            if (!element.hasAttribute('data-ar') && !element.hasAttribute('data-en')) {
                const arabicText = element.textContent.trim();
                if (langTexts[arabicText] && arabicText.length > 2) {
                    element.textContent = langTexts[arabicText];
                }
            }
        });
    });
}

// Refresh all tool results in the current language
function refreshAllResults() {
    const tools = [
        { id: 'passwordResult', func: analyzePassword },
        { id: 'entropyResult', func: calculateEntropy },
        { id: 'generatedPasswordResult', func: generateSecurePassword },
        { id: 'leakResult', func: checkPasswordLeak },
        { id: 'hashResult', func: generateHash },
        { id: 'fileHashResult', func: checkFileHash },
        { id: 'base64Result', func: () => {
            const lastAction = document.getElementById('base64Result').dataset.lastAction;
            if (lastAction === 'encode') encodeBase64();
            else if (lastAction === 'decode') decodeBase64();
        }},
        { id: 'ipResult', func: geolocateIP },
        { id: 'portScanResult', func: simulatePortScan },
        { id: 'urlResult', func: checkURLSecurity },
        { id: 'cryptoResult', func: () => {
            const lastAction = document.getElementById('cryptoResult').dataset.lastAction;
            if (lastAction === 'encrypt') encryptText();
            else if (lastAction === 'decrypt') decryptText();
        }},
        { id: 'darkWebResult', func: scanDarkWeb },
        { id: 'trafficResult', func: simulateNetworkTraffic },
        { id: 'sqlResult', func: testSQLInjection },
        { id: 'xssResult', func: scanXSS },
        { id: 'latencyResult', func: testNetworkLatency },
        { id: 'complexityResult', func: visualizeComplexity }
    ];

    tools.forEach(tool => {
        const resultBox = document.getElementById(tool.id);
        if (resultBox.textContent && resultBox.textContent !== resultMessages[currentLang].copyEmpty) {
            tool.func();
        }
    });
}

// Copy Result to Clipboard
function copyResult(resultId) {
    try {
        const resultBox = document.getElementById(resultId);
        const text = resultBox.textContent;
        if (!text || text === resultMessages[currentLang].copyEmpty) {
            typeText(resultBox, resultMessages[currentLang].copyEmpty, 50);
            return;
        }
        navigator.clipboard.writeText(text).then(() => {
            typeText(resultBox, resultMessages[currentLang].copySuccess, 50, () => {
                setTimeout(() => {
                    const tool = tools.find(t => t.id === resultId);
                    if (tool) tool.func();
                }, 1000);
            });
        }).catch(e => {
            console.error('Error copying to clipboard:', e);
            typeText(resultBox, 'Error copying to clipboard.', 50);
        });
    } catch (e) {
        console.error('Error in copyResult:', e);
        typeText(document.getElementById(resultId), 'Error copying to clipboard.', 50);
    }
}

// Tool Explanations Data
const toolExplanations = {
    ar: {
        passwordStrength: {
            title: "محلل قوة كلمة المرور",
            icon: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",
            content: `
                <div class="explanation-section">
                    <h4>ما هي هذه الأداة؟</h4>
                    <p>محلل قوة كلمة المرور هو أداة متقدمة تقوم بتحليل شامل لكلمات المرور لتحديد مستوى قوتها وأمانها ضد الهجمات السيبرانية.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>كيف تعمل؟</h4>
                    <ul>
                        <li>تحليل طول كلمة المرور والتعقيد</li>
                        <li>فحص استخدام الأحرف الكبيرة والصغيرة</li>
                        <li>التحقق من وجود الأرقام والرموز الخاصة</li>
                        <li>تقييم المقاومة ضد هجمات القاموس</li>
                        <li>حساب الوقت المطلوب لكسر كلمة المرور</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>معايير التقييم</h4>
                    <ul>
                        <li><strong>ضعيف جداً:</strong> أقل من 8 أحرف أو أنماط بسيطة</li>
                        <li><strong>ضعيف:</strong> 8-10 أحرف بتنوع محدود</li>
                        <li><strong>متوسط:</strong> 11-14 حرف مع بعض التعقيد</li>
                        <li><strong>قوي:</strong> 15+ حرف مع تنوع جيد</li>
                        <li><strong>قوي جداً:</strong> 20+ حرف مع تعقيد عالي</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>نصائح لكلمة مرور قوية:</h5>
                    <div class="code-example">
                    ✓ استخدم 16+ حرف على الأقل
                    ✓ امزج الأحرف الكبيرة والصغيرة
                    ✓ أضف أرقام ورموز خاصة (!@#$%^&*)
                    ✓ تجنب المعلومات الشخصية
                    ✓ استخدم عبارات مفيدة مع تعديلات
                    </div>
                </div>
            `
        },
        entropyCalculator: {
            title: "حاسبة إنتروبيا كلمة المرور",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3V7z",
            content: `
                <div class="explanation-section">
                    <h4>ما هي الإنتروبيا؟</h4>
                    <p>إنتروبيا كلمة المرور هي مقياس رياضي يحدد مقدار العشوائية والتعقيد في كلمة المرور، وتُقاس بالبت (bits).</p>
                </div>
                
                <div class="explanation-section">
                    <h4>كيف يتم الحساب؟</h4>
                    <ul>
                        <li>تحديد حجم مجموعة الأحرف المستخدمة</li>
                        <li>حساب اللوغاريتم الأساسي 2 لحجم المجموعة</li>
                        <li>ضرب النتيجة في طول كلمة المرور</li>
                        <li>الصيغة: الإنتروبيا = log₂(حجم المجموعة) × الطول</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>مستويات الأمان</h4>
                    <ul>
                        <li><strong>أقل من 40 بت:</strong> ضعيف جداً - يمكن كسره بسهولة</li>
                        <li><strong>40-60 بت:</strong> ضعيف - مقاوم للهجمات البسيطة</li>
                        <li><strong>60-80 بت:</strong> متوسط - حماية معقولة</li>
                        <li><strong>80-100 بت:</strong> قوي - حماية جيدة</li>
                        <li><strong>أكثر من 100 بت:</strong> قوي جداً - حماية ممتازة</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>أمثلة على الحساب:</h5>
                    <div class="code-example">
                    كلمة مرور: "abc123" (6 أحرف)
                    حجم المجموعة: 36 (26 حرف + 10 أرقام)
                    الإنتروبيا: log₂(36) × 6 ≈ 31 بت (ضعيف)
                    
                    كلمة مرور: "MyP@ssw0rd!2023" (14 حرف)
                    حجم المجموعة: 94 (جميع الأحرف والرموز)
                    الإنتروبيا: log₂(94) × 14 ≈ 91 بت (قوي)
                    </div>
                </div>
            `
        },
        passwordGenerator: {
            title: "مولد كلمات المرور",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.2 3.2 1-1.73-4.2-2.47V7z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو مولد كلمات المرور؟</h4>
                    <p>أداة متقدمة تنشئ كلمات مرور قوية وعشوائية باستخدام خوارزميات تشفير آمنة لضمان أقصى درجات الحماية.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>المميزات الرئيسية</h4>
                    <ul>
                        <li>توليد عشوائي حقيقي باستخدام Crypto API</li>
                        <li>تحكم كامل في طول كلمة المرور (8-64 حرف)</li>
                        <li>خيارات مرنة للأحرف والرموز</li>
                        <li>ضمان عدم تكرار الأنماط</li>
                        <li>تقييم فوري لقوة كلمة المرور المولدة</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>أنواع الأحرف المستخدمة</h4>
                    <ul>
                        <li><strong>أحرف صغيرة:</strong> a-z (26 حرف)</li>
                        <li><strong>أحرف كبيرة:</strong> A-Z (26 حرف)</li>
                        <li><strong>أرقام:</strong> 0-9 (10 أرقام)</li>
                        <li><strong>رموز خاصة:</strong> !@#$%^&*()_+-=[]{}|;:,.<>? (32 رمز)</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>أفضل الممارسات:</h5>
                    <div class="code-example">
                    ✓ استخدم طول 16+ حرف للحسابات المهمة
                    ✓ فعّل جميع أنواع الأحرف
                    ✓ استخدم كلمة مرور مختلفة لكل حساب
                    ✓ احفظ كلمات المرور في مدير كلمات مرور آمن
                    ✓ غيّر كلمات المرور دورياً
                    </div>
                </div>
            `
        },
        leakChecker: {
            title: "فاحص تسريب كلمة المرور",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3V7z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو فاحص التسريب؟</h4>
                    <p>أداة تتحقق من وجود كلمة المرور في قواعد بيانات التسريبات المعروفة والمتاحة للعامة، مما يساعد في تحديد ما إذا كانت كلمة المرور معرضة للخطر.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>كيف تعمل؟</h4>
                    <ul>
                        <li>تشفير كلمة المرور باستخدام SHA-1</li>
                        <li>إرسال أول 5 أحرف من الهاش للخدمة</li>
                        <li>مقارنة الهاش الكامل محلياً</li>
                        <li>عدم إرسال كلمة المرور الفعلية أبداً</li>
                        <li>الحفاظ على الخصوصية التامة</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>مصادر البيانات</h4>
                    <ul>
                        <li><strong>Have I Been Pwned:</strong> قاعدة بيانات شاملة للتسريبات</li>
                        <li><strong>تسريبات الشركات:</strong> Facebook, Yahoo, LinkedIn</li>
                        <li><strong>قوائم كلمات المرور الشائعة:</strong> RockYou, SecLists</li>
                        <li><strong>هجمات القواميس:</strong> كلمات مرور ضعيفة معروفة</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>ماذا تفعل إذا تم العثور على تسريب؟</h5>
                    <div class="code-example">
                    🚨 غيّر كلمة المرور فوراً
                    🔐 استخدم كلمة مرور قوية وفريدة
                    🔄 فعّل المصادقة الثنائية
                    📧 تحقق من الحسابات المرتبطة
                    🔍 راقب النشاط المشبوه
                    </div>
                </div>
            `
        },
        fileHashChecker: {
            title: "فاحص هاش الملفات",
            icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو فاحص هاش الملفات؟</h4>
                    <p>أداة متقدمة للتحقق من سلامة وأصالة الملفات عبر حساب وتحليل قيم الهاش الرقمية للملفات.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>كيف يعمل؟</h4>
                    <ul>
                        <li>قراءة محتوى الملف بأمان</li>
                        <li>حساب الهاش باستخدام خوارزميات متنوعة</li>
                        <li>مقارنة النتائج مع القيم المرجعية</li>
                        <li>اكتشاف أي تغييرات أو تلاعب</li>
                        <li>التحقق من سلامة التحميلات</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>حالات الاستخدام</h4>
                    <ul>
                        <li><strong>التحقق من التحميلات:</strong> تأكيد سلامة الملفات المحملة</li>
                        <li><strong>اكتشاف التلاعب:</strong> تحديد التعديلات غير المصرح بها</li>
                        <li><strong>النسخ الاحتياطية:</strong> التحقق من سلامة النسخ</li>
                        <li><strong>التوزيع الآمن:</strong> ضمان الأصالة عبر الشبكة</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>أمثلة عملية:</h5>
                    <div class="code-example">
                    ✓ تحقق من ملفات النظام
                    ✓ فحص التحديثات البرمجية
                    ✓ التحقق من سلامة المستندات
                    ✓ مراقبة ملفات التكوين
                    </div>
                </div>
            `
        },
        base64: {
            title: "مشفر/فك تشفير Base64",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3V7z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو Base64؟</h4>
                    <p>Base64 هو نظام ترميز يحول البيانات الثنائية إلى نص ASCII آمن للنقل عبر البروتوكولات النصية.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>كيف يعمل الترميز؟</h4>
                    <ul>
                        <li>تقسيم البيانات إلى مجموعات 3 بايت</li>
                        <li>تحويل كل مجموعة إلى 4 أحرف Base64</li>
                        <li>استخدام 64 حرفاً: A-Z, a-z, 0-9, +, /</li>
                        <li>إضافة حشو (=) عند الحاجة</li>
                        <li>الحصول على نص آمن للنقل</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>الاستخدامات الشائعة</h4>
                    <ul>
                        <li><strong>البريد الإلكتروني:</strong> إرفاق الملفات في MIME</li>
                        <li><strong>URLs:</strong> ترميز البيانات في الروابط</li>
                        <li><strong>JSON/XML:</strong> تضمين البيانات الثنائية</li>
                        <li><strong>التخزين:</strong> حفظ البيانات في قواعد البيانات النصية</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>مثال على الترميز:</h5>
                    <div class="code-example">
                    النص: "سايبر جارد"
                    Base64: "2LPYp9mK2KjYsSDYrNin2LHYrw=="
                    
                    النص: "CyberGuard"
                    Base64: "Q3liZXJHdWFyZA=="
                    </div>
                </div>
            `
        },
        ipGeolocation: {
            title: "تحديد موقع IP",
            icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو تحديد موقع IP؟</h4>
                    <p>تقنية لتحديد الموقع الجغرافي التقريبي لعنوان IP من خلال قواعد بيانات الشبكات والمواقع.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>كيف يعمل؟</h4>
                    <ul>
                        <li>البحث في قواعد بيانات WHOIS</li>
                        <li>تحليل تخصيصات مقدمي الخدمة</li>
                        <li>مطابقة النطاقات الجغرافية</li>
                        <li>تجميع البيانات من مصادر متعددة</li>
                        <li>تقدير الموقع التقريبي</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>المعلومات المتاحة</h4>
                    <ul>
                        <li><strong>البلد:</strong> الدولة التي ينتمي إليها IP</li>
                        <li><strong>المدينة:</strong> المنطقة التقريبية</li>
                        <li><strong>مقدم الخدمة:</strong> الشركة المشغلة</li>
                        <li><strong>المنطقة الزمنية:</strong> التوقيت المحلي</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>تطبيقات عملية:</h5>
                    <div class="code-example">
                    🔍 تحليل زوار المواقع
                    🛡️ اكتشاف الأنشطة المشبوهة
                    📍 تخصيص المحتوى حسب الموقع
                    ⚖️ الامتثال للقوانين المحلية
                    </div>
                </div>
            `
        },
        hashGenerator: {
            title: "مولد الهاش",
            icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو مولد الهاش؟</h4>
                    <p>أداة متقدمة تحول النصوص إلى قيم هاش مشفرة باستخدام خوارزميات التشفير المختلفة لضمان الأمان وحماية البيانات.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>خوارزميات الهاش المدعومة</h4>
                    <ul>
                        <li><strong>MD5:</strong> 128 بت، سريع ولكن أقل أماناً</li>
                        <li><strong>SHA-1:</strong> 160 بت، متوسط الأمان</li>
                        <li><strong>SHA-256:</strong> 256 بت، عالي الأمان</li>
                        <li><strong>SHA-512:</strong> 512 بت، أقصى درجات الأمان</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>استخدامات الهاش</h4>
                    <ul>
                        <li><strong>التحقق من سلامة البيانات:</strong> اكتشاف التعديلات</li>
                        <li><strong>تخزين كلمات المرور:</strong> حماية آمنة</li>
                        <li><strong>التوقيعات الرقمية:</strong> تأكيد الأصالة</li>
                        <li><strong>Blockchain:</strong> أساس العملات المشفرة</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>مثال على الهاش:</h5>
                    <div class="code-example">
                    النص: "CyberGuard"
                    MD5: a1b2c3d4e5f6...
                    SHA-256: 9a8b7c6d5e4f...
                    
                    ملاحظة: أي تغيير صغير في النص ينتج هاش مختلف تماماً
                    </div>
                </div>
            `
        },
        portScanner: {
            title: "فاحص المنافذ",
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو فاحص المنافذ؟</h4>
                    <p>أداة شبكة تفحص المنافذ المفتوحة على الخوادم والأجهزة لتحديد الخدمات النشطة والثغرات الأمنية المحتملة.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>كيف يعمل؟</h4>
                    <ul>
                        <li>إرسال طلبات TCP/UDP للمنافذ المحددة</li>
                        <li>تحليل الاستجابات لتحديد حالة المنفذ</li>
                        <li>تحديد الخدمات النشطة</li>
                        <li>اكتشاف نظام التشغيل</li>
                        <li>تقييم الثغرات الأمنية</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>حالات المنافذ</h4>
                    <ul>
                        <li><strong>مفتوح:</strong> يقبل الاتصالات</li>
                        <li><strong>مغلق:</strong> لا يقبل الاتصالات</li>
                        <li><strong>مصفى:</strong> محجوب بواسطة جدار حماية</li>
                        <li><strong>غير محدد:</strong> لا يمكن تحديد الحالة</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>أمثلة على المنافذ الشائعة:</h5>
                    <div class="code-example">
                    80: HTTP (مواقع الويب)
                    443: HTTPS (مواقع الويب الآمنة)
                    22: SSH (الوصول الآمن)
                    21: FTP (نقل الملفات)
                    3389: RDP (سطح المكتب البعيد)
                    </div>
                </div>
            `
        },
        urlChecker: {
            title: "فاحص أمان الروابط",
            icon: "M10 6H5c-1.1 0-2 .9-2 2v3h2V8h5V6zm-4 5H4v3c0 1.1.9 2 2 2h5v-2H6v-3zm14-5h-5v2h5v3h2V8c0-1.1-.9-2-2-2zm0 8h-2v3h-5v2h5c1.1 0 2-.9 2-2v-3z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو فاحص أمان الروابط؟</h4>
                    <p>أداة تحليل متقدمة تفحص الروابط والمواقع للكشف عن التهديدات الأمنية والمحتوى الضار قبل زيارتها.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>أنواع التهديدات المكتشفة</h4>
                    <ul>
                        <li><strong>التصيد الاحتيالي:</strong> مواقع تسرق المعلومات الشخصية</li>
                        <li><strong>البرمجيات الخبيثة:</strong> فيروسات وبرامج ضارة</li>
                        <li><strong>الاحتيال:</strong> عمليات نصب وخداع</li>
                        <li><strong>المحتوى المشبوه:</strong> روابط مريبة</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>كيف يعمل الفحص؟</h4>
                    <ul>
                        <li>تحليل سمعة النطاق</li>
                        <li>فحص قوائم المواقع المحظورة</li>
                        <li>تحليل شهادات SSL</li>
                        <li>فحص محتوى الصفحة</li>
                        <li>مقارنة مع قواعد بيانات التهديدات</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>علامات الخطر:</h5>
                    <div class="code-example">
                    ⚠️ روابط قصيرة مجهولة
                    🚨 نطاقات مشبوهة
                    ❌ شهادات SSL منتهية الصلاحية
                    🔴 محتوى ضار معروف
                    </div>
                </div>
            `
        },
        textCrypto: {
            title: "تشفير/فك تشفير النصوص",
            icon: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو تشفير النصوص؟</h4>
                    <p>عملية تحويل النصوص العادية إلى شكل مشفر غير قابل للقراءة لحماية المعلومات الحساسة من الوصول غير المصرح به.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>خوارزميات التشفير المدعومة</h4>
                    <ul>
                        <li><strong>AES:</strong> معيار التشفير المتقدم، عالي الأمان</li>
                        <li><strong>Caesar Cipher:</strong> إزاحة الأحرف، تعليمي</li>
                        <li><strong>ROT13:</strong> إزاحة 13 حرف، بسيط</li>
                        <li><strong>Base64:</strong> ترميز آمن للنقل</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>استخدامات التشفير</h4>
                    <ul>
                        <li><strong>حماية البيانات الشخصية:</strong> معلومات حساسة</li>
                        <li><strong>الاتصالات الآمنة:</strong> رسائل سرية</li>
                        <li><strong>تخزين كلمات المرور:</strong> حماية الحسابات</li>
                        <li><strong>النقل الآمن:</strong> حماية البيانات في الشبكة</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>مثال على التشفير:</h5>
                    <div class="code-example">
                    النص الأصلي: "رسالة سرية"
                    المفتاح: "MySecretKey123"
                    النص المشفر: "8f7e9d2a1b..."
                    
                    ملاحظة: احتفظ بالمفتاح في مكان آمن!
                    </div>
                </div>
            `
        },
        darkWebScanner: {
            title: "فاحص الويب المظلم",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3V7z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو فاحص الويب المظلم؟</h4>
                    <p>أداة متخصصة للبحث عن البيانات الشخصية والمعلومات الحساسة في أسواق الويب المظلم ومواقع التسريب.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>ما يتم البحث عنه</h4>
                    <ul>
                        <li><strong>عناوين البريد الإلكتروني:</strong> حسابات مخترقة</li>
                        <li><strong>أسماء المستخدمين:</strong> بيانات مسربة</li>
                        <li><strong>كلمات المرور:</strong> تسريبات أمنية</li>
                        <li><strong>بيانات بطاقات الائتمان:</strong> معاملات غير قانونية</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>مصادر البيانات</h4>
                    <ul>
                        <li>أسواق الويب المظلم</li>
                        <li>منتديات الهاكرز</li>
                        <li>قواعد بيانات التسريبات</li>
                        <li>مواقع التداول غير القانوني</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>إجراءات الحماية:</h5>
                    <div class="code-example">
                    🔄 غيّر كلمات المرور فوراً
                    🔐 فعّل المصادقة الثنائية
                    📧 راقب الحسابات المالية
                    🚨 أبلغ الجهات المختصة
                    🛡️ استخدم خدمات مراقبة الهوية
                    </div>
                </div>
            `
        },
        trafficSimulator: {
            title: "محاكي حركة الشبكة",
            icon: "M3 3v18h18V3H3zm8 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو محاكي حركة الشبكة؟</h4>
                    <p>أداة تحليل تحاكي وتراقب حركة البيانات في الشبكة لتحليل الأداء واكتشاف الاختناقات والتهديدات الأمنية.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>معايير التحليل</h4>
                    <ul>
                        <li><strong>سرعة النقل:</strong> معدل تدفق البيانات</li>
                        <li><strong>زمن الاستجابة:</strong> التأخير في الشبكة</li>
                        <li><strong>فقدان الحزم:</strong> نسبة البيانات المفقودة</li>
                        <li><strong>الازدحام:</strong> كثافة الحركة</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>الاستخدامات العملية</h4>
                    <ul>
                        <li><strong>تحسين الأداء:</strong> تحديد نقاط الضعف</li>
                        <li><strong>التخطيط:</strong> تقدير احتياجات البنية التحتية</li>
                        <li><strong>اكتشاف الهجمات:</strong> حركة مرور غير طبيعية</li>
                        <li><strong>مراقبة الجودة:</strong> ضمان مستوى الخدمة</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>مؤشرات المراقبة:</h5>
                    <div class="code-example">
                    📊 معدل النقل: 100 Mbps
                    ⏱️ زمن الاستجابة: 20ms
                    📈 استخدام النطاق: 75%
                    📦 حزم مفقودة: 0.1%
                    </div>
                </div>
            `
        },
        sqlInjection: {
            title: "فاحص حقن SQL",
            icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو حقن SQL؟</h4>
                    <p>نوع من الهجمات السيبرانية حيث يحقن المهاجم أكواد SQL خبيثة في حقول الإدخال للوصول غير المصرح به لقاعدة البيانات.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>أنواع هجمات SQL</h4>
                    <ul>
                        <li><strong>Union-based:</strong> دمج استعلامات متعددة</li>
                        <li><strong>Boolean-based:</strong> استعلامات منطقية</li>
                        <li><strong>Time-based:</strong> استعلامات مؤقتة</li>
                        <li><strong>Error-based:</strong> استغلال رسائل الخطأ</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>أمثلة على الحقن الخبيث</h4>
                    <ul>
                        <li><code>' OR '1'='1</code> - تجاوز المصادقة</li>
                        <li><code>'; DROP TABLE--</code> - حذف الجداول</li>
                        <li><code>UNION SELECT</code> - الحصول على بيانات إضافية</li>
                        <li><code>1' AND SLEEP(5)--</code> - اختبار زمني</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>طرق الحماية:</h5>
                    <div class="code-example">
                    ✅ استخدم Prepared Statements
                    ✅ تحقق من صحة الإدخال
                    ✅ فلترة الأحرف الخاصة
                    ✅ استخدم أقل صلاحيات ممكنة
                    ✅ حدث قاعدة البيانات دورياً
                    </div>
                </div>
            `
        },
        xssScanner: {
            title: "فاحص ثغرات XSS",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-5l-1.41-1.41L11.17 11 8.59 8.41 10 7l4 4-4 4z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو XSS؟</h4>
                    <p>Cross-Site Scripting هو ثغرة أمنية تسمح للمهاجمين بحقن سكريبت خبيث في صفحات الويب التي يزورها المستخدمون الآخرون.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>أنواع هجمات XSS</h4>
                    <ul>
                        <li><strong>Reflected XSS:</strong> سكريبت ينعكس من الخادم فوراً</li>
                        <li><strong>Stored XSS:</strong> سكريبت محفوظ في قاعدة البيانات</li>
                        <li><strong>DOM-based XSS:</strong> سكريبت ينفذ في جانب العميل</li>
                        <li><strong>Blind XSS:</strong> سكريبت خفي مؤجل التنفيذ</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>المخاطر المحتملة</h4>
                    <ul>
                        <li>سرقة كوكيز المصادقة</li>
                        <li>إعادة توجيه لمواقع خبيثة</li>
                        <li>سرقة البيانات الحساسة</li>
                        <li>تنفيذ عمليات غير مصرح بها</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>أمثلة على الأكواد الخبيثة:</h5>
                    <div class="code-example">
                    &lt;script&gt;alert('XSS')&lt;/script&gt;
                    &lt;img src=x onerror=alert(1)&gt;
                    javascript:alert('XSS')
                    &lt;svg onload=alert(1)&gt;
                    </div>
                </div>
            `
        },
        latencyTester: {
            title: "فاحص زمن الاستجابة",
            icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو فاحص زمن الاستجابة؟</h4>
                    <p>أداة شبكة تقيس الوقت المطلوب للاتصال بخادم أو موقع ويب، مما يساعد في تحليل جودة الاتصال وأداء الشبكة.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>معايير القياس</h4>
                    <ul>
                        <li><strong>Ping Time:</strong> وقت ذهاب وإياب الحزم</li>
                        <li><strong>DNS Resolution:</strong> وقت تحليل اسم النطاق</li>
                        <li><strong>Connection Time:</strong> وقت إنشاء الاتصال</li>
                        <li><strong>Response Time:</strong> وقت الحصول على الرد</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>تفسير النتائج</h4>
                    <ul>
                        <li><strong>أقل من 50ms:</strong> ممتاز</li>
                        <li><strong>50-100ms:</strong> جيد جداً</li>
                        <li><strong>100-200ms:</strong> جيد</li>
                        <li><strong>200-500ms:</strong> متوسط</li>
                        <li><strong>أكثر من 500ms:</strong> بطيء</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>العوامل المؤثرة:</h5>
                    <div class="code-example">
                    🌐 المسافة الجغرافية
                    🔗 جودة الاتصال
                    ⚡ سرعة الخادم
                    🔄 ازدحام الشبكة
                    🛡️ جدران الحماية
                    </div>
                </div>
            `
        },
        complexityVisualizer: {
            title: "مُصوِر تعقيد كلمات المرور",
            icon: "M3 3v18h18V3H3zm8 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو مُصوِر التعقيد؟</h4>
                    <p>أداة بصرية متقدمة تحلل وتعرض تعقيد كلمات المرور من خلال رسوم بيانية تفاعلية وملونة لفهم أفضل لمستوى الأمان.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>العناصر المرئية</h4>
                    <ul>
                        <li><strong>مخطط دائري:</strong> توزيع أنواع الأحرف</li>
                        <li><strong>شريط القوة:</strong> مستوى الأمان العام</li>
                        <li><strong>الرسم البياني:</strong> تطور القوة مع الطول</li>
                        <li><strong>مؤشر الإنتروبيا:</strong> العشوائية الرياضية</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>الألوان والدلالات</h4>
                    <ul>
                        <li><span style="color: #ff4444;">🔴 أحمر:</span> ضعيف جداً (خطر)</li>
                        <li><span style="color: #ff8800;">🟠 برتقالي:</span> ضعيف (تحذير)</li>
                        <li><span style="color: #ffcc00;">🟡 أصفر:</span> متوسط (حذر)</li>
                        <li><span style="color: #88ff00;">🟢 أخضر فاتح:</span> قوي (جيد)</li>
                        <li><span style="color: #00ff88;">🟢 أخضر داكن:</span> قوي جداً (ممتاز)</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>كيفية الاستخدام:</h5>
                    <div class="code-example">
                    🎯 أدخل كلمة مرور لتحليلها
                    📊 راقب المؤشرات البصرية
                    🔍 احرص على التوازن بين الألوان
                    ✨ استهدف اللون الأخضر الداكن
                    </div>
                </div>
            `
        },
        wifiAnalyzer: {
            title: "محلل أمان WiFi",
            icon: "M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو محلل أمان WiFi؟</h4>
                    <p>أداة شاملة تقيّم أمان شبكة WiFi الخاصة بك من خلال تحليل قوة SSID وتعقيد كلمة المرور وبروتوكولات التشفير لتحديد نقاط الضعف.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>فحوصات الأمان</h4>
                    <ul>
                        <li><strong>تحليل SSID:</strong> تقييم أمان اسم الشبكة</li>
                        <li><strong>قوة كلمة المرور:</strong> تقييم تعقيد كلمة مرور WiFi</li>
                        <li><strong>بروتوكول التشفير:</strong> التحقق من WPA/WPA2/WPA3</li>
                        <li><strong>الإعدادات الافتراضية:</strong> اكتشاف إعدادات المصنع</li>
                        <li><strong>البث:</strong> تحليل الشبكات المخفية</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>توصيات الأمان:</h5>
                    <div class="code-example">
                    🔐 استخدم تشفير WPA3 عند الإمكان
                    🔑 ضع كلمات مرور قوية 20+ حرف
                    📡 غيّر أسماء SSID الافتراضية
                    🚫 عطّل ميزة WPS
                    🔄 تحديث كلمات المرور بانتظام
                    </div>
                </div>
            `
        },
        emailSecurity: {
            title: "فاحص أمان البريد الإلكتروني",
            icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو فاحص أمان البريد الإلكتروني؟</h4>
                    <p>أداة تقييم أمان البريد الإلكتروني المتقدمة التي تحلل عناوين البريد الإلكتروني للمخاطر الأمنية المحتملة والتعرض للاختراق وسمعة النطاق.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>تقييمات الأمان</h4>
                    <ul>
                        <li><strong>سمعة النطاق:</strong> تصنيف أمان مزود البريد الإلكتروني</li>
                        <li><strong>قاعدة بيانات الاختراقات:</strong> التحقق من التسريبات المعروفة</li>
                        <li><strong>التحقق من التنسيق:</strong> سلامة هيكل البريد الإلكتروني</li>
                        <li><strong>اكتشاف المؤقت:</strong> تحديد الرسائل الإلكترونية المؤقتة</li>
                        <li><strong>تحليل سجل MX:</strong> أمان خادم البريد</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>نصائح أمان البريد الإلكتروني:</h5>
                    <div class="code-example">
                    ✉️ استخدم مزودي بريد إلكتروني موثوقين
                    🔐 فعّل المصادقة الثنائية
                    🚫 تجنب WiFi العام للبريد الإلكتروني
                    🔄 تغيير كلمات المرور بانتظام
                    📧 راقب الأنشطة المشبوهة
                    </div>
                </div>
            `
        },
        qrSecurity: {
            title: "ماسح أمان QR Code",
            icon: "M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو ماسح أمان QR؟</h4>
                    <p>أداة متخصصة تحلل رموز QR للتهديدات الأمنية المحتملة والروابط الخبيثة والأنماط المشبوهة قبل مسحها.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>اكتشاف التهديدات</h4>
                    <ul>
                        <li><strong>تحليل الروابط:</strong> التحقق من سلامة الروابط</li>
                        <li><strong>اكتشاف التصيد:</strong> تحديد الأنماط المشبوهة</li>
                        <li><strong>فحص البرمجيات الخبيثة:</strong> اكتشاف المحتوى الضار</li>
                        <li><strong>سمعة النطاق:</strong> فحص موثوقية الموقع</li>
                        <li><strong>تحليل إعادة التوجيه:</strong> تتبع الوجهات المخفية</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>أمان QR Code:</h5>
                    <div class="code-example">
                    🔍 تحقق دائماً من مصدر QR
                    📱 استخدم تطبيقات QR موثوقة
                    🚫 تجنب رموز QR غير المعروفة
                    🔗 افحص الروابط قبل الزيارة
                    🛡️ حافظ على الأجهزة محدثة
                    </div>
                </div>
            `
        },
        steganography: {
            title: "كاشف الإخفاء الرقمي",
            icon: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو كشف الإخفاء الرقمي؟</h4>
                    <p>أداة الطب الشرعي التي تحلل الصور للبيانات المخفية المدمجة باستخدام تقنيات الإخفاء الرقمي، مما يساعد في اكتشاف الاتصالات السرية.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>طرق الاكتشاف</h4>
                    <ul>
                        <li><strong>تحليل LSB:</strong> فحص البت الأقل أهمية</li>
                        <li><strong>التحليل الإحصائي:</strong> أنماط توزيع البكسل</li>
                        <li><strong>مجال التردد:</strong> تحليل معاملات DCT</li>
                        <li><strong>شذوذ حجم الملف:</strong> نسب حجم-محتوى غير عادية</li>
                        <li><strong>فحص البيانات الوصفية:</strong> فحص بيانات EXIF</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>حالات الاستخدام:</h5>
                    <div class="code-example">
                    🕵️ تحقيقات الطب الشرعي الرقمي
                    🔒 مراجعات أمان الشركات
                    📧 فحص مرفقات البريد الإلكتروني
                    🌐 تحليل محتوى وسائل التواصل
                    🎯 اكتشاف البرمجيات الخبيثة
                    </div>
                </div>
            `
        },
        socialEngineering: {
            title: "محلل الهندسة الاجتماعية",
            icon: "M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.996 2.996 0 0 0 17.09 7H16c-.8 0-1.54.37-2.01.99L12 10.5z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو تحليل الهندسة الاجتماعية؟</h4>
                    <p>أداة ذكية تحلل الرسائل والبريد الإلكتروني والاتصالات لتكتيكات الهندسة الاجتماعية وتقنيات التلاعب.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>أنماط الاكتشاف</h4>
                    <ul>
                        <li><strong>مؤشرات الاستعجال:</strong> تكتيكات الضغط الزمني</li>
                        <li><strong>انتحال السلطة:</strong> ادعاءات السلطة الكاذبة</li>
                        <li><strong>التلاعب العاطفي:</strong> محفزات الخوف والجشع والفضول</li>
                        <li><strong>طلبات المعلومات:</strong> طلب البيانات الحساسة</li>
                        <li><strong>استغلال الثقة:</strong> أنماط سوء استخدام العلاقات</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>استراتيجيات الحماية:</h5>
                    <div class="code-example">
                    🤔 تحقق دائماً من الطلبات غير المتوقعة
                    📞 اتصل مرة أخرى باستخدام الأرقام الرسمية
                    🚫 لا تشارك كلمات المرور عبر البريد الإلكتروني
                    ⏰ خذ وقتاً للتفكير قبل التصرف
                    👥 استشر الزملاء حول الطلبات المشبوهة
                    </div>
                </div>
            `
        },
        osintGatherer: {
            title: "جامع المعلومات المفتوحة المصدر",
            icon: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو جمع OSINT؟</h4>
                    <p>أداة جمع استخبارات مفتوحة المصدر تجمع المعلومات المتاحة للجمهور حول النطاقات والبريد الإلكتروني وأسماء المستخدمين لأبحاث الأمان.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>مصادر المعلومات</h4>
                    <ul>
                        <li><strong>سجلات النطاق:</strong> WHOIS, DNS, شهادات SSL</li>
                        <li><strong>وسائل التواصل الاجتماعي:</strong> الملفات الشخصية والمنشورات العامة</li>
                        <li><strong>قواعد بيانات الاختراق:</strong> تسريبات البيانات المعروفة</li>
                        <li><strong>محركات البحث:</strong> المحتوى المخزن مؤقتاً والمفهرس</li>
                        <li><strong>الأدلة العامة:</strong> قوائم الأعمال والشخصية</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>⚠️ الإرشادات الأخلاقية:</h5>
                    <div class="code-example">
                    ✅ استخدم فقط لأبحاث الأمان المشروعة
                    ✅ احترم الخصوصية والحدود القانونية
                    ✅ احصل على التصريح المناسب
                    ❌ لا تستخدم أبداً للمضايقة
                    ❌ لا تنتهك شروط الخدمة
                    </div>
                </div>
            `
        },
        passwordPolicy: {
            title: "مولد سياسة كلمات المرور",
            icon: "M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3l-1-1h-6L8 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو مولد سياسة كلمات المرور؟</h4>
                    <p>أداة شاملة تنشئ سياسات كلمات مرور مخصصة بناءً على نوع المؤسسة ومتطلبات الأمان للنشر في المؤسسات.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>مكونات السياسة</h4>
                    <ul>
                        <li><strong>متطلبات الطول:</strong> حدود الأحرف الدنيا/العليا</li>
                        <li><strong>قواعد التعقيد:</strong> متطلبات نوع الأحرف</li>
                        <li><strong>سياسات انتهاء الصلاحية:</strong> تقادم كلمة المرور ودورانها</li>
                        <li><strong>تتبع السجل:</strong> منع كلمات المرور السابقة</li>
                        <li><strong>إعدادات القفل:</strong> عتبات المحاولات الفاشلة</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>نصائح التنفيذ:</h5>
                    <div class="code-example">
                    📋 وثّق السياسات بوضوح
                    🎓 درّب المستخدمين على المتطلبات
                    🔄 مراجعات السياسة المنتظمة
                    🛠️ استخدم أدوات إنفاذ السياسة
                    📊 راقب مؤشرات الامتثال
                    </div>
                </div>
            `
        },
        domainAnalyzer: {
            title: "محلل أمان النطاق",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو محلل أمان النطاق؟</h4>
                    <p>أداة تحليل شاملة تفحص أمان النطاقات والمواقع الإلكترونية من خلال تقييم عدة جوانب أمنية مهمة.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>جوانب التحليل</h4>
                    <ul>
                        <li><strong>عمر النطاق:</strong> فحص تاريخ تسجيل النطاق</li>
                        <li><strong>شهادة SSL:</strong> التحقق من صحة شهادة الأمان</li>
                        <li><strong>القوائم السوداء:</strong> فحص وجود النطاق في قوائم المواقع الخبيثة</li>
                        <li><strong>سمعة النطاق:</strong> تقييم الثقة والموثوقية</li>
                        <li><strong>سجلات DNS:</strong> فحص إعدادات DNS</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>مؤشرات الأمان:</h5>
                    <div class="code-example">
                    ✅ نطاق قديم (أكثر من 5 سنوات) = موثوق
                    ✅ شهادة SSL صالحة = آمن
                    ✅ غير موجود في القوائم السوداء = نظيف
                    ⚠️ نطاق حديث = يحتاج تدقيق
                    🚨 مشاكل SSL = خطر محتمل
                    </div>
                </div>
            `
        },
        sslChecker: {
            title: "فاحص شهادة SSL",
            icon: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM16 16h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو فاحص شهادة SSL؟</h4>
                    <p>أداة متخصصة تفحص وتحلل شهادات SSL/TLS للمواقع الإلكترونية للتأكد من صحتها وقوة الأمان.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>ما يتم فحصه</h4>
                    <ul>
                        <li><strong>صحة الشهادة:</strong> التحقق من صلاحية الشهادة</li>
                        <li><strong>المُصدر:</strong> التحقق من جهة إصدار الشهادة</li>
                        <li><strong>تاريخ انتهاء الصلاحية:</strong> مراقبة انتهاء الشهادة</li>
                        <li><strong>قوة التشفير:</strong> حجم مفتاح التشفير (2048/4096 بت)</li>
                        <li><strong>الخوارزمية:</strong> نوع خوارزمية التوقيع المستخدمة</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>مؤشرات الأمان:</h5>
                    <div class="code-example">
                    🔒 شهادة صالحة = اتصال آمن
                    ⏰ صالحة لأكثر من 30 يوم = جيد
                    🔑 مفتاح 2048+ بت = تشفير قوي
                    🏢 مُصدر موثوق = شهادة معتمدة
                    ⚠️ انتهاء قريب = تحديث مطلوب
                    </div>
                </div>
            `
        },
        fileSignature: {
            title: "محلل توقيع الملف",
            icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13zm-3 1c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو محلل توقيع الملف؟</h4>
                    <p>أداة طب شرعي رقمي تحلل التوقيع الداخلي للملفات (File Signature/Magic Number) للكشف عن النوع الحقيقي للملف.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>كيف يعمل التحليل</h4>
                    <ul>
                        <li><strong>قراءة الهيدر:</strong> فحص أول 16 بايت من الملف</li>
                        <li><strong>مقارنة التوقيعات:</strong> مطابقة مع قاعدة بيانات التوقيعات</li>
                        <li><strong>كشف التلاعب:</strong> مقارنة الامتداد مع النوع الفعلي</li>
                        <li><strong>تحليل الهيكل:</strong> فحص بنية الملف الداخلية</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>أمثلة التوقيعات الشائعة</h4>
                    <ul>
                        <li><code>FF D8 FF</code> = ملف JPEG</li>
                        <li><code>89 50 4E 47</code> = ملف PNG</li>
                        <li><code>25 50 44 46</code> = ملف PDF</li>
                        <li><code>50 4B 03 04</code> = ملف ZIP</li>
                        <li><code>4D 5A</code> = ملف تنفيذي Windows</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>حالات الاستخدام:</h5>
                    <div class="code-example">
                    🕵️ التحقيق الجنائي الرقمي
                    🦠 كشف البرمجيات الخبيثة المقنعة
                    📧 فحص مرفقات البريد الإلكتروني
                    🔒 التحقق من سلامة الملفات
                    ⚠️ كشف محاولات إخفاء نوع الملف
                    </div>
                </div>
            `
        },
        browserSecurity: {
            title: "فاحص أمان المتصفح",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو فاحص أمان المتصفح؟</h4>
                    <p>أداة تقييم شاملة تفحص إعدادات الأمان الحالية لمتصفحك وتحدد نقاط الضعف والمخاطر المحتملة.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>ما يتم فحصه</h4>
                    <ul>
                        <li><strong>بروتوكول الاتصال:</strong> HTTPS vs HTTP</li>
                        <li><strong>إعدادات الكوكيز:</strong> حالة تفعيل ملفات تعريف الارتباط</li>
                        <li><strong>JavaScript:</strong> حالة تفعيل السكريبت</li>
                        <li><strong>التخزين المحلي:</strong> إمكانية الوصول للتخزين المحلي</li>
                        <li><strong>Do Not Track:</strong> إعدادات منع التتبع</li>
                        <li><strong>WebRTC:</strong> دعم تقنيات الاتصال المباشر</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>نصائح تحسين الأمان:</h5>
                    <div class="code-example">
                    🔒 استخدم HTTPS دائماً
                    🍪 راجع إعدادات الكوكيز
                    🚫 فعّل Do Not Track
                    🔄 حدّث المتصفح باستمرار
                    🛡️ استخدم إضافات الحماية
                    🔐 فعّل المصادقة الثنائية
                    </div>
                </div>
            `
        },
        metadataExtractor: {
            title: "مستخرج البيانات الوصفية",
            icon: "M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3l-1-1h-6L8 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو مستخرج البيانات الوصفية؟</h4>
                    <p>أداة تحليل تستخرج البيانات الوصفية (Metadata) المخفية في الملفات، والتي قد تحتوي على معلومات حساسة.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>أنواع البيانات المستخرجة</h4>
                    <ul>
                        <li><strong>معلومات الملف:</strong> الاسم، الحجم، تاريخ الإنشاء</li>
                        <li><strong>بيانات EXIF:</strong> معلومات الكاميرا والموقع الجغرافي</li>
                        <li><strong>برنامج الإنشاء:</strong> البرنامج المستخدم لإنشاء الملف</li>
                        <li><strong>معلومات المؤلف:</strong> اسم منشئ الملف</li>
                        <li><strong>بيانات GPS:</strong> إحداثيات الموقع (في الصور)</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>مخاوف الخصوصية</h4>
                    <ul>
                        <li>تسريب الموقع الجغرافي من الصور</li>
                        <li>كشف هوية منشئ الملف</li>
                        <li>معلومات الأجهزة المستخدمة</li>
                        <li>تواريخ ومعلومات حساسة</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>نصائح الحماية:</h5>
                    <div class="code-example">
                    🗑️ احذف البيانات الوصفية قبل المشاركة
                    📍 عطّل GPS في الكاميرا
                    🔧 استخدم أدوات تنظيف البيانات الوصفية
                    ⚠️ احذر من مشاركة الصور الشخصية
                    🔒 راجع إعدادات الخصوصية
                    </div>
                </div>
            `
        },
        keyloggerSimulator: {
            title: "محاكي مسجل لوحة المفاتيح",
            icon: "M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z",
            content: `
                <div class="explanation-section">
                    <h4>⚠️ ما هو محاكي Keylogger؟</h4>
                    <p><strong>هذه أداة تعليمية</strong> تحاكي عمل برمجيات تسجيل ضغطات المفاتيح لفهم كيفية عملها والحماية منها.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>كيف تعمل برمجيات Keylogger</h4>
                    <ul>
                        <li><strong>تسجيل ضغطات المفاتيح:</strong> كل حرف وزر مضغوط</li>
                        <li><strong>تخزين البيانات:</strong> حفظ المعلومات المسجلة</li>
                        <li><strong>الإرسال السري:</strong> نقل البيانات للمهاجم</li>
                        <li><strong>العمل الخفي:</strong> تشغيل بدون علم المستخدم</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>المخاطر المحتملة</h4>
                    <ul>
                        <li>سرقة كلمات المرور</li>
                        <li>تسجيل معلومات البطاقات الائتمانية</li>
                        <li>سرقة البيانات الشخصية</li>
                        <li>مراقبة الأنشطة الشخصية</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>طرق الحماية:</h5>
                    <div class="code-example">
                    🛡️ استخدم برنامج مكافح فيروسات قوي
                    🔐 فعّل جدار الحماية
                    ⌨️ استخدم لوحة مفاتيح افتراضية للبيانات الحساسة
                    🔄 حدّث نظام التشغيل والبرامج
                    🚫 تجنب تحميل البرامج من مصادر مجهولة
                    </div>
                </div>
            `
        },
        phishingGenerator: {
            title: "مولد روابط التصيد (تعليمي)",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 19c-3.87 0-7-3.13-7-7 0-1.26.33-2.44.91-3.47L8.5 10l3.5-2.5L15.5 10l2.59-1.47c.58 1.03.91 2.21.91 3.47 0 3.87-3.13 7-7 7z",
            content: `
                <div class="explanation-section">
                    <h4>⚠️ مولد أمثلة التصيد التعليمي</h4>
                    <p><strong>هذه أداة تعليمية بحتة</strong> لفهم تقنيات التصيد الشائعة والحماية منها. <span style="color: #ff4500;">يُمنع استخدامها لأغراض ضارة!</span></p>
                </div>
                
                <div class="explanation-section">
                    <h4>تقنيات التصيد الشائعة</h4>
                    <ul>
                        <li><strong>استبدال الأحرف:</strong> تغيير حروف مشابهة (0 بدلاً من O)</li>
                        <li><strong>النطاقات الفرعية المزيفة:</strong> إضافة أجزاء مشبوهة</li>
                        <li><strong>امتدادات مختلفة:</strong> استخدام .net بدلاً من .com</li>
                        <li><strong>إضافة كلمات:</strong> "secure-" أو "login-"</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>🚨 تحذيرات مهمة</h4>
                    <ul>
                        <li><span style="color: #ff4500;">يُمنع إنشاء مواقع تصيد حقيقية</span></li>
                        <li><span style="color: #ff4500;">لا تستخدم هذه الأمثلة لخداع الناس</span></li>
                        <li><span style="color: #ff4500;">الغرض تعليمي وتوعوي فقط</span></li>
                        <li><span style="color: #ff4500;">انتهاك هذا يعرضك للمساءلة القانونية</span></li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>كيفية الحماية:</h5>
                    <div class="code-example">
                    🔍 تحقق من الرابط الكامل دائماً
                    🔒 ابحث عن شهادة SSL الصحيحة
                    📧 احذر من الروابط في الرسائل المشبوهة
                    🌐 اكتب عناوين المواقع يدوياً
                    ⚠️ لا تثق بالروابط المختصرة
                    </div>
                </div>
            `
        },
        vpnTester: {
            title: "اختبار أمان VPN",
            icon: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو اختبار أمان VPN؟</h4>
                    <p>أداة تقييم شاملة تختبر فعالية خدمة VPN في حماية خصوصيتك وإخفاء هويتك الرقمية.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>الاختبارات المنجزة</h4>
                    <ul>
                        <li><strong>تسريب IP:</strong> التحقق من إخفاء عنوان IP الحقيقي</li>
                        <li><strong>تسريب DNS:</strong> فحص تسريب استعلامات DNS</li>
                        <li><strong>تسريب WebRTC:</strong> كشف تسريبات WebRTC</li>
                        <li><strong>قوة التشفير:</strong> تقييم مستوى التشفير المستخدم</li>
                        <li><strong>سرعة الاتصال:</strong> قياس تأثير VPN على السرعة</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>أنواع التسريبات</h4>
                    <ul>
                        <li><strong>IP Leak:</strong> كشف عنوان IP الحقيقي</li>
                        <li><strong>DNS Leak:</strong> تسريب خوادم DNS المحلية</li>
                        <li><strong>WebRTC Leak:</strong> كشف IP عبر متصفح الويب</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>علامات VPN آمن:</h5>
                    <div class="code-example">
                    ✅ لا توجد تسريبات IP
                    ✅ DNS محمي ومشفر
                    ✅ WebRTC محجوب أو آمن
                    ✅ تشفير AES-256
                    ✅ بروتوكولات آمنة (OpenVPN/WireGuard)
                    </div>
                </div>
            `
        },
        ransomwareSimulator: {
            title: "محاكي برمجيات الفدية (تعليمي)",
            icon: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm3 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
            content: `
                <div class="explanation-section">
                    <h4>⚠️ محاكي برمجيات الفدية التعليمي</h4>
                    <p><strong>هذه أداة تعليمية وتدريبية</strong> لفهم كيفية عمل برمجيات الفدية وطرق الحماية منها. <span style="color: #ff4500;">يُمنع منعاً باتاً استخدامها لأغراض ضارة!</span></p>
                </div>
                
                <div class="explanation-section">
                    <h4>سيناريوهات المحاكاة</h4>
                    <ul>
                        <li><strong>تشفير الملفات:</strong> محاكاة عملية تشفير الملفات</li>
                        <li><strong>قفل النظام:</strong> محاكاة قفل الوصول للنظام</li>
                        <li><strong>انتشار الشبكة:</strong> تحليل كيفية انتشار الفدية</li>
                        <li><strong>عملية الاستعادة:</strong> تدريب على خطوات الاستعادة</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>🚨 تحذيرات قانونية</h4>
                    <ul>
                        <li><span style="color: #ff4500;">لا تستخدم لإنشاء فدية حقيقية</span></li>
                        <li><span style="color: #ff4500;">الغرض تعليمي وتدريبي فقط</span></li>
                        <li><span style="color: #ff4500;">أي استخدام ضار يعرضك للمساءلة القانونية</span></li>
                        <li><span style="color: #ff4500;">احصل على إذن قبل التدريب في بيئة مؤسسية</span></li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>استراتيجيات الحماية:</h5>
                    <div class="code-example">
                    💾 نسخ احتياطية منتظمة ومعزولة
                    🔄 تحديثات الأمان المستمرة
                    🛡️ برامج مكافحة الفيروسات المتقدمة
                    🚫 تجنب المرفقات والروابط المشبوهة
                    👥 تدريب الموظفين على التوعية الأمنية
                    </div>
                </div>
            `
        },
        quantumCrypto: {
            title: "محلل التشفير المقاوم للكمي",
            icon: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM16 16h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو محلل التشفير المقاوم للكمي؟</h4>
                    <p>أداة تحليل متقدمة تقيم مقاومة أنظمة التشفير الحالية ضد الهجمات الكمومية المستقبلية وتوصي بالبدائل الآمنة.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>التهديد الكمومي</h4>
                    <ul>
                        <li><strong>خوارزمية شور:</strong> كسر RSA و ECC</li>
                        <li><strong>خوارزمية جروفر:</strong> تقليل قوة التشفير المتماثل</li>
                        <li><strong>الحوسبة الكمومية:</strong> تسريع العمليات الحسابية المعقدة</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>خوارزميات ما بعد الكمومية</h4>
                    <ul>
                        <li><strong>مبنية على الشبكة:</strong> Kyber، NTRU</li>
                        <li><strong>مبنية على الهاش:</strong> SPHINCS+</li>
                        <li><strong>مبنية على الكود:</strong> Classic McEliece</li>
                        <li><strong>متعددة المتغيرات:</strong> Rainbow</li>
                        <li><strong>مبنية على isogeny:</strong> SIKE</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>معايير التقييم</h4>
                    <ul>
                        <li>المقاومة ضد خوارزميات شور وجروفر</li>
                        <li>أحجام المفاتيح والتوقيعات</li>
                        <li>سرعة العمليات الحسابية</li>
                        <li>مستوى الثقة الرياضية</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>خطة الهجرة:</h5>
                    <div class="code-example">
                    📊 تقييم التشفير الحالي
                    🔄 اختيار البدائل المناسبة
                    📅 تخطيط الهجرة التدريجية
                    🧪 اختبار التوافق
                    🛡️ تطبيق الحماية الهجينة
                    </div>
                </div>
            `
        },
        incidentResponse: {
            title: "محاكي الاستجابة للحوادث",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو محاكي الاستجابة للحوادث؟</h4>
                    <p>أداة تدريب متقدمة تحاكي سيناريوهات حوادث الأمن السيبراني الواقعية وتدرب الفرق على إجراءات الاستجابة المناسبة.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>أنواع الحوادث المحاكاة</h4>
                    <ul>
                        <li><strong>هجمات البرمجيات الخبيثة:</strong> الفيروسات، أحصنة طروادة</li>
                        <li><strong>خروقات البيانات:</strong> تسريب المعلومات الحساسة</li>
                        <li><strong>هجمات DDoS:</strong> إنكار الخدمة الموزع</li>
                        <li><strong>التهديدات الداخلية:</strong> أنشطة مشبوهة من المستخدمين الداخليين</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>مراحل الاستجابة (إطار NIST)</h4>
                    <ul>
                        <li><strong>التحضير:</strong> تطوير الخطط والإجراءات</li>
                        <li><strong>الكشف والتحليل:</strong> تحديد وتحليل الحادث</li>
                        <li><strong>الاحتواء والقضاء:</strong> إيقاف انتشار التهديد</li>
                        <li><strong>الاستعادة:</strong> استرداد عمليات النظام</li>
                        <li><strong>الدروس المستفادة:</strong> تحليل الأداء وتحسين الإجراءات</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>الفرق المشاركة</h4>
                    <ul>
                        <li>فريق الاستجابة لحوادث أمن الحاسوب (CSIRT)</li>
                        <li>فريق الطب الشرعي الرقمي</li>
                        <li>فريق الاتصالات والعلاقات العامة</li>
                        <li>الإدارة التنفيذية والقانونية</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>فوائد المحاكاة:</h5>
                    <div class="code-example">
                    🎯 تدريب الفرق على سيناريوهات واقعية
                    ⏱️ تحسين أوقات الاستجابة
                    📋 اختبار فعالية الإجراءات
                    🧠 تطوير مهارات اتخاذ القرار
                    📈 قياس مؤشرات الأداء
                    </div>
                </div>
            `
        },
        aiSecurityAnalyzer: {
            title: "محلل الأمان بالذكاء الاصطناعي",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو محلل الأمان بالذكاء الاصطناعي؟</h4>
                    <p>أداة تحليل أمني متقدمة تستخدم الذكاء الاصطناعي والتعلم الآلي لتحليل البيانات وكشف التهديدات والثغرات الأمنية بدقة عالية.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>قدرات التحليل</h4>
                    <ul>
                        <li><strong>كشف الثغرات:</strong> تحديد نقاط الضعف الأمنية</li>
                        <li><strong>تحليل السلوك:</strong> مراقبة الأنشطة المشبوهة</li>
                        <li><strong>التنبؤ بالتهديدات:</strong> توقع الهجمات المحتملة</li>
                        <li><strong>تحليل البيانات:</strong> فحص البيانات الحساسة</li>
                        <li><strong>التعلم التكيفي:</strong> تحسن النتائج مع الوقت</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>تقنيات الذكاء الاصطناعي</h4>
                    <ul>
                        <li><strong>التعلم الآلي:</strong> خوارزميات تعلم متقدمة</li>
                        <li><strong>الشبكات العصبية:</strong> نمذجة معقدة للبيانات</li>
                        <li><strong>معالجة اللغة الطبيعية:</strong> تحليل النصوص والتقارير</li>
                        <li><strong>التحليل السلوكي:</strong> كشف الأنماط غير الطبيعية</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>فوائد الاستخدام:</h5>
                    <div class="code-example">
                    🤖 تحليل سريع ودقيق
                    🔍 كشف التهديدات المتقدمة
                    📊 تقارير شاملة ومفصلة
                    ⚡ استجابة فورية للتهديدات
                    📈 تحسين الأمان باستمرار
                    </div>
                </div>
            `
        },
        blockchainValidator: {
            title: "مُتحقق أمان البلوك تشين",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو مُتحقق أمان البلوك تشين؟</h4>
                    <p>أداة متخصصة للتحقق من أمان معاملات البلوك تشين والعقود الذكية وتحليل المحافظ الرقمية للمخاطر المحتملة.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>جوانب التحقق</h4>
                    <ul>
                        <li><strong>أمان العقود الذكية:</strong> فحص الثغرات البرمجية</li>
                        <li><strong>تحليل المعاملات:</strong> التحقق من صحة المعاملات</li>
                        <li><strong>أمان المحافظ:</strong> تقييم أمان عناوين المحافظ</li>
                        <li><strong>تحسين الغاز:</strong> تحليل كفاءة استهلاك الغاز</li>
                        <li><strong>الامتثال:</strong> التحقق من المعايير الأمنية</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>الشبكات المدعومة</h4>
                    <ul>
                        <li>إيثيريوم (ETH)</li>
                        <li>بينانس سمارت تشين (BSC)</li>
                        <li>بوليغون (MATIC)</li>
                        <li>أفالانش (AVAX)</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>حالات الاستخدام:</h5>
                    <div class="code-example">
                    💰 فحص أمان المحافظ
                    🔗 تحليل العقود الذكية
                    💸 التحقق من المعاملات
                    ⛽ تحسين رسوم الغاز
                    🛡️ اكتشاف الأنشطة المشبوهة
                    </div>
                </div>
            `
        },
        iotScanner: {
            title: "فاحص أمان أجهزة إنترنت الأشياء",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو فاحص أمان IoT؟</h4>
                    <p>أداة شاملة لفحص وتقييم أمان أجهزة إنترنت الأشياء في شبكتك وكشف نقاط الضعف والثغرات الأمنية.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>ما يتم فحصه</h4>
                    <ul>
                        <li><strong>اكتشاف الأجهزة:</strong> العثور على جميع أجهزة IoT</li>
                        <li><strong>كلمات المرور الافتراضية:</strong> فحص كلمات المرور الضعيفة</li>
                        <li><strong>البروتوكولات الآمنة:</strong> التحقق من استخدام التشفير</li>
                        <li><strong>التحديثات الأمنية:</strong> فحص حالة التحديثات</li>
                        <li><strong>الشبكة المفتوحة:</strong> كشف الخدمات غير المحمية</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>الأجهزة المدعومة</h4>
                    <ul>
                        <li>كاميرات المراقبة الذكية</li>
                        <li>أجهزة التحكم في المنزل الذكي</li>
                        <li>أجهزة الاستشعار</li>
                        <li>الطابعات الذكية</li>
                        <li>أجهزة الشبكة (Router, Switch)</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>نصائح الأمان:</h5>
                    <div class="code-example">
                    🔐 غيّر كلمات المرور الافتراضية
                    🔄 حدّث البرامج الثابتة بانتظام
                    🌐 استخدم شبكة منفصلة لأجهزة IoT
                    🛡️ فعّل التشفير والمصادقة
                    📊 راقب حركة المرور بانتظام
                    </div>
                </div>
            `
        },
        cloudAuditor: {
            title: "مُدقق أمان الحوسبة السحابية",
            icon: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو مُدقق أمان الحوسبة السحابية؟</h4>
                    <p>أداة تدقيق شاملة لتقييم تكوينات أمان البنية التحتية السحابية وضمان الامتثال لأفضل الممارسات الأمنية.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>مجالات التدقيق</h4>
                    <ul>
                        <li><strong>إدارة الهوية والصلاحيات:</strong> مراجعة صلاحيات المستخدمين</li>
                        <li><strong>تشفير البيانات:</strong> التحقق من تشفير البيانات</li>
                        <li><strong>إعدادات الشبكة:</strong> فحص جدران الحماية والشبكات</li>
                        <li><strong>النسخ الاحتياطية:</strong> تقييم استراتيجية النسخ الاحتياطي</li>
                        <li><strong>المراقبة والسجلات:</strong> فحص أنظمة المراقبة</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>مزودو الخدمات المدعومون</h4>
                    <ul>
                        <li>أمازون ويب سيرفيسز (AWS)</li>
                        <li>مايكروسوفت أزور (Azure)</li>
                        <li>جوجل كلاود (GCP)</li>
                        <li>أليباباكلاود</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>فوائد التدقيق:</h5>
                    <div class="code-example">
                    ✅ ضمان الامتثال للمعايير
                    🔒 تحسين الوضعية الأمنية
                    💰 تحسين التكاليف
                    📋 تقارير تدقيق شاملة
                    🚨 إنذارات التكوين الخاطئ
                    </div>
                </div>
            `
        },
        threatIntelligence: {
            title: "محلل استخبارات التهديدات",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو محلل استخبارات التهديدات؟</h4>
                    <p>أداة تحليل متقدمة تجمع وتحلل استخبارات التهديدات من مصادر متعددة لتوفير رؤى شاملة حول التهديدات الحالية والناشئة.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>مؤشرات التهديد المدعومة</h4>
                    <ul>
                        <li><strong>عناوين IP الخبيثة:</strong> تحليل عناوين IP المشبوهة</li>
                        <li><strong>هاش الملفات:</strong> فحص بصمات الملفات الخبيثة</li>
                        <li><strong>النطاقات الخبيثة:</strong> تحليل النطاقات المشبوهة</li>
                        <li><strong>توقيعات البرمجيات الخبيثة:</strong> كشف البرمجيات الضارة</li>
                        <li><strong>مؤشرات التسلل:</strong> علامات الاختراق</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>مصادر الاستخبارات</h4>
                    <ul>
                        <li>قواعد البيانات العامة للتهديدات</li>
                        <li>شبكات مشاركة المعلومات الأمنية</li>
                        <li>مزودو استخبارات التهديدات التجاريون</li>
                        <li>مجتمعات الأمن السيبراني</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>حالات الاستخدام:</h5>
                    <div class="code-example">
                    🔍 فحص المؤشرات المشبوهة
                    📊 تحليل اتجاهات التهديدات
                    🚨 الإنذار المبكر للتهديدات
                    🔗 ربط المؤشرات ببعضها
                    📈 تقييم مستوى المخاطر
                    </div>
                </div>
            `
        },
        zeroDayScanner: {
            title: "فاحص ثغرات اليوم صفر",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو فاحص ثغرات اليوم صفر؟</h4>
                    <p>أداة فحص متقدمة تستخدم تقنيات حديثة لاكتشاف الثغرات الأمنية غير المعروفة (Zero-Day) قبل أن يتم استغلالها من قبل المهاجمين.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>تقنيات الكشف</h4>
                    <ul>
                        <li><strong>التحليل السلوكي:</strong> مراقبة السلوك غير الطبيعي</li>
                        <li><strong>فحص التوقيعات:</strong> البحث عن أنماط معروفة</li>
                        <li><strong>التحليل الديناميكي:</strong> فحص التطبيقات أثناء التشغيل</li>
                        <li><strong>تحليل الذكاء الاصطناعي:</strong> كشف الأنماط المخفية</li>
                        <li><strong>المحاكاة الافتراضية:</strong> اختبار في بيئة آمنة</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>أنواع الثغرات المكتشفة</h4>
                    <ul>
                        <li>ثغرات أنظمة التشغيل</li>
                        <li>ثغرات التطبيقات والبرمجيات</li>
                        <li>ثغرات خدمات الشبكة</li>
                        <li>ثغرات المتصفحات</li>
                        <li>ثغرات البرامج الثابتة</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>أهمية الفحص:</h5>
                    <div class="code-example">
                    🚨 اكتشاف مبكر للتهديدات
                    🛡️ حماية استباقية قبل الهجمات
                    ⏰ كسب الوقت لتطبيق الحلول
                    📊 تقييم شامل للمخاطر
                    🔧 توصيات للحماية
                    </div>
                </div>
            `
        }
    },
    en: {
        passwordStrength: {
            title: "Password Strength Analyzer",
            icon: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",
            content: `
                <div class="explanation-section">
                    <h4>What is this tool?</h4>
                    <p>The Password Strength Analyzer is an advanced tool that performs comprehensive analysis of passwords to determine their strength and security level against cyber attacks.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>How does it work?</h4>
                    <ul>
                        <li>Analyzes password length and complexity</li>
                        <li>Checks for uppercase and lowercase usage</li>
                        <li>Verifies presence of numbers and special characters</li>
                        <li>Evaluates resistance against dictionary attacks</li>
                        <li>Calculates time required to crack the password</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Rating Criteria</h4>
                    <ul>
                        <li><strong>Very Weak:</strong> Less than 8 characters or simple patterns</li>
                        <li><strong>Weak:</strong> 8-10 characters with limited variety</li>
                        <li><strong>Medium:</strong> 11-14 characters with some complexity</li>
                        <li><strong>Strong:</strong> 15+ characters with good variety</li>
                        <li><strong>Very Strong:</strong> 20+ characters with high complexity</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Tips for strong passwords:</h5>
                    <div class="code-example">
                    ✓ Use at least 16+ characters
                    ✓ Mix uppercase and lowercase letters
                    ✓ Add numbers and special symbols (!@#$%^&*)
                    ✓ Avoid personal information
                    ✓ Use meaningful phrases with modifications
                    </div>
                </div>
            `
        },
        entropyCalculator: {
            title: "Password Entropy Calculator",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3V7z",
            content: `
                <div class="explanation-section">
                    <h4>What is entropy?</h4>
                    <p>Password entropy is a mathematical measure that determines the amount of randomness and complexity in a password, and is measured in bits.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>How is it calculated?</h4>
                    <ul>
                        <li>Determining the size of the character set used</li>
                        <li>Calculating the base 2 logarithm of the set size</li>
                        <li>Multiplying the result by the password length</li>
                        <li>Formula: entropy = log₂(set size) × length</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Security Levels</h4>
                    <ul>
                        <li><strong>Less than 40 bits:</strong> Very Weak - easily breakable</li>
                        <li><strong>40-60 bits:</strong> Weak - resistant to simple attacks</li>
                        <li><strong>60-80 bits:</strong> Medium - reasonable protection</li>
                        <li><strong>80-100 bits:</strong> Strong - good protection</li>
                        <li><strong>More than 100 bits:</strong> Very Strong - excellent protection</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Examples of calculations:</h5>
                    <div class="code-example">
                    Password: "abc123" (6 characters)
                    Character set size: 36 (26 letters + 10 digits)
                    Entropy: log₂(36) × 6 ≈ 31 bits (Weak)
                    
                    Password: "MyP@ssw0rd!2023" (14 characters)
                    Character set size: 94 (all letters and symbols)
                    Entropy: log₂(94) × 14 ≈ 91 bits (Strong)
                    </div>
                </div>
            `
        },
        passwordGenerator: {
            title: "Password Generator",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.2 3.2 1-1.73-4.2-2.47V7z",
            content: `
                <div class="explanation-section">
                    <h4>What is a password generator?</h4>
                    <p>An advanced tool that creates strong, random passwords using secure encryption algorithms to ensure maximum protection.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Main Features</h4>
                    <ul>
                        <li>True random generation using Crypto API</li>
                        <li>Full control over password length (8-64 characters)</li>
                        <li>Flexible options for characters and symbols</li>
                        <li>Ensures no pattern repetition</li>
                        <li>Instant evaluation of generated password strength</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Types of characters used</h4>
                    <ul>
                        <li><strong>Lowercase letters:</strong> a-z (26 letters)</li>
                        <li><strong>Uppercase letters:</strong> A-Z (26 letters)</li>
                        <li><strong>Digits:</strong> 0-9 (10 digits)</li>
                        <li><strong>Special symbols:</strong> !@#$%^&*()_+-=[]{}|;:,.<>? (32 symbols)</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Best Practices:</h5>
                    <div class="code-example">
                    ✓ Use a length of 16+ characters for important accounts
                    ✓ Enable all types of characters
                    ✓ Use a different password for each account
                    ✓ Store passwords in a secure password manager
                    ✓ Change passwords regularly
                    </div>
                </div>
            `
        },
        leakChecker: {
            title: "Password Leak Checker",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3V7z",
            content: `
                <div class="explanation-section">
                    <h4>What is a leak checker?</h4>
                    <p>A tool that checks if a password has appeared in known and publicly available breach databases, helping to determine if the password is compromised.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>How does it work?</h4>
                    <ul>
                        <li>Hashes the password using SHA-1</li>
                        <li>Sends the first 5 characters of the hash to the service</li>
                        <li>Compares the full hash locally</li>
                        <li>Never sends the actual password</li>
                        <li>Maintains complete privacy</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Data Sources</h4>
                    <ul>
                        <li><strong>Have I Been Pwned:</strong> Comprehensive breach database</li>
                        <li><strong>Company Breaches:</strong> Facebook, Yahoo, LinkedIn</li>
                        <li><strong>Common Password Lists:</strong> RockYou, SecLists</li>
                        <li><strong>Dictionary Attacks:</strong> Known weak passwords</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>What to do if a leak is found?</h5>
                    <div class="code-example">
                    🚨 Change your password immediately
                    🔐 Use a strong, unique password
                    🔄 Enable two-factor authentication
                    📧 Check linked accounts
                    🔍 Monitor for suspicious activity
                    </div>
                </div>
            `
        },
        fileHashChecker: {
            title: "File Hash Checker",
            icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",
            content: `
                <div class="explanation-section">
                    <h4>What is a File Hash Checker?</h4>
                    <p>An advanced tool for verifying file integrity and authenticity by calculating and analyzing digital hash values of files.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>How does it work?</h4>
                    <ul>
                        <li>Safely reads file content</li>
                        <li>Calculates hash using various algorithms</li>
                        <li>Compares results with reference values</li>
                        <li>Detects any changes or tampering</li>
                        <li>Verifies download integrity</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Use Cases</h4>
                    <ul>
                        <li><strong>Download Verification:</strong> Confirm integrity of downloaded files</li>
                        <li><strong>Tampering Detection:</strong> Identify unauthorized modifications</li>
                        <li><strong>Backup Verification:</strong> Check backup integrity</li>
                        <li><strong>Secure Distribution:</strong> Ensure authenticity across networks</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Practical Examples:</h5>
                    <div class="code-example">
                    ✓ Verify system files
                    ✓ Check software updates
                    ✓ Validate document integrity
                    ✓ Monitor configuration files
                    </div>
                </div>
            `
        },
        base64: {
            title: "Base64 Encoder/Decoder",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3V7z",
            content: `
                <div class="explanation-section">
                    <h4>What is Base64?</h4>
                    <p>Base64 is an encoding system that converts binary data into safe ASCII text for transmission over text-based protocols.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>How does encoding work?</h4>
                    <ul>
                        <li>Divides data into groups of 3 bytes</li>
                        <li>Converts each group into 4 Base64 characters</li>
                        <li>Uses 64 characters: A-Z, a-z, 0-9, +, /</li>
                        <li>Adds padding (=) when needed</li>
                        <li>Results in safe text for transmission</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Common Uses</h4>
                    <ul>
                        <li><strong>Email:</strong> Attaching files in MIME</li>
                        <li><strong>URLs:</strong> Encoding data in links</li>
                        <li><strong>JSON/XML:</strong> Embedding binary data</li>
                        <li><strong>Storage:</strong> Saving data in text databases</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Encoding Example:</h5>
                    <div class="code-example">
                    Text: "CyberGuard"
                    Base64: "Q3liZXJHdWFyZA=="
                    
                    Text: "Hello World"
                    Base64: "SGVsbG8gV29ybGQ="
                    </div>
                </div>
            `
        },
        ipGeolocation: {
            title: "IP Geolocation",
            icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
            content: `
                <div class="explanation-section">
                    <h4>What is IP Geolocation?</h4>
                    <p>A technique for determining the approximate geographic location of an IP address through network and location databases.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>How does it work?</h4>
                    <ul>
                        <li>Searches WHOIS databases</li>
                        <li>Analyzes ISP allocations</li>
                        <li>Matches geographic ranges</li>
                        <li>Aggregates data from multiple sources</li>
                        <li>Estimates approximate location</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Available Information</h4>
                    <ul>
                        <li><strong>Country:</strong> The nation the IP belongs to</li>
                        <li><strong>City:</strong> Approximate regional area</li>
                        <li><strong>ISP:</strong> Internet service provider</li>
                        <li><strong>Timezone:</strong> Local time zone</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Practical Applications:</h5>
                    <div class="code-example">
                    🔍 Analyze website visitors
                    🛡️ Detect suspicious activities
                    📍 Customize content by location
                    ⚖️ Comply with local regulations
                    </div>
                </div>
            `
        },
        hashGenerator: {
            title: "Hash Generator",
            icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",
            content: `
                <div class="explanation-section">
                    <h4>What is a Hash Generator?</h4>
                    <p>An advanced tool that converts text into encrypted hash values using various encryption algorithms to ensure security and data protection.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Supported Hash Algorithms</h4>
                    <ul>
                        <li><strong>MD5:</strong> 128-bit, fast but less secure</li>
                        <li><strong>SHA-1:</strong> 160-bit, medium security</li>
                        <li><strong>SHA-256:</strong> 256-bit, high security</li>
                        <li><strong>SHA-512:</strong> 512-bit, maximum security</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Hash Uses</h4>
                    <ul>
                        <li><strong>Data Integrity Verification:</strong> Detect modifications</li>
                        <li><strong>Password Storage:</strong> Secure protection</li>
                        <li><strong>Digital Signatures:</strong> Confirm authenticity</li>
                        <li><strong>Blockchain:</strong> Cryptocurrency foundation</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Hash Example:</h5>
                    <div class="code-example">
                    Text: "CyberGuard"
                    MD5: a1b2c3d4e5f6...
                    SHA-256: 9a8b7c6d5e4f...
                    
                    Note: Any small change in text produces completely different hash
                    </div>
                </div>
            `
        },
        portScanner: {
            title: "Port Scanner",
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            content: `
                <div class="explanation-section">
                    <h4>What is a Port Scanner?</h4>
                    <p>A network tool that scans open ports on servers and devices to identify active services and potential security vulnerabilities.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>How does it work?</h4>
                    <ul>
                        <li>Sends TCP/UDP requests to specified ports</li>
                        <li>Analyzes responses to determine port status</li>
                        <li>Identifies active services</li>
                        <li>Detects operating system</li>
                        <li>Assesses security vulnerabilities</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Port States</h4>
                    <ul>
                        <li><strong>Open:</strong> Accepts connections</li>
                        <li><strong>Closed:</strong> Refuses connections</li>
                        <li><strong>Filtered:</strong> Blocked by firewall</li>
                        <li><strong>Unfiltered:</strong> Cannot determine state</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Common Port Examples:</h5>
                    <div class="code-example">
                    80: HTTP (Websites)
                    443: HTTPS (Secure websites)
                    22: SSH (Secure access)
                    21: FTP (File transfer)
                    3389: RDP (Remote desktop)
                    </div>
                </div>
            `
        },
        urlChecker: {
            title: "URL Security Checker",
            icon: "M10 6H5c-1.1 0-2 .9-2 2v3h2V8h5V6zm-4 5H4v3c0 1.1.9 2 2 2h5v-2H6v-3zm14-5h-5v2h5v3h2V8c0-1.1-.9-2-2-2zm0 8h-2v3h-5v2h5c1.1 0 2-.9 2-2v-3z",
            content: `
                <div class="explanation-section">
                    <h4>What is URL Security Checker?</h4>
                    <p>An advanced analysis tool that examines links and websites to detect security threats and malicious content before visiting them.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Types of Detected Threats</h4>
                    <ul>
                        <li><strong>Phishing:</strong> Sites that steal personal information</li>
                        <li><strong>Malware:</strong> Viruses and harmful software</li>
                        <li><strong>Scams:</strong> Fraud and deception operations</li>
                        <li><strong>Suspicious Content:</strong> Dubious links</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>How does scanning work?</h4>
                    <ul>
                        <li>Analyzes domain reputation</li>
                        <li>Checks blacklisted sites</li>
                        <li>Analyzes SSL certificates</li>
                        <li>Scans page content</li>
                        <li>Compares with threat databases</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Danger Signs:</h5>
                    <div class="code-example">
                    ⚠️ Anonymous short links
                    🚨 Suspicious domains
                    ❌ Expired SSL certificates
                    🔴 Known malicious content
                    </div>
                </div>
            `
        },
        textCrypto: {
            title: "Text Encryption/Decryption",
            icon: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",
            content: `
                <div class="explanation-section">
                    <h4>What is Text Encryption?</h4>
                    <p>The process of converting plain text into an encrypted, unreadable form to protect sensitive information from unauthorized access.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Supported Encryption Algorithms</h4>
                    <ul>
                        <li><strong>AES:</strong> Advanced Encryption Standard, highly secure</li>
                        <li><strong>Caesar Cipher:</strong> Character shifting, educational</li>
                        <li><strong>ROT13:</strong> 13-character shift, simple</li>
                        <li><strong>Base64:</strong> Safe encoding for transmission</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Encryption Uses</h4>
                    <ul>
                        <li><strong>Personal Data Protection:</strong> Sensitive information</li>
                        <li><strong>Secure Communications:</strong> Secret messages</li>
                        <li><strong>Password Storage:</strong> Account protection</li>
                        <li><strong>Secure Transmission:</strong> Network data protection</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Encryption Example:</h5>
                    <div class="code-example">
                    Original Text: "Secret Message"
                    Key: "MySecretKey123"
                    Encrypted Text: "8f7e9d2a1b..."
                    
                    Note: Keep the key in a safe place!
                    </div>
                </div>
            `
        },
        darkWebScanner: {
            title: "Dark Web Scanner",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3V7z",
            content: `
                <div class="explanation-section">
                    <h4>What is Dark Web Scanner?</h4>
                    <p>A specialized tool for searching personal data and sensitive information in dark web markets and leak sites.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>What is searched for</h4>
                    <ul>
                        <li><strong>Email Addresses:</strong> Compromised accounts</li>
                        <li><strong>Usernames:</strong> Leaked data</li>
                        <li><strong>Passwords:</strong> Security breaches</li>
                        <li><strong>Credit Card Data:</strong> Illegal transactions</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Data Sources</h4>
                    <ul>
                        <li>Dark web markets</li>
                        <li>Hacker forums</li>
                        <li>Breach databases</li>
                        <li>Illegal trading sites</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Protection Measures:</h5>
                    <div class="code-example">
                    🔄 Change passwords immediately
                    🔐 Enable two-factor authentication
                    📧 Monitor financial accounts
                    🚨 Report to authorities
                    🛡️ Use identity monitoring services
                    </div>
                </div>
            `
        },
        trafficSimulator: {
            title: "Network Traffic Simulator",
            icon: "M3 3v18h18V3H3zm8 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z",
            content: `
                <div class="explanation-section">
                    <h4>What is Network Traffic Simulator?</h4>
                    <p>An analysis tool that simulates and monitors data traffic in the network to analyze performance and detect bottlenecks and security threats.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Analysis Metrics</h4>
                    <ul>
                        <li><strong>Transfer Speed:</strong> Data flow rate</li>
                        <li><strong>Response Time:</strong> Network latency</li>
                        <li><strong>Packet Loss:</strong> Percentage of lost data</li>
                        <li><strong>Congestion:</strong> Traffic density</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Practical Uses</h4>
                    <ul>
                        <li><strong>Performance Optimization:</strong> Identify weak points</li>
                        <li><strong>Planning:</strong> Estimate infrastructure needs</li>
                        <li><strong>Attack Detection:</strong> Abnormal traffic patterns</li>
                        <li><strong>Quality Monitoring:</strong> Ensure service level</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Monitoring Indicators:</h5>
                    <div class="code-example">
                    📊 Transfer Rate: 100 Mbps
                    ⏱️ Response Time: 20ms
                    📈 Bandwidth Usage: 75%
                    📦 Lost Packets: 0.1%
                    </div>
                </div>
            `
        },
        sqlInjection: {
            title: "SQL Injection Scanner",
            icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
            content: `
                <div class="explanation-section">
                    <h4>What is SQL Injection?</h4>
                    <p>A type of cyber attack where attackers inject malicious SQL code into input fields to gain unauthorized access to the database.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Types of SQL Attacks</h4>
                    <ul>
                        <li><strong>Union-based:</strong> Merging multiple queries</li>
                        <li><strong>Boolean-based:</strong> Logical queries</li>
                        <li><strong>Time-based:</strong> Time-delay queries</li>
                        <li><strong>Error-based:</strong> Exploiting error messages</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Examples of Malicious Injection</h4>
                    <ul>
                        <li><code>' OR '1'='1</code> - Authentication bypass</li>
                        <li><code>'; DROP TABLE--</code> - Delete tables</li>
                        <li><code>UNION SELECT</code> - Get additional data</li>
                        <li><code>1' AND SLEEP(5)--</code> - Time-based test</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Protection Methods:</h5>
                    <div class="code-example">
                    ✅ Use Prepared Statements
                    ✅ Validate input
                    ✅ Filter special characters
                    ✅ Use minimal privileges
                    ✅ Update database regularly
                    </div>
                </div>
            `
        },
        xssScanner: {
            title: "XSS Vulnerability Scanner",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-5l-1.41-1.41L11.17 11 8.59 8.41 10 7l4 4-4 4z",
            content: `
                <div class="explanation-section">
                    <h4>What is XSS?</h4>
                    <p>Cross-Site Scripting is a security vulnerability that allows attackers to inject malicious scripts into web pages visited by other users.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Types of XSS Attacks</h4>
                    <ul>
                        <li><strong>Reflected XSS:</strong> Script reflected from server immediately</li>
                        <li><strong>Stored XSS:</strong> Script stored in database</li>
                        <li><strong>DOM-based XSS:</strong> Script executes on client side</li>
                        <li><strong>Blind XSS:</strong> Hidden script with delayed execution</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Potential Risks</h4>
                    <ul>
                        <li>Stealing authentication cookies</li>
                        <li>Redirecting to malicious sites</li>
                        <li>Stealing sensitive data</li>
                        <li>Performing unauthorized operations</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Examples of malicious code:</h5>
                    <div class="code-example">
                    &lt;script&gt;alert('XSS')&lt;/script&gt;
                    &lt;img src=x onerror=alert(1)&gt;
                    javascript:alert('XSS')
                    &lt;svg onload=alert(1)&gt;
                    </div>
                </div>
            `
        },
        latencyTester: {
            title: "Latency Tester",
            icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
            content: `
                <div class="explanation-section">
                    <h4>What is a Latency Tester?</h4>
                    <p>A network tool that measures the time required to connect to a server or website, helping analyze connection quality and network performance.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Measurement Metrics</h4>
                    <ul>
                        <li><strong>Ping Time:</strong> Round-trip time for packets</li>
                        <li><strong>DNS Resolution:</strong> Domain name resolution time</li>
                        <li><strong>Connection Time:</strong> Connection establishment time</li>
                        <li><strong>Response Time:</strong> Time to get response</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Result Interpretation</h4>
                    <ul>
                        <li><strong>Less than 50ms:</strong> Excellent</li>
                        <li><strong>50-100ms:</strong> Very Good</li>
                        <li><strong>100-200ms:</strong> Good</li>
                        <li><strong>200-500ms:</strong> Average</li>
                        <li><strong>More than 500ms:</strong> Slow</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Influencing Factors:</h5>
                    <div class="code-example">
                    🌐 Geographic distance
                    🔗 Connection quality
                    ⚡ Server speed
                    🔄 Network congestion
                    🛡️ Firewalls
                    </div>
                </div>
            `
        },
        complexityVisualizer: {
            title: "Password Complexity Visualizer",
            icon: "M3 3v18h18V3H3zm8 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z",
            content: `
                <div class="explanation-section">
                    <h4>What is Complexity Visualizer?</h4>
                    <p>An advanced visual tool that analyzes and displays password complexity through interactive, colored charts for better understanding of security level.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Visual Elements</h4>
                    <ul>
                        <li><strong>Pie Chart:</strong> Distribution of character types</li>
                        <li><strong>Strength Bar:</strong> Overall security level</li>
                        <li><strong>Line Graph:</strong> Strength evolution with length</li>
                        <li><strong>Entropy Indicator:</strong> Mathematical randomness</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Colors and Meanings</h4>
                    <ul>
                        <li><span style="color: #ff4444;">🔴 Red:</span> Very Weak (Danger)</li>
                        <li><span style="color: #ff8800;">🟠 Orange:</span> Weak (Warning)</li>
                        <li><span style="color: #ffcc00;">🟡 Yellow:</span> Medium (Caution)</li>
                        <li><span style="color: #88ff00;">🟢 Light Green:</span> Strong (Good)</li>
                        <li><span style="color: #00ff88;">🟢 Dark Green:</span> Very Strong (Excellent)</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>How to Use:</h5>
                    <div class="code-example">
                    🎯 Enter a password to analyze it
                    📊 Watch the visual indicators
                    🔍 Ensure balance between colors
                    ✨ Aim for dark green color
                    </div>
                </div>
            `
        },
        wifiAnalyzer: {
            title: "WiFi Security Analyzer",
            icon: "M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z",
            content: `
                <div class="explanation-section">
                    <h4>What is WiFi Security Analyzer?</h4>
                    <p>A comprehensive tool that evaluates your WiFi network security by analyzing SSID strength, password complexity, and encryption protocols to identify vulnerabilities.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Security Checks</h4>
                    <ul>
                        <li><strong>SSID Analysis:</strong> Network name security evaluation</li>
                        <li><strong>Password Strength:</strong> WiFi password complexity assessment</li>
                        <li><strong>Encryption Protocol:</strong> WPA/WPA2/WPA3 verification</li>
                        <li><strong>Default Settings:</strong> Detection of factory defaults</li>
                        <li><strong>Broadcasting:</strong> Hidden network analysis</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Security Recommendations:</h5>
                    <div class="code-example">
                    🔐 Use WPA3 encryption when available
                    🔑 Set strong 20+ character passwords
                    📡 Change default SSID names
                    🚫 Disable WPS feature
                    🔄 Regular password updates
                    </div>
                </div>
            `
        },
        emailSecurity: {
            title: "Email Security Checker",
            icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
            content: `
                <div class="explanation-section">
                    <h4>What is Email Security Checker?</h4>
                    <p>An advanced email security assessment tool that analyzes email addresses for potential security risks, breach exposure, and domain reputation.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Security Assessments</h4>
                    <ul>
                        <li><strong>Domain Reputation:</strong> Email provider security rating</li>
                        <li><strong>Breach Database:</strong> Known data leak verification</li>
                        <li><strong>Format Validation:</strong> Email structure integrity</li>
                        <li><strong>Disposable Detection:</strong> Temporary email identification</li>
                        <li><strong>MX Record Analysis:</strong> Mail server security</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Email Security Tips:</h5>
                    <div class="code-example">
                    ✉️ Use reputable email providers
                    🔐 Enable 2FA authentication
                    🚫 Avoid public WiFi for email
                    🔄 Regular password changes
                    📧 Monitor for suspicious activity
                    </div>
                </div>
            `
        },
        qrSecurity: {
            title: "QR Code Security Scanner",
            icon: "M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4z",
            content: `
                <div class="explanation-section">
                    <h4>What is QR Security Scanner?</h4>
                    <p>A specialized tool that analyzes QR codes for potential security threats, malicious URLs, and suspicious patterns before you scan them.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Threat Detection</h4>
                    <ul>
                        <li><strong>URL Analysis:</strong> Link safety verification</li>
                        <li><strong>Phishing Detection:</strong> Suspicious pattern identification</li>
                        <li><strong>Malware Scanning:</strong> Malicious content detection</li>
                        <li><strong>Domain Reputation:</strong> Website trustworthiness check</li>
                        <li><strong>Redirect Analysis:</strong> Hidden destination tracking</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>QR Code Safety:</h5>
                    <div class="code-example">
                    🔍 Always verify QR source
                    📱 Use trusted QR scanner apps
                    🚫 Avoid unknown QR codes
                    🔗 Check URLs before visiting
                    🛡️ Keep devices updated
                    </div>
                </div>
            `
        },
        steganography: {
            title: "Steganography Detector",
            icon: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z",
            content: `
                <div class="explanation-section">
                    <h4>What is Steganography Detection?</h4>
                    <p>A forensic tool that analyzes images for hidden data embedded using steganographic techniques, helping detect covert communications.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Detection Methods</h4>
                    <ul>
                        <li><strong>LSB Analysis:</strong> Least Significant Bit examination</li>
                        <li><strong>Statistical Analysis:</strong> Pixel distribution patterns</li>
                        <li><strong>Frequency Domain:</strong> DCT coefficient analysis</li>
                        <li><strong>File Size Anomalies:</strong> Unusual size-to-content ratios</li>
                        <li><strong>Metadata Inspection:</strong> EXIF data examination</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Use Cases:</h5>
                    <div class="code-example">
                    🕵️ Digital forensics investigations
                    🔒 Corporate security audits
                    📧 Email attachment screening
                    🌐 Social media content analysis
                    🎯 Malware detection
                    </div>
                </div>
            `
        },
        socialEngineering: {
            title: "Social Engineering Analyzer",
            icon: "M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.996 2.996 0 0 0 17.09 7H16c-.8 0-1.54.37-2.01.99L12 10.5z",
            content: `
                <div class="explanation-section">
                    <h4>What is Social Engineering Analysis?</h4>
                    <p>An intelligent tool that analyzes messages, emails, and communications for social engineering tactics and manipulation techniques.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Detection Patterns</h4>
                    <ul>
                        <li><strong>Urgency Indicators:</strong> Time pressure tactics</li>
                        <li><strong>Authority Impersonation:</strong> False authority claims</li>
                        <li><strong>Emotional Manipulation:</strong> Fear, greed, curiosity triggers</li>
                        <li><strong>Information Requests:</strong> Sensitive data solicitation</li>
                        <li><strong>Trust Exploitation:</strong> Relationship abuse patterns</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Protection Strategies:</h5>
                    <div class="code-example">
                    🤔 Always verify unexpected requests
                    📞 Call back using official numbers
                    🚫 Never share passwords via email
                    ⏰ Take time to think before acting
                    👥 Consult colleagues on suspicious requests
                    </div>
                </div>
            `
        },
        osintGatherer: {
            title: "OSINT Information Gatherer",
            icon: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z",
            content: `
                <div class="explanation-section">
                    <h4>What is OSINT Gathering?</h4>
                    <p>Open Source Intelligence collection tool that gathers publicly available information about domains, emails, and usernames for security research.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Information Sources</h4>
                    <ul>
                        <li><strong>Domain Records:</strong> WHOIS, DNS, SSL certificates</li>
                        <li><strong>Social Media:</strong> Public profiles and posts</li>
                        <li><strong>Breach Databases:</strong> Known data leaks</li>
                        <li><strong>Search Engines:</strong> Cached and indexed content</li>
                        <li><strong>Public Directories:</strong> Business and personal listings</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>⚠️ Ethical Guidelines:</h5>
                    <div class="code-example">
                    ✅ Use only for legitimate security research
                    ✅ Respect privacy and legal boundaries
                    ✅ Obtain proper authorization
                    ❌ Never use for harassment
                    ❌ Don't violate terms of service
                    </div>
                </div>
            `
        },
        passwordPolicy: {
            title: "Password Policy Generator",
            icon: "M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3l-1-1h-6L8 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z",
            content: `
                <div class="explanation-section">
                    <h4>What is Password Policy Generator?</h4>
                    <p>A comprehensive tool that creates customized password policies based on organization type and security requirements for enterprise deployment.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Policy Components</h4>
                    <ul>
                        <li><strong>Length Requirements:</strong> Minimum/maximum character limits</li>
                        <li><strong>Complexity Rules:</strong> Character type requirements</li>
                        <li><strong>Expiration Policies:</strong> Password aging and rotation</li>
                        <li><strong>History Tracking:</strong> Previous password prevention</li>
                        <li><strong>Lockout Settings:</strong> Failed attempt thresholds</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Implementation Tips:</h5>
                    <div class="code-example">
                    📋 Document policies clearly
                    🎓 Train users on requirements
                    🔄 Regular policy reviews
                    🛠️ Use policy enforcement tools
                    📊 Monitor compliance metrics
                    </div>
                </div>
            `
        },
        domainAnalyzer: {
            title: "Domain Security Analyzer",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
            content: `
                <div class="explanation-section">
                    <h4>What is Domain Security Analyzer?</h4>
                    <p>A comprehensive analysis tool that examines domain and website security by evaluating multiple important security aspects.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Analysis Aspects</h4>
                    <ul>
                        <li><strong>Domain Age:</strong> Check domain registration history</li>
                        <li><strong>SSL Certificate:</strong> Verify security certificate validity</li>
                        <li><strong>Blacklists:</strong> Check domain presence in malicious site lists</li>
                        <li><strong>Domain Reputation:</strong> Assess trust and reliability</li>
                        <li><strong>DNS Records:</strong> Examine DNS configurations</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Security Indicators:</h5>
                    <div class="code-example">
                    ✅ Old domain (5+ years) = Trustworthy
                    ✅ Valid SSL certificate = Secure
                    ✅ Not in blacklists = Clean
                    ⚠️ Recent domain = Needs verification
                    🚨 SSL issues = Potential risk
                    </div>
                </div>
            `
        },
        sslChecker: {
            title: "SSL Certificate Checker",
            icon: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM16 16h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z",
            content: `
                <div class="explanation-section">
                    <h4>What is SSL Certificate Checker?</h4>
                    <p>A specialized tool that examines and analyzes SSL/TLS certificates for websites to verify their validity and security strength.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>What Gets Checked</h4>
                    <ul>
                        <li><strong>Certificate Validity:</strong> Verify certificate authenticity</li>
                        <li><strong>Issuer:</strong> Check certificate authority</li>
                        <li><strong>Expiration Date:</strong> Monitor certificate expiry</li>
                        <li><strong>Encryption Strength:</strong> Key size (2048/4096 bit)</li>
                        <li><strong>Algorithm:</strong> Type of signature algorithm used</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Security Indicators:</h5>
                    <div class="code-example">
                    🔒 Valid certificate = Secure connection
                    ⏰ Valid for 30+ days = Good
                    🔑 2048+ bit key = Strong encryption
                    🏢 Trusted issuer = Certified certificate
                    ⚠️ Expiring soon = Update required
                    </div>
                </div>
            `
        },
        fileSignature: {
            title: "File Signature Analyzer",
            icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13zm-3 1c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
            content: `
                <div class="explanation-section">
                    <h4>What is File Signature Analyzer?</h4>
                    <p>A digital forensics tool that analyzes internal file signatures (File Signature/Magic Number) to detect the true file type.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>How Analysis Works</h4>
                    <ul>
                        <li><strong>Header Reading:</strong> Examine first 16 bytes of file</li>
                        <li><strong>Signature Comparison:</strong> Match against signature database</li>
                        <li><strong>Tampering Detection:</strong> Compare extension with actual type</li>
                        <li><strong>Structure Analysis:</strong> Examine internal file structure</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Common Signature Examples</h4>
                    <ul>
                        <li><code>FF D8 FF</code> = JPEG file</li>
                        <li><code>89 50 4E 47</code> = PNG file</li>
                        <li><code>25 50 44 46</code> = PDF file</li>
                        <li><code>50 4B 03 04</code> = ZIP file</li>
                        <li><code>4D 5A</code> = Windows executable</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Use Cases:</h5>
                    <div class="code-example">
                    🕵️ Digital forensic investigation
                    🦠 Detect disguised malware
                    📧 Email attachment scanning
                    🔒 File integrity verification
                    ⚠️ Detect file type hiding attempts
                    </div>
                </div>
            `
        },
        browserSecurity: {
            title: "Browser Security Checker",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
            content: `
                <div class="explanation-section">
                    <h4>What is Browser Security Checker?</h4>
                    <p>A comprehensive assessment tool that examines your browser's current security settings and identifies potential weaknesses and risks.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>What Gets Checked</h4>
                    <ul>
                        <li><strong>Connection Protocol:</strong> HTTPS vs HTTP</li>
                        <li><strong>Cookie Settings:</strong> Cookie enablement status</li>
                        <li><strong>JavaScript:</strong> Script enablement status</li>
                        <li><strong>Local Storage:</strong> Local storage access capability</li>
                        <li><strong>Do Not Track:</strong> Tracking prevention settings</li>
                        <li><strong>WebRTC:</strong> Direct communication technology support</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Security Enhancement Tips:</h5>
                    <div class="code-example">
                    🔒 Always use HTTPS
                    🍪 Review cookie settings
                    🚫 Enable Do Not Track
                    🔄 Keep browser updated
                    🛡️ Use security extensions
                    🔐 Enable two-factor authentication
                    </div>
                </div>
            `
        },
        metadataExtractor: {
            title: "Metadata Extractor",
            icon: "M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3l-1-1h-6L8 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z",
            content: `
                <div class="explanation-section">
                    <h4>What is Metadata Extractor?</h4>
                    <p>An analysis tool that extracts hidden metadata from files, which may contain sensitive information.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Types of Extracted Data</h4>
                    <ul>
                        <li><strong>File Information:</strong> Name, size, creation date</li>
                        <li><strong>EXIF Data:</strong> Camera information and GPS location</li>
                        <li><strong>Creation Software:</strong> Program used to create file</li>
                        <li><strong>Author Information:</strong> File creator name</li>
                        <li><strong>GPS Data:</strong> Location coordinates (in photos)</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Privacy Concerns</h4>
                    <ul>
                        <li>Location leakage from photos</li>
                        <li>File creator identity exposure</li>
                        <li>Used device information</li>
                        <li>Sensitive dates and information</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Protection Tips:</h5>
                    <div class="code-example">
                    🗑️ Remove metadata before sharing
                    📍 Disable GPS in camera
                    🔧 Use metadata cleaning tools
                    ⚠️ Be careful sharing personal photos
                    🔒 Review privacy settings
                    </div>
                </div>
            `
        },
        keyloggerSimulator: {
            title: "Keylogger Simulator",
            icon: "M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z",
            content: `
                <div class="explanation-section">
                    <h4>⚠️ What is Keylogger Simulator?</h4>
                    <p><strong>This is an educational tool</strong> that simulates keylogging software behavior to understand how it works and how to protect against it.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>How Keyloggers Work</h4>
                    <ul>
                        <li><strong>Keystroke Recording:</strong> Every character and key pressed</li>
                        <li><strong>Data Storage:</strong> Save recorded information</li>
                        <li><strong>Secret Transmission:</strong> Send data to attacker</li>
                        <li><strong>Hidden Operation:</strong> Run without user knowledge</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Potential Risks</h4>
                    <ul>
                        <li>Password theft</li>
                        <li>Credit card information recording</li>
                        <li>Personal data theft</li>
                        <li>Personal activity monitoring</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Protection Methods:</h5>
                    <div class="code-example">
                    🛡️ Use strong antivirus software
                    🔐 Enable firewall
                    ⌨️ Use virtual keyboard for sensitive data
                    🔄 Update OS and software regularly
                    🚫 Avoid downloading from unknown sources
                    </div>
                </div>
            `
        },
        phishingGenerator: {
            title: "Phishing Link Generator (Educational)",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 19c-3.87 0-7-3.13-7-7 0-1.26.33-2.44.91-3.47L8.5 10l3.5-2.5L15.5 10l2.59-1.47c.58 1.03.91 2.21.91 3.47 0 3.87-3.13 7-7 7z",
            content: `
                <div class="explanation-section">
                    <h4>⚠️ Educational Phishing Examples Generator</h4>
                    <p><strong>This is purely educational</strong> to understand common phishing techniques and protect against them. <span style="color: #ff4500;">Prohibited for malicious use!</span></p>
                </div>
                
                <div class="explanation-section">
                    <h4>Common Phishing Techniques</h4>
                    <ul>
                        <li><strong>Character Substitution:</strong> Similar characters (0 instead of O)</li>
                        <li><strong>Fake Subdomains:</strong> Adding suspicious parts</li>
                        <li><strong>Different Extensions:</strong> Using .net instead of .com</li>
                        <li><strong>Word Addition:</strong> "secure-" or "login-"</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>🚨 Important Warnings</h4>
                    <ul>
                        <li><span style="color: #ff4500;">Prohibited to create real phishing sites</span></li>
                        <li><span style="color: #ff4500;">Do not use these examples to deceive people</span></li>
                        <li><span style="color: #ff4500;">Educational and awareness purpose only</span></li>
                        <li><span style="color: #ff4500;">Violation exposes you to legal consequences</span></li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>How to Protect:</h5>
                    <div class="code-example">
                    🔍 Always verify the complete URL
                    🔒 Look for correct SSL certificate
                    📧 Beware of links in suspicious emails
                    🌐 Type website addresses manually
                    ⚠️ Don't trust shortened links
                    </div>
                </div>
            `
        },
        vpnTester: {
            title: "VPN Security Tester",
            icon: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
            content: `
                <div class="explanation-section">
                    <h4>What is VPN Security Tester?</h4>
                    <p>A comprehensive assessment tool that tests VPN service effectiveness in protecting your privacy and hiding your digital identity.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Tests Performed</h4>
                    <ul>
                        <li><strong>IP Leak:</strong> Verify real IP address hiding</li>
                        <li><strong>DNS Leak:</strong> Check DNS query leakage</li>
                        <li><strong>WebRTC Leak:</strong> Detect WebRTC leaks</li>
                        <li><strong>Encryption Strength:</strong> Assess encryption level used</li>
                        <li><strong>Connection Speed:</strong> Measure VPN impact on speed</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Types of Leaks</h4>
                    <ul>
                        <li><strong>IP Leak:</strong> Real IP address exposure</li>
                        <li><strong>DNS Leak:</strong> Local DNS server leakage</li>
                        <li><strong>WebRTC Leak:</strong> IP exposure via web browser</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Secure VPN Signs:</h5>
                    <div class="code-example">
                    ✅ No IP leaks detected
                    ✅ Protected and encrypted DNS
                    ✅ WebRTC blocked or secure
                    ✅ AES-256 encryption
                    ✅ Secure protocols (OpenVPN/WireGuard)
                    </div>
                </div>
            `
        },
        ransomwareSimulator: {
            title: "Ransomware Simulator (Educational)",
            icon: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm3 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
            content: `
                <div class="explanation-section">
                    <h4>⚠️ Educational Ransomware Simulator</h4>
                    <p><strong>This is an educational and training tool</strong> to understand how ransomware works and protection methods. <span style="color: #ff4500;">Strictly prohibited for malicious use!</span></p>
                </div>
                
                <div class="explanation-section">
                    <h4>Simulation Scenarios</h4>
                    <ul>
                        <li><strong>File Encryption:</strong> Simulate file encryption process</li>
                        <li><strong>System Lock:</strong> Simulate system access lock</li>
                        <li><strong>Network Spread:</strong> Analyze ransomware propagation</li>
                        <li><strong>Recovery Process:</strong> Train on recovery steps</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>🚨 Legal Warnings</h4>
                    <ul>
                        <li><span style="color: #ff4500;">Do not use to create real ransomware</span></li>
                        <li><span style="color: #ff4500;">Educational and training purpose only</span></li>
                        <li><span style="color: #ff4500;">Any malicious use exposes you to legal consequences</span></li>
                        <li><span style="color: #ff4500;">Get permission before training in corporate environment</span></li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Protection Strategies:</h5>
                    <div class="code-example">
                    💾 Regular and isolated backups
                    🔄 Continuous security updates
                    🛡️ Advanced antivirus software
                    🚫 Avoid suspicious attachments and links
                    👥 Employee security awareness training
                    </div>
                </div>
            `
        },
        aiSecurityAnalyzer: {
            title: "AI Security Analyzer",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z",
            content: `
                <div class="explanation-section">
                    <h4>What is AI Security Analyzer?</h4>
                    <p>An advanced analysis tool that uses artificial intelligence and machine learning to examine data and detect complex threats and suspicious patterns.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Advanced Analysis Capabilities</h4>
                    <ul>
                        <li><strong>Machine Learning:</strong> Detect complex malicious patterns</li>
                        <li><strong>Behavioral Analysis:</strong> Monitor abnormal activities</li>
                        <li><strong>Statistical Anomaly:</strong> Detect data deviations</li>
                        <li><strong>Predictive Analysis:</strong> Forecast future threats</li>
                        <li><strong>Smart Correlation:</strong> Connect different indicators</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>AI Technologies Used</h4>
                    <ul>
                        <li>Deep neural networks for detection</li>
                        <li>Reinforcement learning algorithms</li>
                        <li>Natural language processing for text</li>
                        <li>Image and file analysis</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Advanced Use Cases:</h5>
                    <div class="code-example">
                    🤖 Detect unknown malware
                    🕵️ Analyze suspicious activities
                    📊 Comprehensive risk assessment
                    🔮 Attack prediction
                    🧠 Intelligent behavior analysis
                    </div>
                </div>
            `
        },
        blockchainValidator: {
            title: "Blockchain Security Validator",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
            content: `
                <div class="explanation-section">
                    <h4>What is Blockchain Security Validator?</h4>
                    <p>A specialized tool for verifying blockchain transaction security, smart contracts, and analyzing digital wallets for potential risks.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Validation Aspects</h4>
                    <ul>
                        <li><strong>Smart Contract Security:</strong> Check for programming vulnerabilities</li>
                        <li><strong>Transaction Analysis:</strong> Verify transaction validity</li>
                        <li><strong>Wallet Security:</strong> Assess wallet address security</li>
                        <li><strong>Gas Optimization:</strong> Analyze gas consumption efficiency</li>
                        <li><strong>Compliance:</strong> Verify security standards</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Supported Networks</h4>
                    <ul>
                        <li>Ethereum (ETH)</li>
                        <li>Binance Smart Chain (BSC)</li>
                        <li>Polygon (MATIC)</li>
                        <li>Avalanche (AVAX)</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Analysis Types:</h5>
                    <div class="code-example">
                    🔗 Transaction hash analysis
                    💰 Wallet security check
                    📜 Smart contract audit
                    ⚡ Gas fee optimization
                    🛡️ Suspicious activity detection
                    </div>
                </div>
            `
        },
        iotScanner: {
            title: "IoT Device Security Scanner",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
            content: `
                <div class="explanation-section">
                    <h4>What is IoT Device Security Scanner?</h4>
                    <p>A specialized scanning tool that discovers and analyzes Internet of Things devices on the network and assesses their security level and vulnerabilities.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Scannable Devices</h4>
                    <ul>
                        <li><strong>Security Cameras:</strong> IP cameras and surveillance</li>
                        <li><strong>Home Devices:</strong> Routers, printers, smart TVs</li>
                        <li><strong>Sensors:</strong> Temperature and motion sensors</li>
                        <li><strong>Smart Assistants:</strong> Alexa, Google Home</li>
                        <li><strong>Control Systems:</strong> Industrial control systems</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Common Vulnerabilities</h4>
                    <ul>
                        <li>Weak default passwords</li>
                        <li>Outdated firmware</li>
                        <li>Insecure communication protocols</li>
                        <li>Weak or missing encryption</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Recommended Security Improvements:</h5>
                    <div class="code-example">
                    🔐 Change default passwords
                    🔄 Enable automatic updates
                    🏠 Create separate IoT network
                    🛡️ Enable firewall
                    📱 Monitor network traffic
                    </div>
                </div>
            `
        },
        cloudAuditor: {
            title: "Cloud Security Auditor",
            icon: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
            content: `
                <div class="explanation-section">
                    <h4>What is Cloud Security Auditor?</h4>
                    <p>A comprehensive auditing tool that examines security configurations in cloud environments and identifies vulnerabilities and compliance risks.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Supported Cloud Platforms</h4>
                    <ul>
                        <li><strong>Amazon AWS:</strong> EC2, S3, IAM, Lambda</li>
                        <li><strong>Microsoft Azure:</strong> Virtual Machines, Storage, Active Directory</li>
                        <li><strong>Google Cloud:</strong> Compute Engine, Cloud Storage, IAM</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Audit Aspects</h4>
                    <ul>
                        <li><strong>Identity and Access Management:</strong> User permissions</li>
                        <li><strong>Data Encryption:</strong> Protection of stored and transmitted data</li>
                        <li><strong>Network Security:</strong> Firewalls and access rules</li>
                        <li><strong>Monitoring and Logging:</strong> Activity logging and monitoring</li>
                        <li><strong>Backup Systems:</strong> Backup strategies</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Compliance Standards:</h5>
                    <div class="code-example">
                    🏛️ GDPR - European Data Protection
                    🏢 SOC 2 - Service Security
                    📋 ISO 27001 - Information Security Management
                    🏦 PCI DSS - Payment Card Security
                    🇺🇸 HIPAA - Health Information Protection
                    </div>
                </div>
            `
        },
        threatIntelligence: {
            title: "Threat Intelligence Analyzer",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 19c-3.87 0-7-3.13-7-7 0-1.26.33-2.44.91-3.47L8.5 10l3.5-2.5L15.5 10l2.59-1.47c.58 1.03.91 2.21.91 3.47 0 3.87-3.13 7-7 7z",
            content: `
                <div class="explanation-section">
                    <h4>What is Threat Intelligence Analyzer?</h4>
                    <p>An advanced analysis tool that gathers and analyzes information about cyber threats from multiple sources to provide comprehensive intelligence insights.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Intelligence Sources</h4>
                    <ul>
                        <li><strong>VirusTotal:</strong> File and URL analysis</li>
                        <li><strong>AlienVault OTX:</strong> Open source intelligence</li>
                        <li><strong>IBM X-Force:</strong> Threat database</li>
                        <li><strong>Hybrid Analysis:</strong> Malware analysis</li>
                        <li><strong>URLVoid:</strong> Website reputation check</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Analyzable Indicator Types</h4>
                    <ul>
                        <li>Suspicious IP addresses</li>
                        <li>Malicious domain names</li>
                        <li>Suspicious file hashes</li>
                        <li>Malicious URLs</li>
                        <li>Email addresses</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Analysis Information:</h5>
                    <div class="code-example">
                    🎯 Identify threat type
                    📊 Assess risk level
                    🌍 Identify affected countries
                    📅 Track activity history
                    🔗 Link malicious campaigns
                    </div>
                </div>
            `
        },
        zeroDayScanner: {
            title: "Zero-Day Vulnerability Scanner",
            icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13zm-3 1c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
            content: `
                <div class="explanation-section">
                    <h4>What is Zero-Day Vulnerability Scanner?</h4>
                    <p>An advanced scanning tool designed to discover unknown security vulnerabilities (Zero-Day) that have not been disclosed or patched yet.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Advanced Scanning Techniques</h4>
                    <ul>
                        <li><strong>Static Analysis:</strong> Code examination without execution</li>
                        <li><strong>Dynamic Analysis:</strong> Behavior monitoring during execution</li>
                        <li><strong>Fuzzing:</strong> Random data testing</li>
                        <li><strong>Pattern Recognition:</strong> Vulnerability pattern recognition</li>
                        <li><strong>Symbolic Execution:</strong> Symbolic path analysis</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Detectable Vulnerability Types</h4>
                    <ul>
                        <li>Buffer Overflow and Memory Corruption</li>
                        <li>Race Conditions</li>
                        <li>Logic Flaws in applications</li>
                        <li>Privilege Escalation</li>
                        <li>Authentication Bypass</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Scanning Modes</h4>
                    <ul>
                        <li><strong>Deep Scan:</strong> Comprehensive detailed analysis</li>
                        <li><strong>Stealth Mode:</strong> Hidden scanning to avoid detection</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Advanced Uses:</h5>
                    <div class="code-example">
                    🔍 Advanced penetration testing
                    🛡️ Comprehensive security assessment
                    📋 Source code review
                    🏢 Enterprise application security
                    🔬 Advanced security research
                    </div>
                </div>
            `
        },
        quantumCrypto: {
            title: "Quantum-Resistant Crypto Analyzer",
            icon: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM16 16h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z",
            content: `
                <div class="explanation-section">
                    <h4>What is Quantum-Resistant Crypto Analyzer?</h4>
                    <p>An advanced analysis tool that evaluates current encryption systems' resistance against future quantum attacks and recommends secure alternatives.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Quantum Threat</h4>
                    <ul>
                        <li><strong>Shor's Algorithm:</strong> Breaking RSA and ECC</li>
                        <li><strong>Grover's Algorithm:</strong> Reducing symmetric encryption strength</li>
                        <li><strong>Quantum Computing:</strong> Accelerating complex calculations</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Post-Quantum Algorithms</h4>
                    <ul>
                        <li><strong>Lattice-based:</strong> Kyber, NTRU</li>
                        <li><strong>Hash-based:</strong> SPHINCS+</li>
                        <li><strong>Code-based:</strong> Classic McEliece</li>
                        <li><strong>Multivariate:</strong> Rainbow</li>
                        <li><strong>Isogeny-based:</strong> SIKE</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Evaluation Criteria</h4>
                    <ul>
                        <li>Resistance to Shor and Grover algorithms</li>
                        <li>Key and signature sizes</li>
                        <li>Computational operation speed</li>
                        <li>Mathematical confidence level</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Migration Plan:</h5>
                    <div class="code-example">
                    📊 Assess current encryption
                    🔄 Choose suitable alternatives
                    📅 Plan gradual migration
                    🧪 Test compatibility
                    🛡️ Implement hybrid protection
                    </div>
                </div>
            `
        },
        incidentResponse: {
            title: "Incident Response Simulator",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
            content: `
                <div class="explanation-section">
                    <h4>What is Incident Response Simulator?</h4>
                    <p>An advanced training tool that simulates realistic cybersecurity incident scenarios and trains teams on appropriate response procedures.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Simulated Incident Types</h4>
                    <ul>
                        <li><strong>Malware Attacks:</strong> Viruses, trojans</li>
                        <li><strong>Data Breaches:</strong> Sensitive information leakage</li>
                        <li><strong>DDoS Attacks:</strong> Distributed denial of service</li>
                        <li><strong>Insider Threats:</strong> Suspicious activity from internal users</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Response Phases (NIST Framework)</h4>
                    <ul>
                        <li><strong>Preparation:</strong> Develop plans and procedures</li>
                        <li><strong>Detection and Analysis:</strong> Identify and analyze incident</li>
                        <li><strong>Containment and Eradication:</strong> Stop threat spread</li>
                        <li><strong>Recovery:</strong> Restore system operations</li>
                        <li><strong>Lessons Learned:</strong> Analyze performance and improve procedures</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Participating Teams</h4>
                    <ul>
                        <li>Computer Security Incident Response Team (CSIRT)</li>
                        <li>Digital Forensics Team</li>
                        <li>Communications and Public Relations Team</li>
                        <li>Executive Management and Legal</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Simulation Benefits:</h5>
                    <div class="code-example">
                    🎯 Train teams on realistic scenarios
                    ⏱️ Improve response times
                    📋 Test procedure effectiveness
                    🧠 Develop decision-making skills
                    📈 Measure performance metrics
                    </div>
                </div>
            `
        }
        // Add more tools here...
    }
};

// Tool Explanation Modal Functions
function explainTool(toolId) {
    try {
        const explanation = toolExplanations[currentLang][toolId];
        
        if (!explanation) {
            console.warn(`No explanation found for tool: ${toolId}`);
            return;
        }
        
        // Update modal content
        const modal = document.getElementById('toolExplanationModal');
        const titleText = document.getElementById('explanationTitleText');
        const iconPath = document.querySelector('#explanationIcon path');
        const body = document.getElementById('explanationBody');
        
        if (!modal || !titleText || !iconPath || !body) {
            console.error('Modal elements not found');
            return;
        }
        
        titleText.textContent = explanation.title;
        iconPath.setAttribute('d', explanation.icon);
        body.innerHTML = explanation.content;
        
        // Show modal with proper animation
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        
        // Add event listeners for closing
        const closeHandler = function(e) {
            if (e.target === modal) {
                closeToolExplanation();
            }
        };
        
        const keyHandler = function(e) {
            if (e.key === 'Escape') {
                closeToolExplanation();
                document.removeEventListener('keydown', keyHandler);
            }
        };
        
        modal.addEventListener('click', closeHandler);
        document.addEventListener('keydown', keyHandler);
        
        // Store handlers for cleanup
        modal._closeHandler = closeHandler;
        modal._keyHandler = keyHandler;
        
    } catch (e) {
        console.error('Error showing tool explanation:', e);
    }
}

function closeToolExplanation() {
    try {
        const modal = document.getElementById('toolExplanationModal');
        
        // Remove show class first for animation
        modal.classList.remove('show');
        
        // Hide modal after animation
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
        
        // Clean up event listeners
        if (modal._closeHandler) {
            modal.removeEventListener('click', modal._closeHandler);
            modal._closeHandler = null;
        }
        
        if (modal._keyHandler) {
            document.removeEventListener('keydown', modal._keyHandler);
            modal._keyHandler = null;
        }
        
    } catch (e) {
        console.error('Error closing tool explanation:', e);
    }
}

// Get current language helper function
function getCurrentLanguage() {
    return currentLang;
}

// Platform Info Modal Functions
function showPlatformInfo() {
    try {
        const modal = document.getElementById('platformInfoModal');
        modal.classList.add('show');
    } catch (e) {
        console.error('Error showing platform info:', e);
    }
}

function closePlatformInfo() {
    try {
        const modal = document.getElementById('platformInfoModal');
        modal.classList.remove('show');
    } catch (e) {
        console.error('Error closing platform info:', e);
    }
}

// Developer Info Modal Functions
function showDeveloperInfo() {
    try {
        const modal = document.getElementById('developerInfoModal');
        modal.classList.add('show');
    } catch (e) {
        console.error('Error showing developer info:', e);
    }
}

function closeDeveloperInfo() {
    try {
        const modal = document.getElementById('developerInfoModal');
        modal.classList.remove('show');
    } catch (e) {
        console.error('Error closing developer info:', e);
    }
}

// Update modal content language
function updateModalLanguage() {
    try {
        // Update platform info modal
        const platformModal = document.getElementById('platformInfoModal');
        if (platformModal) {
            platformModal.querySelectorAll('[data-en][data-ar]').forEach(elem => {
                const newText = elem.getAttribute(`data-${currentLang}`);
                if (newText) {
                    elem.textContent = newText;
                    elem.innerHTML = newText;
                }
            });
        }
        
        // Update developer info modal
        const developerModal = document.getElementById('developerInfoModal');
        if (developerModal) {
            developerModal.querySelectorAll('[data-en][data-ar]').forEach(elem => {
                const newText = elem.getAttribute(`data-${currentLang}`);
                if (newText) {
                    elem.textContent = newText;
                    elem.innerHTML = newText;
                }
            });
        }
    } catch (e) {
        console.error('Error updating modal language:', e);
    }
}

// Enhanced Language Switching with Modal Support

// Password Strength Analyzer
function analyzePassword() {
    try {
        const password = document.getElementById('password').value;
        const resultBox = document.getElementById('passwordResult');
        const strengthBars = document.querySelectorAll('#strengthIndicator .strength-bar');
        toggleSpinner('passwordSpinner', true);

        if (!password) {
            typeText(resultBox, resultMessages[currentLang].passwordEmpty, 50, () => {
                toggleSpinner('passwordSpinner', false);
            });
            return;
        }

        saveInputData('password', password);

        setTimeout(() => {
            let strength = 0;
            if (password.length > 0) strength++;
            if (password.length > 8) strength++;
            if (/[A-Z]/.test(password)) strength++;
            if (/[0-9]/.test(password)) strength++;
            if (/[^A-Za-z0-9]/.test(password)) strength++;

            strengthBars.forEach((bar, index) => {
                bar.classList.toggle('active', index < strength);
            });

            typeText(resultBox, resultMessages[currentLang].passwordStrength[strength], 50, () => {
                toggleSpinner('passwordSpinner', false);
            });
        }, 500);
    } catch (e) {
        console.error('Error analyzing password:', e);
        typeText(document.getElementById('passwordResult'), 'Error analyzing password.', 50, () => {
            toggleSpinner('passwordSpinner', false);
        });
    }
}

// Password Entropy Calculator
function calculateEntropy() {
    try {
        const password = document.getElementById('entropyPassword').value;
        const resultBox = document.getElementById('entropyResult');
        toggleSpinner('entropySpinner', true);

        if (!password) {
            typeText(resultBox, resultMessages[currentLang].entropyEmpty, 50, () => {
                toggleSpinner('entropySpinner', false);
            });
            return;
        }

        saveInputData('entropyPassword', password);

        setTimeout(() => {
            let charset = 0;
            if (/[a-z]/.test(password)) charset += 26;
            if (/[A-Z]/.test(password)) charset += 26;
            if (/[0-9]/.test(password)) charset += 10;
            if (/[^a-zA-Z0-9]/.test(password)) charset += 32;

            if (charset === 0) {
                typeText(resultBox, resultMessages[currentLang].entropyEmpty, 50, () => {
                    toggleSpinner('entropySpinner', false);
                });
                return;
            }

            const entropy = password.length * Math.log2(charset);
            typeText(resultBox, resultMessages[currentLang].entropyResult(entropy), 50, () => {
                toggleSpinner('entropySpinner', false);
            });
        }, 500);
    } catch (e) {
        console.error('Error calculating entropy:', e);
        typeText(document.getElementById('entropyResult'), 'Error calculating entropy.', 50, () => {
            toggleSpinner('entropySpinner', false);
        });
    }
}

// Password Generator
function generateSecurePassword() {
    try {
        const length = parseInt(document.getElementById('passwordLength').value);
        const includeSymbols = document.getElementById('includeSymbols').checked;
        const resultBox = document.getElementById('generatedPasswordResult');
        toggleSpinner('passwordGenSpinner', true);

        if (isNaN(length) || length < 8 || length > 64) {
            typeText(resultBox, resultMessages[currentLang].passwordLengthInvalid, 50, () => {
                toggleSpinner('passwordGenSpinner', false);
            });
            return;
        }

        setTimeout(() => {
            const lowercase = 'abcdefghijklmnopqrstuvwxyz';
            const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const numbers = '0123456789';
            const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
            
            let chars = lowercase + uppercase + numbers;
            if (includeSymbols) chars += symbols;

            let password = '';
            for (let i = 0; i < length; i++) {
                password += chars.charAt(Math.floor(Math.random() * chars.length));
            }

            saveInputData('generatedPasswordResult', password);

            typeText(resultBox, password, 50, () => {
                toggleSpinner('passwordGenSpinner', false);
            });
        }, 500);
    } catch (e) {
        console.error('Error generating password:', e);
        typeText(document.getElementById('generatedPasswordResult'), 'Error generating password.', 50, () => {
            toggleSpinner('passwordGenSpinner', false);
        });
    }
}

// Password Leak Checker
function checkPasswordLeak() {
    try {
        const password = document.getElementById('leakPassword').value;
        const resultBox = document.getElementById('leakResult');
        toggleSpinner('leakSpinner', true);

        if (!password) {
            typeText(resultBox, resultMessages[currentLang].leakEmpty, 50, () => {
                toggleSpinner('leakSpinner', false);
            });
            return;
        }

        saveInputData('leakPassword', password);

        setTimeout(() => {
            const weakPasswords = ['password', '123456', 'qwerty'];
            const isLeaked = weakPasswords.includes(password.toLowerCase());
            typeText(resultBox, isLeaked 
                ? resultMessages[currentLang].leakFound 
                : resultMessages[currentLang].leakNotFound, 50, () => {
                toggleSpinner('leakSpinner', false);
            });
        }, 1000);
    } catch (e) {
        console.error('Error checking password leak:', e);
        typeText(document.getElementById('leakResult'), 'Error checking password leak.', 50, () => {
            toggleSpinner('leakSpinner', false);
        });
    }
}

// Hash Generator
async function generateHash() {
    try {
        const input = document.getElementById('hashInput').value;
        const hashType = document.getElementById('hashType').value;
        const resultBox = document.getElementById('hashResult');
        toggleSpinner('hashSpinner', true);

        if (!input) {
            typeText(resultBox, resultMessages[currentLang].hashEmpty, 50, () => {
                toggleSpinner('hashSpinner', false);
            });
            return;
        }

        saveInputData('hashInput', input);

        let hash;
        if (hashType === 'md5') {
            hash = CryptoJS.MD5(input).toString();
        } else if (hashType === 'sha1') {
            hash = CryptoJS.SHA1(input).toString();
        } else if (hashType === 'sha256') {
            hash = CryptoJS.SHA256(input).toString();
        } else {
            typeText(resultBox, resultMessages[currentLang].hashInvalidType, 50, () => {
                toggleSpinner('hashSpinner', false);
            });
            return;
        }

        typeText(resultBox, resultMessages[currentLang].hashResult(hashType, hash), 50, () => {
            toggleSpinner('hashSpinner', false);
        });
    } catch (e) {
        console.error('Error generating hash:', e);
        typeText(document.getElementById('hashResult'), 'Error generating hash.', 50, () => {
            toggleSpinner('hashSpinner', false);
        });
    }
}

// File Hash Checker
async function checkFileHash() {
    try {
        const fileInput = document.getElementById('fileInput').files[0];
        const hashType = document.getElementById('fileHashType').value;
        const resultBox = document.getElementById('fileHashResult');
        toggleSpinner('fileHashSpinner', true);

        if (!fileInput) {
            typeText(resultBox, resultMessages[currentLang].fileEmpty, 50, () => {
                toggleSpinner('fileHashSpinner', false);
            });
            return;
        }

        if (fileInput.size > 10 * 1024 * 1024) {
            typeText(resultBox, resultMessages[currentLang].fileTooLarge, 50, () => {
                toggleSpinner('fileHashSpinner', false);
            });
            return;
        }

        const reader = new FileReader();
        reader.onload = async function(e) {
            try {
                const content = new TextEncoder().encode(e.target.result);
                let hash;
                if (hashType === 'md5') {
                    hash = CryptoJS.MD5(CryptoJS.lib.WordArray.create(content)).toString();
                } else if (hashType === 'sha1') {
                    hash = CryptoJS.SHA1(CryptoJS.lib.WordArray.create(content)).toString();
                } else if (hashType === 'sha256') {
                    hash = CryptoJS.SHA256(CryptoJS.lib.WordArray.create(content)).toString();
                } else {
                    typeText(resultBox, resultMessages[currentLang].hashInvalidType, 50, () => {
                        toggleSpinner('fileHashSpinner', false);
                    });
                    return;
                }
                typeText(resultBox, resultMessages[currentLang].fileHashResult(hashType, hash), 50, () => {
                    toggleSpinner('fileHashSpinner', false);
                });
            } catch (e) {
                console.error('Error computing file hash:', e);
                typeText(resultBox, 'Error computing file hash.', 50, () => {
                    toggleSpinner('fileHashSpinner', false);
                });
            }
        };
        reader.onerror = () => {
            typeText(resultBox, resultMessages[currentLang].fileReadError, 50, () => {
                toggleSpinner('fileHashSpinner', false);
            });
        };
        reader.readAsArrayBuffer(fileInput);
    } catch (e) {
        console.error('Error in checkFileHash:', e);
        typeText(document.getElementById('fileHashResult'), 'Error processing file.', 50, () => {
            toggleSpinner('fileHashSpinner', false);
        });
    }
}

// Base64 Encoder/Decoder
function encodeBase64() {
    try {
        const input = document.getElementById('base64Input').value;
        const resultBox = document.getElementById('base64Result');
        toggleSpinner('base64Spinner', true);

        if (!input) {
            typeText(resultBox, resultMessages[currentLang].base64Empty, 50, () => {
                toggleSpinner('base64Spinner', false);
            });
            return;
        }

        saveInputData('base64Input', input);

        setTimeout(() => {
            try {
                const encoded = btoa(input);
                typeText(resultBox, encoded, 50, () => {
                    toggleSpinner('base64Spinner', false);
                    resultBox.dataset.lastAction = 'encode';
                });
            } catch (e) {
                console.error('Error encoding Base64:', e);
                typeText(resultBox, resultMessages[currentLang].base64InvalidEncode, 50, () => {
                    toggleSpinner('base64Spinner', false);
                });
            }
        }, 500);
    } catch (e) {
        console.error('Error in encodeBase64:', e);
        typeText(document.getElementById('base64Result'), 'Error encoding.', 50, () => {
            toggleSpinner('base64Spinner', false);
        });
    }
}

function decodeBase64() {
    try {
        const input = document.getElementById('base64Input').value;
        const resultBox = document.getElementById('base64Result');
        toggleSpinner('base64Spinner', true);

        if (!input) {
            typeText(resultBox, resultMessages[currentLang].base64Empty, 50, () => {
                toggleSpinner('base64Spinner', false);
            });
            return;
        }

        saveInputData('base64Input', input);

        setTimeout(() => {
            try {
                const decoded = atob(input);
                typeText(resultBox, decoded, 50, () => {
                    toggleSpinner('base64Spinner', false);
                    resultBox.dataset.lastAction = 'decode';
                });
            } catch (e) {
                console.error('Error decoding Base64:', e);
                typeText(resultBox, resultMessages[currentLang].base64InvalidDecode, 50, () => {
                    toggleSpinner('base64Spinner', false);
                });
            }
        }, 500);
    } catch (e) {
        console.error('Error in decodeBase64:', e);
        typeText(document.getElementById('base64Result'), 'Error decoding.', 50, () => {
            toggleSpinner('base64Spinner', false);
        });
    }
}

// IP Geolocation
function getMyIP() {
    try {
        const resultBox = document.getElementById('ipResult');
        toggleSpinner('ipSpinner', true);
        setTimeout(() => {
            typeText(resultBox, resultMessages[currentLang].myIPResult, 50, () => {
                toggleSpinner('ipSpinner', false);
            });
        }, 1000);
    } catch (e) {
        console.error('Error getting IP:', e);
        typeText(document.getElementById('ipResult'), 'Error getting IP.', 50, () => {
            toggleSpinner('ipSpinner', false);
        });
    }
}

function geolocateIP() {
    try {
        const ip = document.getElementById('ipAddress').value;
        const resultBox = document.getElementById('ipResult');
        toggleSpinner('ipSpinner', true);

        if (!ip) {
            typeText(resultBox, resultMessages[currentLang].ipEmpty, 50, () => {
                toggleSpinner('ipSpinner', false);
            });
            return;
        }

        saveInputData('ipAddress', ip);

        setTimeout(() => {
            typeText(resultBox, resultMessages[currentLang].ipResult(ip), 50, () => {
                toggleSpinner('ipSpinner', false);
            });
        }, 1000);
    } catch (e) {
        console.error('Error geolocating IP:', e);
        typeText(document.getElementById('ipResult'), 'Error geolocating IP.', 50, () => {
            toggleSpinner('ipSpinner', false);
        });
    }
}

// Port Scanner Simulator
function simulatePortScan() {
    try {
        const ip = document.getElementById('targetIP').value;
        const range = document.getElementById('portRange').value;
        const resultBox = document.getElementById('portScanResult');
        toggleSpinner('portScanSpinner', true);

        if (!ip || !range) {
            typeText(resultBox, resultMessages[currentLang].portScanEmpty, 50, () => {
                toggleSpinner('portScanSpinner', false);
            });
            return;
        }

        saveInputData('targetIP', ip);
        saveInputData('portRange', range);

        setTimeout(() => {
            typeText(resultBox, resultMessages[currentLang].portScanResult(ip, range), 50, () => {
                toggleSpinner('portScanSpinner', false);
            });
        }, 2000);
    } catch (e) {
        console.error('Error simulating port scan:', e);
        typeText(document.getElementById('portScanResult'), 'Error simulating port scan.', 50, () => {
            toggleSpinner('portScanSpinner', false);
        });
    }
}

// URL Security Checker
function checkURLSecurity() {
    try {
        const url = document.getElementById('urlInput').value;
        const resultBox = document.getElementById('urlResult');
        toggleSpinner('urlSpinner', true);

        if (!url) {
            typeText(resultBox, resultMessages[currentLang].urlEmpty, 50, () => {
                toggleSpinner('urlSpinner', false);
            });
            return;
        }

        saveInputData('urlInput', url);

        setTimeout(() => {
            const maliciousPatterns = ['malware', 'phish', 'hack'];
            const isSuspicious = maliciousPatterns.some(pattern => url.toLowerCase().includes(pattern));
            typeText(resultBox, isSuspicious 
                ? resultMessages[currentLang].urlSuspicious(url) 
                : resultMessages[currentLang].urlSafe(url), 50, () => {
                toggleSpinner('urlSpinner', false);
            });
        }, 1000);
    } catch (e) {
        console.error('Error checking URL security:', e);
        typeText(document.getElementById('urlResult'), 'Error checking URL security.', 50, () => {
            toggleSpinner('urlSpinner', false);
        });
    }
}

// Text Encryption/Decryption
function encryptText() {
    try {
        const input = document.getElementById('cryptoInput').value;
        const key = document.getElementById('cryptoKey').value;
        const cryptoType = document.getElementById('cryptoType').value;
        const resultBox = document.getElementById('cryptoResult');
        toggleSpinner('cryptoSpinner', true);

        if (!input || !key) {
            typeText(resultBox, resultMessages[currentLang].cryptoEmpty, 50, () => {
                toggleSpinner('cryptoSpinner', false);
            });
            return;
        }

        saveInputData('cryptoInput', input);
        saveInputData('cryptoKey', key);

        setTimeout(() => {
            let encrypted;
            if (cryptoType === 'aes') {
                encrypted = CryptoJS.AES.encrypt(input, key).toString();
            } else if (cryptoType === 'tripledes') {
                encrypted = CryptoJS.TripleDES.encrypt(input, key).toString();
            } else {
                typeText(resultBox, resultMessages[currentLang].cryptoInvalidType, 50, () => {
                    toggleSpinner('cryptoSpinner', false);
                });
                return;
            }
            typeText(resultBox, resultMessages[currentLang].cryptoEncryptResult(cryptoType, encrypted), 50, () => {
                toggleSpinner('cryptoSpinner', false);
                resultBox.dataset.lastAction = 'encrypt';
            });
        }, 500);
    } catch (e) {
        console.error('Error encrypting text:', e);
        typeText(document.getElementById('cryptoResult'), 'Error encrypting text.', 50, () => {
            toggleSpinner('cryptoSpinner', false);
        });
    }
}

function decryptText() {
    try {
        const input = document.getElementById('cryptoInput').value;
        const key = document.getElementById('cryptoKey').value;
        const cryptoType = document.getElementById('cryptoType').value;
        const resultBox = document.getElementById('cryptoResult');
        toggleSpinner('cryptoSpinner', true);

        if (!input || !key) {
            typeText(resultBox, resultMessages[currentLang].cryptoEmpty, 50, () => {
                toggleSpinner('cryptoSpinner', false);
            });
            return;
        }

        saveInputData('cryptoInput', input);
        saveInputData('cryptoKey', key);

        setTimeout(() => {
            try {
                let decrypted;
                if (cryptoType === 'aes') {
                    decrypted = CryptoJS.AES.decrypt(input, key).toString(CryptoJS.enc.Utf8);
                } else if (cryptoType === 'tripledes') {
                    decrypted = CryptoJS.TripleDES.decrypt(input, key).toString(CryptoJS.enc.Utf8);
                } else {
                    typeText(resultBox, resultMessages[currentLang].cryptoInvalidType, 50, () => {
                        toggleSpinner('cryptoSpinner', false);
                    });
                    return;
                }
                if (!decrypted) {
                    typeText(resultBox, resultMessages[currentLang].cryptoInvalidDecrypt, 50, () => {
                        toggleSpinner('cryptoSpinner', false);
                    });
                    return;
                }
                typeText(resultBox, resultMessages[currentLang].cryptoDecryptResult(decrypted), 50, () => {
                    toggleSpinner('cryptoSpinner', false);
                    resultBox.dataset.lastAction = 'decrypt';
                });
            } catch (e) {
                console.error('Error decrypting text:', e);
                typeText(resultBox, resultMessages[currentLang].cryptoInvalidDecrypt, 50, () => {
                    toggleSpinner('cryptoSpinner', false);
                });
            }
        }, 500);
    } catch (e) {
        console.error('Error in decryptText:', e);
        typeText(document.getElementById('cryptoResult'), 'Error decrypting text.', 50, () => {
            toggleSpinner('cryptoSpinner', false);
        });
    }
}

// Dark Web Scanner
function scanDarkWeb() {
    try {
        const input = document.getElementById('darkWebInput').value;
        const resultBox = document.getElementById('darkWebResult');
        toggleSpinner('darkWebSpinner', true);

        if (!input) {
            typeText(resultBox, resultMessages[currentLang].darkWebEmpty, 50, () => {
                toggleSpinner('darkWebSpinner', false);
            });
            return;
        }

        saveInputData('darkWebInput', input);

        setTimeout(() => {
            typeText(resultBox, resultMessages[currentLang].darkWebResult(input), 50, () => {
                toggleSpinner('darkWebSpinner', false);
            });
        }, 2000);
    } catch (e) {
        console.error('Error scanning dark web:', e);
        typeText(document.getElementById('darkWebResult'), 'Error scanning dark web.', 50, () => {
            toggleSpinner('darkWebSpinner', false);
        });
    }
}

// Network Traffic Simulator
function simulateNetworkTraffic() {
    try {
        const resultBox = document.getElementById('trafficResult');
        toggleSpinner('trafficSpinner', true);

        setTimeout(() => {
            const packets = Math.floor(Math.random() * 1000);
            const speed = (packets * 0.1).toFixed(2);
            typeText(resultBox, resultMessages[currentLang].trafficResult(packets, speed), 50, () => {
                toggleSpinner('trafficSpinner', false);
            });
        }, 1500);
    } catch (e) {
        console.error('Error simulating network traffic:', e);
        typeText(document.getElementById('trafficResult'), 'Error simulating network traffic.', 50, () => {
            toggleSpinner('trafficSpinner', false);
        });
    }
}

// SQL Injection Tester
function testSQLInjection() {
    try {
        const query = document.getElementById('sqlInput').value;
        const resultBox = document.getElementById('sqlResult');
        toggleSpinner('sqlSpinner', true);

        if (!query) {
            typeText(resultBox, resultMessages[currentLang].sqlEmpty, 50, () => {
                toggleSpinner('sqlSpinner', false);
            });
            return;
        }

        saveInputData('sqlInput', query);

        setTimeout(() => {
            const sqlPatterns = [
                /[';]--/i,
                /union.*select/i,
                /or.*1=1/i,
                /drop.*table/i,
                /exec.*xp_cmdshell/i
            ];
            const isVulnerable = sqlPatterns.some(pattern => pattern.test(query));
            typeText(resultBox, isVulnerable 
                ? resultMessages[currentLang].sqlVulnerable(query) 
                : resultMessages[currentLang].sqlSafe(query), 50, () => {
                toggleSpinner('sqlSpinner', false);
            });
        }, 1000);
    } catch (e) {
        console.error('Error testing SQL injection:', e);
        typeText(document.getElementById('sqlResult'), 'Error testing SQL injection.', 50, () => {
            toggleSpinner('sqlSpinner', false);
        });
    }
}

// XSS Scanner
function scanXSS() {
    try {
        const input = document.getElementById('xssInput').value;
        const resultBox = document.getElementById('xssResult');
        toggleSpinner('xssSpinner', true);

        if (!input) {
            typeText(resultBox, resultMessages[currentLang].xssEmpty, 50, () => {
                toggleSpinner('xssSpinner', false);
            });
            return;
        }

        saveInputData('xssInput', input);

        setTimeout(() => {
            const xssPatterns = [
                /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/i,
                /on\w+\s*=/i,
                /javascript:/i,
                /alert\s*\(/i,
                /eval\s*\(/i
            ];
            const isVulnerable = xssPatterns.some(pattern => pattern.test(input));
            typeText(resultBox, isVulnerable 
                ? resultMessages[currentLang].xssVulnerable(input) 
                : resultMessages[currentLang].xssSafe(input), 50, () => {
                toggleSpinner('xssSpinner', false);
            });
        }, 1000);
    } catch (e) {
        console.error('Error scanning XSS:', e);
        typeText(document.getElementById('xssResult'), 'Error scanning XSS.', 50, () => {
            toggleSpinner('xssSpinner', false);
        });
    }
}

// Network Latency Tester
function testNetworkLatency() {
    try {
        const target = document.getElementById('latencyTarget').value;
        const resultBox = document.getElementById('latencyResult');
        toggleSpinner('latencySpinner', true);

        if (!target) {
            typeText(resultBox, resultMessages[currentLang].latencyEmpty, 50, () => {
                toggleSpinner('latencySpinner', false);
            });
            return;
        }

        saveInputData('latencyTarget', target);

        setTimeout(() => {
            const latency = (Math.random() * 200 + 50).toFixed(2);
            typeText(resultBox, resultMessages[currentLang].latencyResult(target, latency), 50, () => {
                toggleSpinner('latencySpinner', false);
            });
        }, 1500);
    } catch (e) {
        console.error('Error testing network latency:', e);
        typeText(document.getElementById('latencyResult'), 'Error testing network latency.', 50, () => {
            toggleSpinner('latencySpinner', false);
        });
    }
}

// Password Complexity Visualizer
function visualizeComplexity() {
    try {
        const password = document.getElementById('complexityPassword').value;
        const resultBox = document.getElementById('complexityResult');
        const visualizer = document.getElementById('complexityVisualizer');
        toggleSpinner('complexitySpinner', true);

        if (!password) {
            typeText(resultBox, resultMessages[currentLang].complexityEmpty, 50, () => {
                toggleSpinner('complexitySpinner', false);
            });
            return;
        }

        saveInputData('complexityPassword', password);

        setTimeout(() => {
            let score = 0;
            const details = [];
            if (password.length >= 8) {
                score += 30;
                details.push(currentLang === 'ar' ? 'الطول ≥ 8 أحرف (+30%)' : 'Length ≥ 8 characters (+30%)');
            }
            if (/[A-Z]/.test(password)) {
                score += 20;
                details.push(currentLang === 'ar' ? 'يحتوي على أحرف كبيرة (+20%)' : 'Contains uppercase letters (+20%)');
            }
            if (/[0-9]/.test(password)) {
                score += 20;
                details.push(currentLang === 'ar' ? 'يحتوي على أرقام (+20%)' : 'Contains numbers (+20%)');
            }
            if (/[^A-Za-z0-9]/.test(password)) {
                score += 20;
                details.push(currentLang === 'ar' ? 'يحتوي على رموز خاصة (+20%)' : 'Contains special characters (+20%)');
            }
            if (password.length >= 12) {
                score += 10;
                details.push(currentLang === 'ar' ? 'الطول ≥ 12 حرفًا (+10%)' : 'Length ≥ 12 characters (+10%)');
            }

            const bar = document.createElement('div');
            bar.className = 'complexity-bar';
            bar.style.width = `${score}%`;
            visualizer.innerHTML = '';
            visualizer.appendChild(bar);

            typeText(resultBox, resultMessages[currentLang].complexityResult(score, details.join('\n')), 50, () => {
                toggleSpinner('complexitySpinner', false);
            });
        }, 1000);
    } catch (e) {
        console.error('Error visualizing complexity:', e);
        typeText(document.getElementById('complexityResult'), 'Error visualizing complexity.', 50, () => {
            toggleSpinner('complexitySpinner', false);
        });
    }
}

// Define tools for refreshing results
const tools = [
    { id: 'passwordResult', func: analyzePassword },
    { id: 'entropyResult', func: calculateEntropy },
    { id: 'generatedPasswordResult', func: generateSecurePassword },
    { id: 'leakResult', func: checkPasswordLeak },
    { id: 'hashResult', func: generateHash },
    { id: 'fileHashResult', func: checkFileHash },
    { id: 'base64Result', func: () => {
        const lastAction = document.getElementById('base64Result').dataset.lastAction;
        if (lastAction === 'encode') encodeBase64();
        else if (lastAction === 'decode') decodeBase64();
    }},
    { id: 'ipResult', func: geolocateIP },
    { id: 'portScanResult', func: simulatePortScan },
    { id: 'urlResult', func: checkURLSecurity },
    { id: 'cryptoResult', func: () => {
        const lastAction = document.getElementById('cryptoResult').dataset.lastAction;
        if (lastAction === 'encrypt') encryptText();
        else if (lastAction === 'decrypt') decryptText();
    }},
    { id: 'darkWebResult', func: scanDarkWeb },
    { id: 'trafficResult', func: simulateNetworkTraffic },
    { id: 'sqlResult', func: testSQLInjection },
    { id: 'xssResult', func: scanXSS },
    { id: 'latencyResult', func: testNetworkLatency },
    { id: 'complexityResult', func: visualizeComplexity }
];

// Network Monitor Functions
function startNetworkMonitor() {
    try {
        if (monitorInterval) clearInterval(monitorInterval);
        
        monitorInterval = setInterval(() => {
            updateNetworkStatus();
        }, 2000);
        
        updateNetworkStatus();
    } catch (e) {
        console.error('Error starting network monitor:', e);
    }
}

function updateNetworkStatus() {
    try {
        const statusElement = document.getElementById('systemStatus');
        const threatElement = document.getElementById('threatLevel');
        const scanElement = document.getElementById('activeScanCount');
        const trafficElement = document.getElementById('networkTraffic');
        
        if (statusElement) {
            const statuses = ['Online', 'Secure', 'Protected'];
            statusElement.textContent = statuses[Math.floor(Math.random() * statuses.length)];
        }
        
        if (threatElement) {
            const threats = ['Low', 'Medium', 'High'];
            const colors = ['#00ff88', '#ffaa00', '#ff4500'];
            const randomIndex = Math.floor(Math.random() * threats.length);
            threatElement.textContent = threats[randomIndex];
            threatElement.style.color = colors[randomIndex];
        }
        
        if (scanElement) {
            scanElement.textContent = activeScans.toString();
        }
        
        if (trafficElement) {
            networkTraffic = Math.floor(Math.random() * 1000);
            trafficElement.textContent = `${networkTraffic} KB/s`;
        }
    } catch (e) {
        console.error('Error updating network status:', e);
    }
}

function toggleNetworkMonitor() {
    try {
        const monitor = document.getElementById('networkMonitor');
        const content = monitor.querySelector('.monitor-content');
        const monitorText = monitor.querySelector('.monitor-text');
        
        if (monitor.classList.contains('compact')) {
            // إظهار الوضع الكامل
            monitor.classList.remove('compact');
            content.style.display = 'block';
            if (monitorText) {
                monitorText.textContent = currentLang === 'ar' ? 'إخفاء المراقب' : 'Hide Monitor';
            }
        } else {
            // إخفاء إلى الوضع المضغوط
            monitor.classList.add('compact');
            content.style.display = 'none';
            if (monitorText) {
                monitorText.textContent = currentLang === 'ar' ? 'المراقب' : 'Monitor';
            }
        }
    } catch (e) {
        console.error('Error toggling network monitor:', e);
    }
}

// Initialize Network Monitor
function initializeNetworkMonitor() {
    try {
        const monitor = document.getElementById('networkMonitor');
        const monitorText = monitor.querySelector('.monitor-text');
        
        // تحديد الوضع الافتراضي حسب حجم الشاشة
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // على الهواتف: بدء في الوضع المضغوط دائماً
            monitor.classList.add('compact');
            monitor.querySelector('.monitor-content').style.display = 'none';
        } else {
            // على الشاشات الكبيرة: بدء في الوضع المضغوط
            monitor.classList.add('compact');
            monitor.querySelector('.monitor-content').style.display = 'none';
        }
        
        if (monitorText) {
            monitorText.textContent = currentLang === 'ar' ? 'المراقب' : 'Monitor';
        }
        
        // بدء مراقبة الشبكة
        startNetworkMonitor();
    } catch (e) {
        console.error('Error initializing network monitor:', e);
    }
}

// Spinner Control Functions
function toggleSpinner(spinnerId, show) {
    try {
        const spinner = document.getElementById(spinnerId);
        if (spinner) {
            spinner.style.display = show ? 'block' : 'none';
        }
    } catch (e) {
        console.error('Error toggling spinner:', e);
    }
}

// New Advanced Tools Functions

// WiFi Security Analyzer
function analyzeWiFiSecurity() {
    const ssid = document.getElementById('wifiSSID').value.trim();
    const password = document.getElementById('wifiPassword').value.trim();
    const resultDiv = document.getElementById('wifiResult');
    
    toggleSpinner('wifiSpinner', true);
    
    setTimeout(() => {
        toggleSpinner('wifiSpinner', false);
        
        if (!ssid) {
            resultDiv.innerHTML = getLocalizedText('wifi_ssid_empty');
            return;
        }
        
        let securityScore = 0;
        let recommendations = [];
        
        // SSID Analysis
        if (ssid.length > 10) securityScore += 20;
        if (!/default|admin|router|wifi/i.test(ssid)) securityScore += 15;
        
        // Password Analysis
        if (password) {
            if (password.length >= 12) securityScore += 25;
            if (/[A-Z]/.test(password)) securityScore += 10;
            if (/[0-9]/.test(password)) securityScore += 10;
            if (/[!@#$%^&*]/.test(password)) securityScore += 20;
        } else {
            recommendations.push(currentLang === 'ar' ? '• إضافة كلمة مرور قوية' : '• Add strong password');
        }
        
        if (securityScore < 50) {
            recommendations.push(currentLang === 'ar' ? '• تغيير SSID الافتراضي' : '• Change default SSID');
            recommendations.push(currentLang === 'ar' ? '• استخدام تشفير WPA3' : '• Use WPA3 encryption');
        }
        
        const securityLevel = securityScore >= 80 ? 
            (currentLang === 'ar' ? 'ممتاز' : 'Excellent') :
            securityScore >= 60 ? 
            (currentLang === 'ar' ? 'جيد' : 'Good') :
            (currentLang === 'ar' ? 'ضعيف' : 'Weak');
        
        const result = currentLang === 'ar' ? 
            `تحليل أمان WiFi:\n\nSSID: ${ssid}\nنقاط الأمان: ${securityScore}/100\nمستوى الأمان: ${securityLevel}\n\nالتوصيات:\n${recommendations.join('\n')}` :
            `WiFi Security Analysis:\n\nSSID: ${ssid}\nSecurity Score: ${securityScore}/100\nSecurity Level: ${securityLevel}\n\nRecommendations:\n${recommendations.join('\n')}`;
        
        resultDiv.innerHTML = result;
    }, 2000);
}

// Email Security Checker
function checkEmailSecurity() {
    const email = document.getElementById('emailInput').value.trim();
    const resultDiv = document.getElementById('emailSecurityResult');
    
    toggleSpinner('emailSecuritySpinner', true);
    
    setTimeout(() => {
        toggleSpinner('emailSecuritySpinner', false);
        
        if (!email || !email.includes('@')) {
            resultDiv.innerHTML = currentLang === 'ar' ? 'الرجاء إدخال بريد إلكتروني صالح.' : 'Please enter a valid email address.';
            return;
        }
        
        const domain = email.split('@')[1];
        let securityScore = 0;
        let checks = [];
        
        // Domain reputation check (simulated)
        const trustedDomains = ['gmail.com', 'outlook.com', 'yahoo.com', 'protonmail.com'];
        if (trustedDomains.includes(domain)) {
            securityScore += 30;
            checks.push(currentLang === 'ar' ? '✅ نطاق موثوق' : '✅ Trusted domain');
        } else {
            checks.push(currentLang === 'ar' ? '⚠️ نطاق غير معروف' : '⚠️ Unknown domain');
        }
        
        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            securityScore += 25;
            checks.push(currentLang === 'ar' ? '✅ تنسيق صحيح' : '✅ Valid format');
        }
        
        // Common breach check (simulated)
        const commonBreachedEmails = ['test@gmail.com', 'admin@test.com'];
        if (commonBreachedEmails.includes(email.toLowerCase())) {
            checks.push(currentLang === 'ar' ? '🚨 تم العثور عليه في تسريبات معروفة' : '🚨 Found in known breaches');
        } else {
            securityScore += 45;
            checks.push(currentLang === 'ar' ? '✅ لم يتم العثور عليه في التسريبات المعروفة' : '✅ Not found in known breaches');
        }
        
        const riskLevel = securityScore >= 80 ? 
            (currentLang === 'ar' ? 'منخفض' : 'Low') :
            securityScore >= 50 ? 
            (currentLang === 'ar' ? 'متوسط' : 'Medium') :
            (currentLang === 'ar' ? 'عالي' : 'High');
        
        const result = currentLang === 'ar' ? 
            `فحص أمان البريد الإلكتروني:\n\nالبريد: ${email}\nنقاط الأمان: ${securityScore}/100\nمستوى المخاطر: ${riskLevel}\n\nالفحوصات:\n${checks.join('\n')}` :
            `Email Security Check:\n\nEmail: ${email}\nSecurity Score: ${securityScore}/100\nRisk Level: ${riskLevel}\n\nChecks:\n${checks.join('\n')}`;
        
        resultDiv.innerHTML = result;
    }, 1500);
}

// QR Code Security Scanner
function scanQRSecurity() {
    const qrText = document.getElementById('qrTextInput').value.trim();
    const resultDiv = document.getElementById('qrSecurityResult');
    
    toggleSpinner('qrSecuritySpinner', true);
    
    setTimeout(() => {
        toggleSpinner('qrSecuritySpinner', false);
        
        if (!qrText) {
            resultDiv.innerHTML = currentLang === 'ar' ? 'الرجاء إدخال نص QR Code أو رفع صورة.' : 'Please enter QR code text or upload image.';
            return;
        }
        
        let threats = [];
        let securityScore = 100;
        
        // URL analysis
        if (qrText.startsWith('http://')) {
            threats.push(currentLang === 'ar' ? '⚠️ رابط غير مشفر (HTTP)' : '⚠️ Unencrypted link (HTTP)');
            securityScore -= 30;
        }
        
        // Suspicious patterns
        const suspiciousPatterns = [
            /bit\.ly|tinyurl|t\.co/i,
            /click|download|urgent|free/i,
            /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/
        ];
        
        suspiciousPatterns.forEach(pattern => {
            if (pattern.test(qrText)) {
                threats.push(currentLang === 'ar' ? '🚨 نمط مشبوه مكتشف' : '🚨 Suspicious pattern detected');
                securityScore -= 25;
            }
        });
        
        // Phishing indicators
        if (/login|signin|verify|confirm|update/i.test(qrText)) {
            threats.push(currentLang === 'ar' ? '⚠️ مؤشرات تصيد محتملة' : '⚠️ Potential phishing indicators');
            securityScore -= 20;
        }
        
        if (threats.length === 0) {
            threats.push(currentLang === 'ar' ? '✅ لم يتم اكتشاف تهديدات' : '✅ No threats detected');
        }
        
        const riskLevel = securityScore >= 80 ? 
            (currentLang === 'ar' ? 'منخفض' : 'Low') :
            securityScore >= 50 ? 
            (currentLang === 'ar' ? 'متوسط' : 'Medium') :
            (currentLang === 'ar' ? 'عالي' : 'High');
        
        const result = currentLang === 'ar' ? 
            `فحص أمان QR Code:\n\nالمحتوى: ${qrText}\nنقاط الأمان: ${securityScore}/100\nمستوى المخاطر: ${riskLevel}\n\nالتهديدات المكتشفة:\n${threats.join('\n')}` :
            `QR Code Security Scan:\n\nContent: ${qrText}\nSecurity Score: ${securityScore}/100\nRisk Level: ${riskLevel}\n\nDetected Threats:\n${threats.join('\n')}`;
        
        resultDiv.innerHTML = result;
    }, 1800);
}

// Domain Security Analyzer
function analyzeDomainSecurity() {
    const domain = document.getElementById('domainInput').value.trim();
    const resultDiv = document.getElementById('domainAnalyzerResult');
    
    toggleSpinner('domainAnalyzerSpinner', true);
    
    setTimeout(() => {
        toggleSpinner('domainAnalyzerSpinner', false);
        
        if (!domain) {
            resultDiv.innerHTML = currentLang === 'ar' ? 'الرجاء إدخال اسم نطاق.' : 'Please enter a domain name.';
            return;
        }
        
        let securityChecks = [];
        let securityScore = 0;
        
        // Domain age simulation
        const randomAge = Math.floor(Math.random() * 10) + 1;
        if (randomAge > 5) {
            securityScore += 25;
            securityChecks.push(currentLang === 'ar' ? `✅ عمر النطاق: ${randomAge} سنوات` : `✅ Domain age: ${randomAge} years`);
        } else {
            securityChecks.push(currentLang === 'ar' ? `⚠️ نطاق حديث: ${randomAge} سنوات` : `⚠️ Recent domain: ${randomAge} years`);
        }
        
        // SSL check simulation
        if (Math.random() > 0.2) {
            securityScore += 30;
            securityChecks.push(currentLang === 'ar' ? '✅ شهادة SSL صالحة' : '✅ Valid SSL certificate');
        } else {
            securityChecks.push(currentLang === 'ar' ? '🚨 مشكلة في شهادة SSL' : '🚨 SSL certificate issue');
        }
        
        // Blacklist check simulation
        if (Math.random() > 0.1) {
            securityScore += 45;
            securityChecks.push(currentLang === 'ar' ? '✅ غير موجود في القوائم السوداء' : '✅ Not in blacklists');
        } else {
            securityChecks.push(currentLang === 'ar' ? '🚨 موجود في قائمة سوداء' : '🚨 Found in blacklist');
        }
        
        const trustLevel = securityScore >= 80 ? 
            (currentLang === 'ar' ? 'موثوق' : 'Trusted') :
            securityScore >= 50 ? 
            (currentLang === 'ar' ? 'مشكوك فيه' : 'Questionable') :
            (currentLang === 'ar' ? 'خطير' : 'Dangerous');
        
        const result = currentLang === 'ar' ? 
            `تحليل أمان النطاق:\n\nالنطاق: ${domain}\nنقاط الأمان: ${securityScore}/100\nمستوى الثقة: ${trustLevel}\n\nالفحوصات:\n${securityChecks.join('\n')}` :
            `Domain Security Analysis:\n\nDomain: ${domain}\nSecurity Score: ${securityScore}/100\nTrust Level: ${trustLevel}\n\nChecks:\n${securityChecks.join('\n')}`;
        
        resultDiv.innerHTML = result;
    }, 2200);
}

// SSL Certificate Checker
function checkSSLCertificate() {
    const url = document.getElementById('sslDomain').value.trim();
    const resultDiv = document.getElementById('sslResult');
    
    toggleSpinner('sslSpinner', true);
    
    setTimeout(() => {
        toggleSpinner('sslSpinner', false);
        
        if (!url) {
            resultDiv.innerHTML = currentLang === 'ar' ? 'الرجاء إدخال رابط أو نطاق.' : 'Please enter URL or domain.';
            return;
        }
        
        // Generate random SSL info
        const issuer = ['Let\'s Encrypt', 'DigiCert', 'Cloudflare', 'GoDaddy'][Math.floor(Math.random() * 4)];
        const validFrom = new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000);
        const validTo = new Date(Date.now() + Math.random() * 365 * 24 * 60 * 60 * 1000);
        const keySize = [2048, 4096][Math.floor(Math.random() * 2)];
        
        let sslStatus = Math.random() > 0.2 ? 'valid' : 'invalid';
        let securityScore = 0;
        
        if (sslStatus === 'valid') {
            securityScore = 85 + Math.floor(Math.random() * 15);
        } else {
            securityScore = Math.floor(Math.random() * 40);
        }
        
        const result = currentLang === 'ar' ? 
            `فحص شهادة SSL:\n\nالموقع: ${url}\nالحالة: ${sslStatus === 'valid' ? 'صالحة' : 'غير صالحة'}\nالمُصدر: ${issuer}\nصالحة من: ${validFrom.toLocaleDateString('ar')}\nصالحة حتى: ${validTo.toLocaleDateString('ar')}\nحجم المفتاح: ${keySize} بت\nنقاط الأمان: ${securityScore}/100` :
            `SSL Certificate Check:\n\nWebsite: ${url}\nStatus: ${sslStatus === 'valid' ? 'Valid' : 'Invalid'}\nIssuer: ${issuer}\nValid from: ${validFrom.toLocaleDateString()}\nValid until: ${validTo.toLocaleDateString()}\nKey size: ${keySize} bits\nSecurity Score: ${securityScore}/100`;
        
        resultDiv.innerHTML = result;
    }, 1700);
}

// File Signature Analyzer
function analyzeFileSignature() {
    const fileInput = document.getElementById('signatureFileUpload');
    const resultDiv = document.getElementById('fileSignatureResult');
    
    if (!fileInput.files.length) {
        resultDiv.innerHTML = currentLang === 'ar' ? 'الرجاء اختيار ملف.' : 'Please select a file.';
        return;
    }
    
    toggleSpinner('fileSignatureSpinner', true);
    
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        setTimeout(() => {
            toggleSpinner('fileSignatureSpinner', false);
            
            const arrayBuffer = e.target.result;
            const uint8Array = new Uint8Array(arrayBuffer);
            
            // Get first 16 bytes as hex
            let signature = '';
            for (let i = 0; i < Math.min(16, uint8Array.length); i++) {
                signature += uint8Array[i].toString(16).padStart(2, '0').toUpperCase() + ' ';
            }
            
            // File type detection based on signature
            const fileSignatures = {
                'FF D8 FF': 'JPEG Image',
                '89 50 4E 47': 'PNG Image', 
                '47 49 46 38': 'GIF Image',
                '25 50 44 46': 'PDF Document',
                '50 4B 03 04': 'ZIP Archive',
                '4D 5A': 'Windows Executable'
            };
            
            let detectedType = 'Unknown';
            for (const [sig, type] of Object.entries(fileSignatures)) {
                if (signature.startsWith(sig)) {
                    detectedType = type;
                    break;
                }
            }
            
            const extension = file.name.split('.').pop().toUpperCase();
            const typeMatch = detectedType.toUpperCase().includes(extension) || extension === detectedType.split(' ')[0];
            
            const result = currentLang === 'ar' ? 
                `تحليل توقيع الملف:\n\nاسم الملف: ${file.name}\nالحجم: ${(file.size / 1024).toFixed(2)} KB\nالتوقيع: ${signature.trim()}\nالنوع المكتشف: ${detectedType}\nامتداد الملف: .${extension}\nتطابق النوع: ${typeMatch ? 'نعم' : 'لا'}\n\n${typeMatch ? '✅ الملف يبدو أصلياً' : '⚠️ عدم تطابق قد يشير إلى تلاعب'}` :
                `File Signature Analysis:\n\nFilename: ${file.name}\nSize: ${(file.size / 1024).toFixed(2)} KB\nSignature: ${signature.trim()}\nDetected type: ${detectedType}\nFile extension: .${extension}\nType match: ${typeMatch ? 'Yes' : 'No'}\n\n${typeMatch ? '✅ File appears authentic' : '⚠️ Mismatch may indicate tampering'}`;
            
            resultDiv.innerHTML = result;
        }, 1000);
    };
    
    reader.readAsArrayBuffer(file);
}

// Browser Security Checker
function checkBrowserSecurity() {
    const resultDiv = document.getElementById('browserSecurityResult');
    
    toggleSpinner('browserSecuritySpinner', true);
    
    setTimeout(() => {
        toggleSpinner('browserSecuritySpinner', false);
        
        let securityChecks = [];
        let securityScore = 0;
        
        // Check if HTTPS
        if (location.protocol === 'https:') {
            securityScore += 25;
            securityChecks.push(currentLang === 'ar' ? '✅ اتصال HTTPS آمن' : '✅ Secure HTTPS connection');
        } else {
            securityChecks.push(currentLang === 'ar' ? '⚠️ اتصال HTTP غير آمن' : '⚠️ Insecure HTTP connection');
        }
        
        // Check cookies
        if (navigator.cookieEnabled) {
            securityScore += 15;
            securityChecks.push(currentLang === 'ar' ? '✅ ملفات تعريف الارتباط مفعلة' : '✅ Cookies enabled');
        } else {
            securityChecks.push(currentLang === 'ar' ? '⚠️ ملفات تعريف الارتباط معطلة' : '⚠️ Cookies disabled');
        }
        
        // Check JavaScript
        securityScore += 20;
        securityChecks.push(currentLang === 'ar' ? '✅ JavaScript مفعل' : '✅ JavaScript enabled');
        
        // Check localStorage
        try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
            securityScore += 15;
            securityChecks.push(currentLang === 'ar' ? '✅ التخزين المحلي متاح' : '✅ Local storage available');
        } catch (e) {
            securityChecks.push(currentLang === 'ar' ? '⚠️ التخزين المحلي غير متاح' : '⚠️ Local storage unavailable');
        }
        
        // Check Do Not Track
        if (navigator.doNotTrack === '1') {
            securityScore += 10;
            securityChecks.push(currentLang === 'ar' ? '✅ عدم التتبع مفعل' : '✅ Do Not Track enabled');
        } else {
            securityChecks.push(currentLang === 'ar' ? '⚠️ عدم التتبع معطل' : '⚠️ Do Not Track disabled');
        }
        
        // Check WebRTC
        const webRTCSupported = !!(window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection);
        if (webRTCSupported) {
            securityScore += 15;
            securityChecks.push(currentLang === 'ar' ? '✅ WebRTC مدعوم' : '✅ WebRTC supported');
        }
        
        const browserInfo = `${navigator.userAgent.split(' ')[0]} ${navigator.appVersion.split(' ')[0]}`;
        
        const securityLevel = securityScore >= 80 ? 
            (currentLang === 'ar' ? 'ممتاز' : 'Excellent') :
            securityScore >= 60 ? 
            (currentLang === 'ar' ? 'جيد' : 'Good') :
            (currentLang === 'ar' ? 'ضعيف' : 'Poor');
        
        const result = currentLang === 'ar' ? 
            `فحص أمان المتصفح:\n\nالمتصفح: ${browserInfo}\nنقاط الأمان: ${securityScore}/100\nمستوى الأمان: ${securityLevel}\n\nالفحوصات:\n${securityChecks.join('\n')}` :
            `Browser Security Check:\n\nBrowser: ${browserInfo}\nSecurity Score: ${securityScore}/100\nSecurity Level: ${securityLevel}\n\nChecks:\n${securityChecks.join('\n')}`;
        
        resultDiv.innerHTML = result;
    }, 1200);
}

// Metadata Extractor
function extractMetadata() {
    const fileInput = document.getElementById('metadataFileUpload');
    const resultDiv = document.getElementById('metadataResult');
    
    if (!fileInput.files.length) {
        resultDiv.innerHTML = currentLang === 'ar' ? 'الرجاء اختيار ملف.' : 'Please select a file.';
        return;
    }
    
    toggleSpinner('metadataSpinner', true);
    
    const file = fileInput.files[0];
    
    setTimeout(() => {
        toggleSpinner('metadataSpinner', false);
        
        // Basic file metadata
        const metadata = {
            name: file.name,
            size: (file.size / 1024).toFixed(2) + ' KB',
            type: file.type || 'Unknown',
            lastModified: new Date(file.lastModified).toLocaleDateString(),
        };
        
        // Simulated EXIF data for images
        if (file.type.startsWith('image/')) {
            metadata.camera = 'Canon EOS 5D Mark IV (Simulated)';
            metadata.software = 'Adobe Photoshop CC 2021 (Simulated)';
            metadata.gps = 'Location data removed for privacy';
            metadata.dimensions = '3840x2560 (Simulated)';
        }
        
        // Privacy concerns
        const privacyConcerns = [];
        if (file.type.startsWith('image/')) {
            privacyConcerns.push(currentLang === 'ar' ? '• قد تحتوي على بيانات موقع GPS' : '• May contain GPS location data');
            privacyConcerns.push(currentLang === 'ar' ? '• معلومات الكاميرا المستخدمة' : '• Camera information exposed');
        }
        
        const metadataStr = Object.entries(metadata)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n');
        
        const result = currentLang === 'ar' ? 
            `استخراج البيانات الوصفية:\n\n${metadataStr}\n\nمخاوف الخصوصية:\n${privacyConcerns.join('\n') || 'لا توجد مخاوف خصوصية مكتشفة'}` :
            `Metadata Extraction:\n\n${metadataStr}\n\nPrivacy Concerns:\n${privacyConcerns.join('\n') || 'No privacy concerns detected'}`;
        
        resultDiv.innerHTML = result;
    }, 1500);
}

// Additional Advanced Tools will be added here...

// Steganography Detector
function detectSteganography() {
    const fileInput = document.getElementById('stegoImageUpload');
    const resultDiv = document.getElementById('steganographyResult');
    
    if (!fileInput.files.length) {
        resultDiv.innerHTML = currentLang === 'ar' ? 'الرجاء اختيار صورة.' : 'Please select an image.';
        return;
    }
    
    toggleSpinner('steganographySpinner', true);
    
    setTimeout(() => {
        toggleSpinner('steganographySpinner', false);
        
        const file = fileInput.files[0];
        const suspiciousIndicators = [];
        let suspicionScore = 0;
        
        // File size analysis
        const sizeRatio = file.size / (1024 * 1024); // Size in MB
        if (sizeRatio > 5) {
            suspiciousIndicators.push(currentLang === 'ar' ? '⚠️ حجم ملف كبير غير عادي' : '⚠️ Unusually large file size');
            suspicionScore += 30;
        }
        
        // Random analysis simulation
        if (Math.random() > 0.7) {
            suspiciousIndicators.push(currentLang === 'ar' ? '🚨 تم اكتشاف أنماط غير طبيعية في البيانات' : '🚨 Abnormal data patterns detected');
            suspicionScore += 40;
        }
        
        if (Math.random() > 0.8) {
            suspiciousIndicators.push(currentLang === 'ar' ? '⚠️ تغييرات في البت الأقل أهمية' : '⚠️ LSB modifications detected');
            suspicionScore += 35;
        }
        
        if (suspiciousIndicators.length === 0) {
            suspiciousIndicators.push(currentLang === 'ar' ? '✅ لم يتم اكتشاف بيانات مخفية' : '✅ No hidden data detected');
        }
        
        const riskLevel = suspicionScore >= 70 ? 
            (currentLang === 'ar' ? 'عالي' : 'High') :
            suspicionScore >= 30 ? 
            (currentLang === 'ar' ? 'متوسط' : 'Medium') :
            (currentLang === 'ar' ? 'منخفض' : 'Low');
        
        const result = currentLang === 'ar' ? 
            `كشف الإخفاء الرقمي:\n\nالملف: ${file.name}\nالحجم: ${(file.size / 1024).toFixed(2)} KB\nدرجة الشك: ${suspicionScore}/100\nمستوى المخاطر: ${riskLevel}\n\nالمؤشرات:\n${suspiciousIndicators.join('\n')}` :
            `Steganography Detection:\n\nFile: ${file.name}\nSize: ${(file.size / 1024).toFixed(2)} KB\nSuspicion Score: ${suspicionScore}/100\nRisk Level: ${riskLevel}\n\nIndicators:\n${suspiciousIndicators.join('\n')}`;
        
        resultDiv.innerHTML = result;
    }, 2500);
}

// Social Engineering Analyzer
function analyzeSocialEngineering() {
    const message = document.getElementById('messageText').value.trim();
    const resultDiv = document.getElementById('socialEngineeringResult');
    
    if (!message) {
        resultDiv.innerHTML = currentLang === 'ar' ? 'الرجاء إدخال نص الرسالة.' : 'Please enter message text.';
        return;
    }
    
    toggleSpinner('socialEngineeringSpinner', true);
    
    setTimeout(() => {
        toggleSpinner('socialEngineeringSpinner', false);
        
        let suspiciousPatterns = [];
        let riskScore = 0;
        
        // Urgency indicators
        const urgencyWords = /urgent|immediately|expire|deadline|limited time|act now|hurry/i;
        if (urgencyWords.test(message)) {
            suspiciousPatterns.push(currentLang === 'ar' ? '🚨 كلمات تحفز على الاستعجال' : '🚨 Urgency-inducing words');
            riskScore += 25;
        }
        
        // Authority impersonation
        const authorityWords = /bank|government|police|admin|security|support|microsoft|apple/i;
        if (authorityWords.test(message)) {
            suspiciousPatterns.push(currentLang === 'ar' ? '⚠️ انتحال صفة السلطة' : '⚠️ Authority impersonation');
            riskScore += 30;
        }
        
        // Request for sensitive info
        const sensitiveRequests = /password|ssn|credit card|pin|social security|account number/i;
        if (sensitiveRequests.test(message)) {
            suspiciousPatterns.push(currentLang === 'ar' ? '🚨 طلب معلومات حساسة' : '🚨 Requests sensitive information');
            riskScore += 40;
        }
        
        // Suspicious links
        if (/http|www\.|bit\.ly|tinyurl/i.test(message)) {
            suspiciousPatterns.push(currentLang === 'ar' ? '⚠️ يحتوي على روابط' : '⚠️ Contains links');
            riskScore += 20;
        }
        
        // Emotional manipulation
        const emotionalWords = /congratulations|winner|free|prize|lucky|selected|exclusive/i;
        if (emotionalWords.test(message)) {
            suspiciousPatterns.push(currentLang === 'ar' ? '⚠️ محاولة تلاعب عاطفي' : '⚠️ Emotional manipulation attempt');
            riskScore += 15;
        }
        
        if (suspiciousPatterns.length === 0) {
            suspiciousPatterns.push(currentLang === 'ar' ? '✅ لم يتم اكتشاف أنماط هندسة اجتماعية' : '✅ No social engineering patterns detected');
        }
        
        const threatLevel = riskScore >= 70 ? 
            (currentLang === 'ar' ? 'عالي جداً' : 'Very High') :
            riskScore >= 50 ? 
            (currentLang === 'ar' ? 'عالي' : 'High') :
            riskScore >= 25 ? 
            (currentLang === 'ar' ? 'متوسط' : 'Medium') :
            (currentLang === 'ar' ? 'منخفض' : 'Low');
        
        const result = currentLang === 'ar' ? 
            `تحليل الهندسة الاجتماعية:\n\nنقاط المخاطر: ${riskScore}/100\nمستوى التهديد: ${threatLevel}\n\nالأنماط المكتشفة:\n${suspiciousPatterns.join('\n')}\n\nالتوصية: ${riskScore >= 50 ? 'احذر! رسالة مشبوهة' : 'الرسالة تبدو آمنة نسبياً'}` :
            `Social Engineering Analysis:\n\nRisk Score: ${riskScore}/100\nThreat Level: ${threatLevel}\n\nDetected Patterns:\n${suspiciousPatterns.join('\n')}\n\nRecommendation: ${riskScore >= 50 ? 'Beware! Suspicious message' : 'Message appears relatively safe'}`;
        
        resultDiv.innerHTML = result;
    }, 1800);
}

// Keylogger Simulator
let keyloggerActive = false;
let keylogData = [];

function startKeyloggerSimulation() {
    const inputField = document.getElementById('keyloggerInput');
    const resultDiv = document.getElementById('keyloggerResult');
    const btn = document.getElementById('keyloggerBtn');
    
    if (!keyloggerActive) {
        keyloggerActive = true;
        keylogData = [];
        btn.textContent = currentLang === 'ar' ? 'إيقاف المحاكاة' : 'Stop Simulation';
        btn.style.backgroundColor = '#ff4500';
        
        resultDiv.innerHTML = currentLang === 'ar' ? 
            '🔴 المحاكاة نشطة - يتم تسجيل ضغطات المفاتيح...\n\nالبيانات المسجلة:\n' :
            '🔴 Simulation active - Logging keystrokes...\n\nRecorded data:\n';
        
        inputField.addEventListener('input', logKeystrokes);
        inputField.addEventListener('keydown', logSpecialKeys);
    } else {
        stopKeyloggerSimulation();
    }
}

function logKeystrokes(event) {
    if (keyloggerActive) {
        const timestamp = new Date().toLocaleTimeString();
        const data = `[${timestamp}] INPUT: "${event.target.value}"`;
        keylogData.push(data);
        updateKeylogDisplay();
    }
}

function logSpecialKeys(event) {
    if (keyloggerActive) {
        const timestamp = new Date().toLocaleTimeString();
        const specialKeys = ['Enter', 'Backspace', 'Delete', 'Tab', 'Escape'];
        
        if (specialKeys.includes(event.key)) {
            const data = `[${timestamp}] KEY: ${event.key}`;
            keylogData.push(data);
            updateKeylogDisplay();
        }
    }
}

function updateKeylogDisplay() {
    const resultDiv = document.getElementById('keyloggerResult');
    const header = currentLang === 'ar' ? 
        '🔴 المحاكاة نشطة - يتم تسجيل ضغطات المفاتيح...\n\nالبيانات المسجلة:\n' :
        '🔴 Simulation active - Logging keystrokes...\n\nRecorded data:\n';
    
    resultDiv.innerHTML = header + keylogData.slice(-10).join('\n');
}

function stopKeyloggerSimulation() {
    keyloggerActive = false;
    const inputField = document.getElementById('keyloggerInput');
    const btn = document.getElementById('keyloggerBtn');
    const resultDiv = document.getElementById('keyloggerResult');
    
    btn.textContent = currentLang === 'ar' ? 'بدء المحاكاة' : 'Start Simulation';
    btn.style.backgroundColor = '#00ff88';
    
    inputField.removeEventListener('input', logKeystrokes);
    inputField.removeEventListener('keydown', logSpecialKeys);
    
    const finalReport = currentLang === 'ar' ? 
        `🟢 تم إيقاف المحاكاة\n\nتقرير نهائي:\n• عدد الأحداث المسجلة: ${keylogData.length}\n• مدة المحاكاة: غير محددة\n• نوع البيانات: نصوص ومفاتيح خاصة\n\n⚠️ تحذير: هذا مثال تعليمي فقط` :
        `🟢 Simulation stopped\n\nFinal Report:\n• Events logged: ${keylogData.length}\n• Simulation duration: Not specified\n• Data types: Text and special keys\n\n⚠️ Warning: This is educational only`;
    
    resultDiv.innerHTML = finalReport + '\n\n' + keylogData.join('\n');
}

// Phishing URL Generator (Educational)
function generatePhishingExamples() {
    const legitimateURL = document.getElementById('legitimateURL').value.trim();
    const resultDiv = document.getElementById('phishingResult');
    
    if (!legitimateURL) {
        resultDiv.innerHTML = currentLang === 'ar' ? 'الرجاء إدخال رابط الموقع الشرعي.' : 'Please enter legitimate website URL.';
        return;
    }
    
    toggleSpinner('phishingSpinner', true);
    
    setTimeout(() => {
        toggleSpinner('phishingSpinner', false);
        
        const domain = legitimateURL.replace(/https?:\/\//, '').split('/')[0];
        
        const phishingTechniques = [
            `${domain.replace('.', '-')}.com`,
            `${domain}.security-update.com`,
            `secure-${domain}`,
            `${domain.replace('.com', '.verification.com')}`,
            `${domain.charAt(0)}${domain.slice(1).replace('o', '0')}`,
            `www.${domain.replace('.', '-')}.login.com`
        ];
        
        const warningMessage = currentLang === 'ar' ? 
            '⚠️ تحذير: هذه أمثلة تعليمية فقط!\n🚨 لا تستخدم هذه الأساليب لأغراض ضارة\n\n' :
            '⚠️ Warning: Educational examples only!\n🚨 Do not use these techniques maliciously\n\n';
        
        const techniques = currentLang === 'ar' ? 
            'تقنيات التصيد الشائعة:\n\n' + phishingTechniques.map((url, index) => 
                `${index + 1}. ${url}\n   الطريقة: ${['استبدال النقطة بشرطة', 'إضافة نطاق فرعي مزيف', 'إضافة كلمة "آمن"', 'إضافة "التحقق"', 'استبدال الأحرف', 'نطاق فرعي مزيف'][index]}`
            ).join('\n\n') :
            'Common Phishing Techniques:\n\n' + phishingTechniques.map((url, index) => 
                `${index + 1}. ${url}\n   Method: ${['Dot to dash substitution', 'Fake subdomain addition', 'Adding "secure"', 'Adding "verification"', 'Character substitution', 'Fake subdomain'][index]}`
            ).join('\n\n');
        
        const protectionTips = currentLang === 'ar' ? 
            '\n\nنصائح الحماية:\n• تحقق دائماً من الرابط الكامل\n• ابحث عن شهادة SSL الصحيحة\n• لا تثق بالروابط في الرسائل المشبوهة\n• استخدم متصفح محدث مع حماية التصيد' :
            '\n\nProtection Tips:\n• Always verify the complete URL\n• Look for proper SSL certificates\n• Don\'t trust links in suspicious messages\n• Use updated browser with phishing protection';
        
        resultDiv.innerHTML = warningMessage + techniques + protectionTips;
    }, 1500);
}

// VPN Security Tester
function testVPNSecurity() {
    const resultDiv = document.getElementById('vpnResult');
    
    toggleSpinner('vpnSpinner', true);
    
    setTimeout(() => {
        toggleSpinner('vpnSpinner', false);
        
        let vpnTests = [];
        let securityScore = 0;
        
        // IP leak test simulation
        const publicIP = '203.0.113.' + Math.floor(Math.random() * 255);
        const vpnIP = '10.0.0.' + Math.floor(Math.random() * 255);
        const ipMatch = Math.random() > 0.8;
        
        if (!ipMatch) {
            securityScore += 30;
            vpnTests.push(currentLang === 'ar' ? `✅ لا توجد تسريبات IP (VPN: ${vpnIP})` : `✅ No IP leaks (VPN: ${vpnIP})`);
        } else {
            vpnTests.push(currentLang === 'ar' ? `🚨 تسريب IP مكتشف! (${publicIP})` : `🚨 IP leak detected! (${publicIP})`);
        }
        
        // DNS leak test
        const dnsLeak = Math.random() > 0.7;
        if (!dnsLeak) {
            securityScore += 25;
            vpnTests.push(currentLang === 'ar' ? '✅ لا توجد تسريبات DNS' : '✅ No DNS leaks');
        } else {
            vpnTests.push(currentLang === 'ar' ? '🚨 تسريب DNS مكتشف!' : '🚨 DNS leak detected!');
        }
        
        // WebRTC leak test
        const webRTCLeak = Math.random() > 0.6;
        if (!webRTCLeak) {
            securityScore += 20;
            vpnTests.push(currentLang === 'ar' ? '✅ لا توجد تسريبات WebRTC' : '✅ No WebRTC leaks');
        } else {
            vpnTests.push(currentLang === 'ar' ? '🚨 تسريب WebRTC مكتشف!' : '🚨 WebRTC leak detected!');
        }
        
        // Encryption test
        const encryptionStrong = Math.random() > 0.3;
        if (encryptionStrong) {
            securityScore += 25;
            vpnTests.push(currentLang === 'ar' ? '✅ تشفير قوي (AES-256)' : '✅ Strong encryption (AES-256)');
        } else {
            vpnTests.push(currentLang === 'ar' ? '⚠️ تشفير ضعيف مكتشف' : '⚠️ Weak encryption detected');
        }
        
        const vpnStatus = securityScore >= 80 ? 
            (currentLang === 'ar' ? 'ممتاز' : 'Excellent') :
            securityScore >= 60 ? 
            (currentLang === 'ar' ? 'جيد' : 'Good') :
            (currentLang === 'ar' ? 'ضعيف' : 'Poor');
        
        const result = currentLang === 'ar' ? 
            `اختبار أمان VPN:\n\nنقاط الأمان: ${securityScore}/100\nحالة VPN: ${vpnStatus}\n\nنتائج الاختبار:\n${vpnTests.join('\n')}\n\nالتوصية: ${securityScore >= 60 ? 'VPN آمن للاستخدام' : 'يُنصح بتغيير VPN'}` :
            `VPN Security Test:\n\nSecurity Score: ${securityScore}/100\nVPN Status: ${vpnStatus}\n\nTest Results:\n${vpnTests.join('\n')}\n\nRecommendation: ${securityScore >= 60 ? 'VPN is safe to use' : 'Consider changing VPN'}`;
        
        resultDiv.innerHTML = result;
    }, 2000);
}

// OSINT Information Gatherer
function gatherOSINT() {
    const target = document.getElementById('osintTarget').value.trim();
    const type = document.getElementById('osintType').value;
    const resultDiv = document.getElementById('osintResult');
    
    if (!target) {
        resultDiv.innerHTML = currentLang === 'ar' ? 'الرجاء إدخال الهدف.' : 'Please enter target.';
        return;
    }
    
    toggleSpinner('osintSpinner', true);
    
    setTimeout(() => {
        toggleSpinner('osintSpinner', false);
        
        let osintData = [];
        
        if (type === 'domain' || type === 'comprehensive') {
            osintData.push(currentLang === 'ar' ? '📊 معلومات النطاق:' : '📊 Domain Information:');
            osintData.push(currentLang === 'ar' ? `• المالك: محمي بواسطة WHOIS Privacy` : `• Owner: Protected by WHOIS Privacy`);
            osintData.push(currentLang === 'ar' ? `• التسجيل: ${new Date(Date.now() - Math.random() * 365 * 5 * 24 * 60 * 60 * 1000).getFullYear()}` : `• Registered: ${new Date(Date.now() - Math.random() * 365 * 5 * 24 * 60 * 60 * 1000).getFullYear()}`);
            osintData.push(currentLang === 'ar' ? `• الخوادم: ['ns1.example.com', 'ns2.example.com']` : `• Nameservers: ['ns1.example.com', 'ns2.example.com']`);
        }
        
        if (type === 'email' || type === 'comprehensive') {
            osintData.push(currentLang === 'ar' ? '\n📧 معلومات البريد الإلكتروني:' : '\n📧 Email Information:');
            osintData.push(currentLang === 'ar' ? '• التحقق: صالح' : '• Validation: Valid');
            osintData.push(currentLang === 'ar' ? '• مزود الخدمة: Gmail/Outlook/Yahoo' : '• Provider: Gmail/Outlook/Yahoo');
            osintData.push(currentLang === 'ar' ? '• التسريبات: تحقق من قواعد البيانات المعروفة' : '• Breaches: Check known databases');
        }
        
        if (type === 'social' || type === 'comprehensive') {
            osintData.push(currentLang === 'ar' ? '\n👥 وسائل التواصل الاجتماعي:' : '\n👥 Social Media:');
            osintData.push(currentLang === 'ar' ? '• فيسبوك: لم يتم العثور على حساب عام' : '• Facebook: No public profile found');
            osintData.push(currentLang === 'ar' ? '• تويتر: لم يتم العثور على حساب' : '• Twitter: No account found');
            osintData.push(currentLang === 'ar' ? '• لينكد إن: ملف مهني محتمل' : '• LinkedIn: Potential professional profile');
        }
        
        const disclaimer = currentLang === 'ar' ? 
            '\n⚠️ إخلاء مسؤولية:\n• هذه بيانات تعليمية فقط\n• استخدم OSINT بطريقة قانونية وأخلاقية\n• احترم الخصوصية والقوانين المحلية' :
            '\n⚠️ Disclaimer:\n• This is educational data only\n• Use OSINT legally and ethically\n• Respect privacy and local laws';
        
        resultDiv.innerHTML = `${currentLang === 'ar' ? 'جمع المعلومات المفتوحة المصدر' : 'OSINT Information Gathering'}:\n\n${currentLang === 'ar' ? 'الهدف' : 'Target'}: ${target}\n\n${osintData.join('\n')}${disclaimer}`;
    }, 2800);
}

// Ransomware Simulator (Educational)
function simulateRansomware() {
    const scenario = document.getElementById('ransomwareScenario').value;
    const resultDiv = document.getElementById('ransomwareResult');
    
    toggleSpinner('ransomwareSpinner', true);
    
    setTimeout(() => {
        toggleSpinner('ransomwareSpinner', false);
        
        let simulationResult = '';
        
        const warningHeader = currentLang === 'ar' ? 
            '🚨 تحذير: محاكاة تعليمية فقط!\n⚠️ لا تستخدم لأغراض ضارة\n\n' :
            '🚨 Warning: Educational simulation only!\n⚠️ Do not use maliciously\n\n';
        
        switch (scenario) {
            case 'file-encryption':
                simulationResult = currentLang === 'ar' ? 
                    '🔒 محاكاة تشفير الملفات:\n\n• البحث عن ملفات .doc, .pdf, .jpg\n• تشفير باستخدام AES-256\n• إنشاء ملف README.txt\n• تغيير امتدادات الملفات\n\nالملفات المتأثرة (محاكاة):\n- Document1.doc → Document1.doc.locked\n- Photo.jpg → Photo.jpg.locked\n- Presentation.pdf → Presentation.pdf.locked' :
                    '🔒 File Encryption Simulation:\n\n• Scanning for .doc, .pdf, .jpg files\n• Encrypting using AES-256\n• Creating README.txt file\n• Changing file extensions\n\nAffected files (simulation):\n- Document1.doc → Document1.doc.locked\n- Photo.jpg → Photo.jpg.locked\n- Presentation.pdf → Presentation.pdf.locked';
                break;
                
            case 'system-lock':
                simulationResult = currentLang === 'ar' ? 
                    '🖥️ محاكاة قفل النظام:\n\n• إغلاق سطح المكتب\n• عرض شاشة الفدية\n• تعطيل مدير المهام\n• منع الوصول للملفات\n\nرسالة الفدية (مثال):\n"تم تشفير ملفاتك! ادفع 500$ بالبيتكوين..."' :
                    '🖥️ System Lock Simulation:\n\n• Locking desktop\n• Displaying ransom screen\n• Disabling task manager\n• Blocking file access\n\nRansom message (example):\n"Your files are encrypted! Pay $500 in Bitcoin..."';
                break;
                
            case 'network-spread':
                simulationResult = currentLang === 'ar' ? 
                    '🌐 تحليل انتشار الشبكة:\n\n• فحص الشبكة المحلية\n• البحث عن أجهزة متصلة\n• استغلال الثغرات الشائعة\n• انتشار جانبي\n\nالأهداف المكتشفة:\n- 192.168.1.100 (Windows 10)\n- 192.168.1.101 (Windows Server)\n- 192.168.1.105 (Linux)' :
                    '🌐 Network Spread Analysis:\n\n• Scanning local network\n• Finding connected devices\n• Exploiting common vulnerabilities\n• Lateral movement\n\nTargets discovered:\n- 192.168.1.100 (Windows 10)\n- 192.168.1.101 (Windows Server)\n- 192.168.1.105 (Linux)';
                break;
                
            case 'recovery-process':
                simulationResult = currentLang === 'ar' ? 
                    '🔧 تدريب عملية الاستعادة:\n\n• فصل الشبكة فوراً\n• تحديد نوع برمجية الفدية\n• البحث عن أدوات فك التشفير\n• استعادة من النسخ الاحتياطية\n• تحديث الأنظمة والحماية\n\nأدوات الاستعادة:\n- Malwarebytes Anti-Ransomware\n- Kaspersky Rescue Disk\n- Windows System Restore' :
                    '🔧 Recovery Process Training:\n\n• Disconnect network immediately\n• Identify ransomware type\n• Search for decryption tools\n• Restore from backups\n• Update systems and protection\n\nRecovery tools:\n- Malwarebytes Anti-Ransomware\n- Kaspersky Rescue Disk\n- Windows System Restore';
                break;
        }
        
        resultDiv.innerHTML = warningHeader + simulationResult;
    }, 2200);
}

// Password Policy Generator
function generatePasswordPolicy() {
    const orgType = document.getElementById('organizationType').value;
    const securityLevel = document.getElementById('securityLevel').value;
    const resultDiv = document.getElementById('passwordPolicyResult');
    
    toggleSpinner('passwordPolicySpinner', true);
    
    setTimeout(() => {
        toggleSpinner('passwordPolicySpinner', false);
        
        let policy = {};
        
        // Base requirements based on security level
        switch (securityLevel) {
            case 'basic':
                policy = {
                    minLength: 8,
                    maxAge: 180,
                    history: 3,
                    complexity: 'اثنين من: أحرف كبيرة، صغيرة، أرقام',
                    lockout: 5,
                    mfa: false
                };
                break;
            case 'standard':
                policy = {
                    minLength: 10,
                    maxAge: 90,
                    history: 5,
                    complexity: 'ثلاثة من: أحرف كبيرة، صغيرة، أرقام، رموز',
                    lockout: 3,
                    mfa: 'موصى به'
                };
                break;
            case 'high':
                policy = {
                    minLength: 12,
                    maxAge: 60,
                    history: 8,
                    complexity: 'جميع الأنواع: أحرف كبيرة، صغيرة، أرقام، رموز',
                    lockout: 3,
                    mfa: 'مطلوب'
                };
                break;
            case 'maximum':
                policy = {
                    minLength: 15,
                    maxAge: 30,
                    history: 12,
                    complexity: 'جميع الأنواع + عدم وجود كلمات قاموس',
                    lockout: 2,
                    mfa: 'مطلوب + Biometric'
                };
                break;
        }
        
        // Organization-specific adjustments
        if (orgType === 'government' || orgType === 'financial') {
            policy.minLength += 2;
            policy.maxAge = Math.min(policy.maxAge, 60);
            policy.mfa = 'مطلوب';
        }
        
        const policyText = currentLang === 'ar' ? 
            `سياسة كلمات المرور - ${orgType.toUpperCase()}\nمستوى الأمان: ${securityLevel.toUpperCase()}\n\n📋 متطلبات كلمة المرور:\n• الحد الأدنى للطول: ${policy.minLength} حرف\n• التعقيد: ${policy.complexity}\n• مدة الصلاحية: ${policy.maxAge} يوم\n• سجل كلمات المرور: ${policy.history} كلمات سابقة\n• قفل الحساب: بعد ${policy.lockout} محاولات فاشلة\n• المصادقة الثنائية: ${policy.mfa}\n\n🔒 قواعد إضافية:\n• لا تشارك كلمات المرور\n• استخدم مدير كلمات مرور\n• غيّر كلمة المرور فوراً عند الشك في تسريبها\n• لا تستخدم معلومات شخصية\n\n⚖️ الامتثال:\n• مراجعة السياسة كل 6 أشهر\n• تدريب الموظفين ربع سنوي\n• مراقبة الامتثال شهرياً` :
            `Password Policy - ${orgType.toUpperCase()}\nSecurity Level: ${securityLevel.toUpperCase()}\n\n📋 Password Requirements:\n• Minimum length: ${policy.minLength} characters\n• Complexity: ${policy.complexity}\n• Maximum age: ${policy.maxAge} days\n• Password history: ${policy.history} previous passwords\n• Account lockout: after ${policy.lockout} failed attempts\n• Multi-factor authentication: ${policy.mfa}\n\n🔒 Additional Rules:\n• Do not share passwords\n• Use a password manager\n• Change password immediately if compromised\n• Do not use personal information\n\n⚖️ Compliance:\n• Policy review every 6 months\n• Employee training quarterly\n• Compliance monitoring monthly`;
        
        resultDiv.innerHTML = policyText;
    }, 1800);
}

// === Professional Dashboard Enhancement ===
function initializeProfessionalDashboard() {
    // Initialize security gauge
    initializeSecurityGauge();
    
    // Start real-time updates
    updateEnhancedDashboardStats();
    setInterval(updateEnhancedDashboardStats, 30000); // Update every 30 seconds
    
    // Initialize chart interactions
    initializeChartTabs();
    
    // Initialize activity monitor
    initializeEnhancedActivityMonitor();
    
    // Add professional animations
    addProfessionalAnimations();
}

function initializeSecurityGauge() {
    const securityLevel = 85; // Current security level
    const circle = document.querySelector('.security-circle');
    if (!circle) return;
    
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (securityLevel / 100) * circumference;
    
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = offset;
    
    // Animate gauge on load
    setTimeout(() => {
        circle.style.transition = 'stroke-dashoffset 2s ease-in-out';
    }, 100);
}

function updateEnhancedDashboardStats() {
    const stats = {
        threats: Math.floor(Math.random() * 5) + 2,
        scans: Math.floor(Math.random() * 100) + 150,
        blocked: Math.floor(Math.random() * 20) + 45,
        uptime: '99.9%'
    };
    
    // Update enhanced stat cards
    updateStatCard(1, stats.threats, stats.threats > 3);
    updateStatCard(2, stats.scans, false);
    updateStatCard(3, stats.blocked, false);
    updateStatCard(4, stats.uptime, false);
    
    // Update security metrics
    updateEnhancedSecurityMetrics();
}

function updateStatCard(cardIndex, value, shouldPulse) {
    const statValue = document.querySelector(`.stat-card.enhanced:nth-child(${cardIndex}) .stat-value`);
    if (statValue) {
        statValue.textContent = value;
        if (shouldPulse) {
            statValue.style.animation = 'pulse 1s ease-in-out';
            setTimeout(() => {
                statValue.style.animation = '';
            }, 1000);
        }
    }
}

function updateEnhancedSecurityMetrics() {
    const metrics = {
        firewallStatus: 'نشط',
        antivirusStatus: 'محدث',
        intrusionPrevention: 'مراقب',
        dataEncryption: 'محمي'
    };
    
    const metricValues = document.querySelectorAll('.metric-value');
    metricValues.forEach((value, index) => {
        switch(index) {
            case 0:
                value.textContent = metrics.firewallStatus;
                break;
            case 1:
                value.textContent = metrics.antivirusStatus;
                break;
            case 2:
                value.textContent = metrics.intrusionPrevention;
                break;
            case 3:
                value.textContent = metrics.dataEncryption;
                break;
        }
    });
}

function initializeChartTabs() {
    const chartTabs = document.querySelectorAll('.chart-tab');
    chartTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            chartTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            updateChartContent(this.textContent.trim());
        });
    });
    
    if (chartTabs.length > 0) {
        chartTabs[0].classList.add('active');
        updateChartContent(chartTabs[0].textContent.trim());
    }
}

function updateChartContent(chartType) {
    const chartContent = document.querySelector('.chart-content');
    if (!chartContent) return;
    
    const placeholder = chartContent.querySelector('.chart-placeholder');
    if (placeholder) {
        switch(chartType) {
            case 'التهديدات':
                placeholder.innerHTML = `
                    <div style="text-align: center;">
                        <div style="font-size: 1.2rem; color: #00ff88; margin-bottom: 10px;">
                            📊 مراقبة التهديدات المباشرة
                        </div>
                        <div style="color: rgba(255,255,255,0.7);">
                            عرض تفاعلي لآخر التهديدات المكتشفة والمحجوبة
                        </div>
                    </div>
                `;
                break;
            case 'الشبكة':
                placeholder.innerHTML = `
                    <div style="text-align: center;">
                        <div style="font-size: 1.2rem; color: #00ff88; margin-bottom: 10px;">
                            🌐 حالة الشبكة
                        </div>
                        <div style="color: rgba(255,255,255,0.7);">
                            مراقبة حركة البيانات وأداء الشبكة
                        </div>
                    </div>
                `;
                break;
            case 'الأداء':
                placeholder.innerHTML = `
                    <div style="text-align: center;">
                        <div style="font-size: 1.2rem; color: #00ff88; margin-bottom: 10px;">
                            ⚡ مؤشرات الأداء
                        </div>
                        <div style="color: rgba(255,255,255,0.7);">
                            إحصائيات الأداء ومعدل الاستجابة
                        </div>
                    </div>
                `;
                break;
        }
    }
}

function initializeEnhancedActivityMonitor() {
    setInterval(addRandomEnhancedActivity, 15000);
}

function addRandomEnhancedActivity() {
    const activities = [
        { type: 'success', title: 'فحص أمني مكتمل', time: 'الآن' },
        { type: 'warning', title: 'تحديث نظام الحماية', time: 'منذ دقيقة' },
        { type: 'success', title: 'حجب محاولة اختراق', time: 'منذ دقيقتين' },
        { type: 'error', title: 'تنبيه أمني عالي', time: 'منذ 3 دقائق' },
        { type: 'success', title: 'نسخ احتياطي مكتمل', time: 'منذ 5 دقائق' }
    ];
    
    const activityList = document.querySelector('.activity-list.enhanced');
    if (!activityList) return;
    
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    
    const activityItem = document.createElement('div');
    activityItem.className = 'activity-item enhanced';
    activityItem.innerHTML = `
        <div class="activity-indicator ${randomActivity.type}"></div>
        <div class="activity-info">
            <div class="activity-title">${randomActivity.title}</div>
            <div class="activity-time enhanced">${randomActivity.time}</div>
        </div>
    `;
    
    activityItem.style.opacity = '0';
    activityItem.style.transform = 'translateY(-10px)';
    
    activityList.insertBefore(activityItem, activityList.firstChild);
    
    setTimeout(() => {
        activityItem.style.transition = 'all 0.3s ease';
        activityItem.style.opacity = '1';
        activityItem.style.transform = 'translateY(0)';
    }, 100);
    
    const items = activityList.querySelectorAll('.activity-item.enhanced');
    if (items.length > 8) {
        items[items.length - 1].remove();
    }
}

function addProfessionalAnimations() {
    // Add entrance animations to dashboard elements
    const elements = [
        '.security-level-container',
        '.stat-card.enhanced',
        '.chart-container.enhanced',
        '.activity-section.enhanced'
    ];
    
    elements.forEach((selector, index) => {
        const els = document.querySelectorAll(selector);
        els.forEach((el, elIndex) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                el.style.transition = 'all 0.6s ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, (index * 100) + (elIndex * 50));
        });
    });
}

// === Advanced Dashboard Functions ===
let dashboardStats = {
    toolsUsed: 0,
    scansPerformed: 0,
    threatsDetected: 0,
    sessionStartTime: new Date(),
    activityLog: []
};

function toggleDashboard() {
    const overlay = document.getElementById('dashboardOverlay');
    if (overlay.classList.contains('active')) {
        overlay.classList.remove('active');
    } else {
        overlay.classList.add('active');
        updateDashboardStats();
        updateSessionTime();
    }
}

function updateDashboardStats() {
    document.getElementById('toolsUsedCount').textContent = dashboardStats.toolsUsed;
    document.getElementById('scansPerformed').textContent = dashboardStats.scansPerformed;
    document.getElementById('threatsDetected').textContent = dashboardStats.threatsDetected;
    
    // Update security level indicator
    const securityProgress = document.getElementById('securityProgress');
    const securityText = document.getElementById('securityText');
    const securityLevel = calculateSecurityLevel();
    securityProgress.style.width = securityLevel + '%';
    securityText.textContent = securityLevel + '%';
    
    // Update active tools counter
    document.getElementById('activeToolsCounter').textContent = document.querySelectorAll('.tool-card.active').length;
}

function calculateSecurityLevel() {
    const base = 60;
    const toolsBonus = Math.min(dashboardStats.toolsUsed * 2, 30);
    const scansBonus = Math.min(dashboardStats.scansPerformed * 3, 15);
    return Math.min(base + toolsBonus + scansBonus, 100);
}

function updateSessionTime() {
    const now = new Date();
    const sessionTime = Math.floor((now - dashboardStats.sessionStartTime) / 1000);
    const minutes = Math.floor(sessionTime / 60);
    const seconds = sessionTime % 60;
    document.getElementById('sessionTime').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function addActivity(text) {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour12: false }).slice(0, 5);
    
    dashboardStats.activityLog.unshift({
        time: timeStr,
        text: text
    });
    
    // Keep only last 10 activities
    if (dashboardStats.activityLog.length > 10) {
        dashboardStats.activityLog = dashboardStats.activityLog.slice(0, 10);
    }
    
    updateActivityLog();
}

function updateActivityLog() {
    const activityList = document.getElementById('activityList');
    if (activityList) {
        activityList.innerHTML = dashboardStats.activityLog.map(activity => `
            <div class="activity-item">
                <div class="activity-time">${activity.time}</div>
                <div class="activity-text">${activity.text}</div>
            </div>
        `).join('');
    }
}

// === AI Security Analyzer ===
function runAISecurityAnalysis() {
    const input = document.getElementById('aiAnalysisInput').value.trim();
    const resultDiv = document.getElementById('aiAnalysisResult');
    
    if (!input) {
        resultDiv.innerHTML = '<div class="error">الرجاء إدخال البيانات للتحليل</div>';
        return;
    }
    
    dashboardStats.toolsUsed++;
    dashboardStats.scansPerformed++;
    addActivity(currentLang === 'ar' ? 'تم تشغيل محلل الذكاء الاصطناعي' : 'AI Security Analyzer executed');
    
    resultDiv.innerHTML = '<div class="loading">🤖 جار التحليل بالذكاء الاصطناعي...</div>';
    
    setTimeout(() => {
        const analysisTypes = [
            'تحليل التهديدات المتقدمة',
            'فحص أنماط السلوك المشبوه',
            'كشف الشذوذ في البيانات',
            'تحليل التوقيعات الرقمية',
            'فحص التشفير والبروتوكولات'
        ];
        
        const riskLevel = Math.random() > 0.7 ? 'عالي' : Math.random() > 0.4 ? 'متوسط' : 'منخفض';
        const confidenceScore = (Math.random() * 30 + 70).toFixed(1);
        const threatIndicators = Math.floor(Math.random() * 5) + 1;
        
        if (riskLevel === 'عالي') {
            dashboardStats.threatsDetected++;
        }
        
        const result = currentLang === 'ar' ? `
            🤖 <strong>تحليل الذكاء الاصطناعي</strong>
            <br><br>📊 <strong>النتائج:</strong>
            <br>• مستوى المخاطر: <span class="risk-${riskLevel === 'عالي' ? 'high' : riskLevel === 'متوسط' ? 'medium' : 'low'}">${riskLevel}</span>
            <br>• درجة الثقة: ${confidenceScore}%
            <br>• مؤشرات التهديد: ${threatIndicators}
            <br><br>🔍 <strong>التحليلات المنجزة:</strong>
            <br>${analysisTypes.map(type => `• ${type}`).join('<br>')}
            <br><br>💡 <strong>التوصيات:</strong>
            <br>• ${riskLevel === 'عالي' ? 'اتخاذ إجراءات فورية للتخفيف من المخاطر' : 'مراقبة دورية للحفاظ على الأمان'}
            <br>• تحديث السياسات الأمنية بناءً على النتائج
            <br>• إجراء مراجعة شاملة للنظام
        ` : `
            🤖 <strong>AI Security Analysis</strong>
            <br><br>📊 <strong>Results:</strong>
            <br>• Risk Level: <span class="risk-${riskLevel === 'عالي' ? 'high' : riskLevel === 'متوسط' ? 'medium' : 'low'}">${riskLevel === 'عالي' ? 'High' : riskLevel === 'متوسط' ? 'Medium' : 'Low'}</span>
            <br>• Confidence Score: ${confidenceScore}%
            <br>• Threat Indicators: ${threatIndicators}
            <br><br>🔍 <strong>Analysis Completed:</strong>
            <br>• Advanced Threat Analysis<br>• Behavioral Pattern Detection<br>• Data Anomaly Detection<br>• Digital Signature Analysis<br>• Encryption & Protocol Verification
            <br><br>💡 <strong>Recommendations:</strong>
            <br>• ${riskLevel === 'عالي' ? 'Take immediate action to mitigate risks' : 'Regular monitoring to maintain security'}
            <br>• Update security policies based on findings
            <br>• Conduct comprehensive system review
        `;
        
        resultDiv.innerHTML = result;
    }, 3000);
}

// === Blockchain Security Validator ===
function validateBlockchainSecurity() {
    const input = document.getElementById('blockchainInput').value.trim();
    const resultDiv = document.getElementById('blockchainResult');
    
    if (!input) {
        resultDiv.innerHTML = '<div class="error">الرجاء إدخال عنوان المحفظة أو hash المعاملة</div>';
        return;
    }
    
    dashboardStats.toolsUsed++;
    dashboardStats.scansPerformed++;
    addActivity(currentLang === 'ar' ? 'تم تشغيل مُتحقق البلوك تشين' : 'Blockchain Security Validator executed');
    
    resultDiv.innerHTML = '<div class="loading">⛓️ جار التحقق من أمان البلوك تشين...</div>';
    
    setTimeout(() => {
        const isAddress = input.length > 30;
        const securityScore = Math.floor(Math.random() * 40) + 60;
        const gasOptimization = Math.floor(Math.random() * 30) + 70;
        const vulnerabilities = Math.floor(Math.random() * 3);
        
        if (securityScore < 70) {
            dashboardStats.threatsDetected++;
        }
        
        const result = currentLang === 'ar' ? `
            ⛓️ <strong>تحليل أمان البلوك تشين</strong>
            <br><br>🔍 <strong>تحليل ${isAddress ? 'عنوان المحفظة' : 'معاملة البلوك تشين'}:</strong>
            <br>${input}
            <br><br>📊 <strong>النتائج:</strong>
            <br>• نقاط الأمان: ${securityScore}/100
            <br>• تحسين الغاز: ${gasOptimization}%
            <br>• الثغرات المكتشفة: ${vulnerabilities}
            <br>• نوع الشبكة: ${Math.random() > 0.5 ? 'Ethereum' : 'BSC'}
            <br><br>🛡️ <strong>التحققات الأمنية:</strong>
            <br>• فحص العقود الذكية: ✅
            <br>• تحليل المعاملات: ✅
            <br>• فحص الثغرات المعروفة: ${vulnerabilities === 0 ? '✅' : '⚠️'}
            <br>• تحسين الغاز: ${gasOptimization > 80 ? '✅' : '⚠️'}
            <br><br>💡 <strong>التوصيات:</strong>
            <br>• ${securityScore > 80 ? 'مستوى أمان ممتاز' : securityScore > 60 ? 'يحتاج تحسينات أمنية طفيفة' : 'يتطلب مراجعة أمنية شاملة'}
        ` : `
            ⛓️ <strong>Blockchain Security Analysis</strong>
            <br><br>🔍 <strong>Analyzing ${isAddress ? 'Wallet Address' : 'Transaction Hash'}:</strong>
            <br>${input}
            <br><br>📊 <strong>Results:</strong>
            <br>• Security Score: ${securityScore}/100
            <br>• Gas Optimization: ${gasOptimization}%
            <br>• Vulnerabilities Found: ${vulnerabilities}
            <br>• Network Type: ${Math.random() > 0.5 ? 'Ethereum' : 'BSC'}
            <br><br>🛡️ <strong>Security Checks:</strong>
            <br>• Smart Contract Scan: ✅
            <br>• Transaction Analysis: ✅
            <br>• Known Vulnerability Check: ${vulnerabilities === 0 ? '✅' : '⚠️'}
            <br>• Gas Optimization: ${gasOptimization > 80 ? '✅' : '⚠️'}
            <br><br>💡 <strong>Recommendations:</strong>
            <br>• ${securityScore > 80 ? 'Excellent security level' : securityScore > 60 ? 'Minor security improvements needed' : 'Comprehensive security review required'}
        `;
        
        resultDiv.innerHTML = result;
    }, 2500);
}

// === IoT Device Scanner ===
function scanIoTDevices() {
    const input = document.getElementById('iotScanInput').value.trim();
    const resultDiv = document.getElementById('iotScanResult');
    
    if (!input) {
        resultDiv.innerHTML = '<div class="error">الرجاء إدخال نطاق الشبكة</div>';
        return;
    }
    
    dashboardStats.toolsUsed++;
    dashboardStats.scansPerformed++;
    addActivity(currentLang === 'ar' ? 'تم تشغيل فاحص أجهزة IoT' : 'IoT Device Scanner executed');
    
    resultDiv.innerHTML = '<div class="loading">🌐 جار فحص أجهزة إنترنت الأشياء...</div>';
    
    setTimeout(() => {
        const deviceCount = Math.floor(Math.random() * 15) + 5;
        const vulnerableDevices = Math.floor(Math.random() * 5);
        const deviceTypes = ['كاميرا أمان', 'راوتر', 'طابعة ذكية', 'مستشعر حرارة', 'مساعد ذكي', 'جهاز تلفزيون ذكي'];
        
        if (vulnerableDevices > 2) {
            dashboardStats.threatsDetected++;
        }
        
        const devices = [];
        for (let i = 0; i < deviceCount; i++) {
            devices.push({
                ip: `192.168.1.${100 + i}`,
                type: deviceTypes[Math.floor(Math.random() * deviceTypes.length)],
                risk: Math.random() > 0.7 ? 'عالي' : Math.random() > 0.4 ? 'متوسط' : 'منخفض'
            });
        }
        
        const result = currentLang === 'ar' ? `
            🌐 <strong>فحص أجهزة إنترنت الأشياء</strong>
            <br><br>📊 <strong>ملخص الفحص:</strong>
            <br>• النطاق المفحوص: ${input}
            <br>• الأجهزة المكتشفة: ${deviceCount}
            <br>• الأجهزة المعرضة للخطر: ${vulnerableDevices}
            <br>• معدل الأمان: ${((deviceCount - vulnerableDevices) / deviceCount * 100).toFixed(1)}%
            <br><br>🔍 <strong>الأجهزة المكتشفة:</strong>
            <br>${devices.slice(0, 5).map(device => 
                `• ${device.ip} - ${device.type} (مخاطر: <span class="risk-${device.risk === 'عالي' ? 'high' : device.risk === 'متوسط' ? 'medium' : 'low'}">${device.risk}</span>)`
            ).join('<br>')}
            ${deviceCount > 5 ? `<br>... و ${deviceCount - 5} أجهزة أخرى` : ''}
            <br><br>💡 <strong>التوصيات:</strong>
            <br>• تحديث كلمات المرور الافتراضية
            <br>• تفعيل التحديثات التلقائية
            <br>• إعداد شبكة منفصلة لأجهزة IoT
            <br>• مراقبة حركة الشبكة دورياً
        ` : `
            🌐 <strong>IoT Device Security Scan</strong>
            <br><br>📊 <strong>Scan Summary:</strong>
            <br>• Scanned Range: ${input}
            <br>• Devices Discovered: ${deviceCount}
            <br>• Vulnerable Devices: ${vulnerableDevices}
            <br>• Security Rate: ${((deviceCount - vulnerableDevices) / deviceCount * 100).toFixed(1)}%
            <br><br>🔍 <strong>Discovered Devices:</strong>
            <br>${devices.slice(0, 5).map(device => 
                `• ${device.ip} - ${device.type} (Risk: <span class="risk-${device.risk === 'عالي' ? 'high' : device.risk === 'متوسط' ? 'medium' : 'low'}">${device.risk === 'عالي' ? 'High' : device.risk === 'متوسط' ? 'Medium' : 'Low'}</span>)`
            ).join('<br>')}
            ${deviceCount > 5 ? `<br>... and ${deviceCount - 5} more devices` : ''}
            <br><br>💡 <strong>Recommendations:</strong>
            <br>• Update default passwords
            <br>• Enable automatic updates
            <br>• Set up separate IoT network
            <br>• Monitor network traffic regularly
        `;
        
        resultDiv.innerHTML = result;
    }, 2800);
}

// === Cloud Security Auditor ===
function auditCloudSecurity() {
    const provider = document.getElementById('cloudProvider').value;
    const resource = document.getElementById('cloudResourceInput').value.trim();
    const resultDiv = document.getElementById('cloudAuditResult');
    
    if (!resource) {
        resultDiv.innerHTML = '<div class="error">الرجاء إدخال معرف المورد السحابي</div>';
        return;
    }
    
    dashboardStats.toolsUsed++;
    dashboardStats.scansPerformed++;
    addActivity(currentLang === 'ar' ? 'تم تشغيل مُدقق الحوسبة السحابية' : 'Cloud Security Auditor executed');
    
    resultDiv.innerHTML = '<div class="loading">☁️ جار تدقيق أمان الحوسبة السحابية...</div>';
    
    setTimeout(() => {
        const complianceScore = Math.floor(Math.random() * 30) + 70;
        const configIssues = Math.floor(Math.random() * 8);
        const accessPolicies = Math.floor(Math.random() * 5) + 10;
        const encryptionStatus = Math.random() > 0.3;
        
        if (complianceScore < 80 || configIssues > 5) {
            dashboardStats.threatsDetected++;
        }
        
        const providerName = {
            aws: 'Amazon AWS',
            azure: 'Microsoft Azure',
            gcp: 'Google Cloud Platform'
        };
        
        const result = currentLang === 'ar' ? `
            ☁️ <strong>تدقيق أمان الحوسبة السحابية</strong>
            <br><br>🔍 <strong>المورد المُدقق:</strong>
            <br>• المزود: ${providerName[provider]}
            <br>• معرف المورد: ${resource}
            <br><br>📊 <strong>نتائج التدقيق:</strong>
            <br>• نقاط الامتثال: ${complianceScore}/100
            <br>• مشاكل التكوين: ${configIssues}
            <br>• سياسات الوصول: ${accessPolicies}
            <br>• حالة التشفير: ${encryptionStatus ? '✅ مفعّل' : '❌ غير مفعّل'}
            <br><br>🛡️ <strong>فحوصات الأمان:</strong>
            <br>• IAM والصلاحيات: ${Math.random() > 0.3 ? '✅' : '⚠️'}
            <br>• تشفير البيانات: ${encryptionStatus ? '✅' : '❌'}
            <br>• مراقبة الشبكة: ${Math.random() > 0.4 ? '✅' : '⚠️'}
            <br>• النسخ الاحتياطية: ${Math.random() > 0.2 ? '✅' : '⚠️'}
            <br>• سجلات التدقيق: ${Math.random() > 0.3 ? '✅' : '⚠️'}
            <br><br>📋 <strong>معايير الامتثال:</strong>
            <br>• GDPR: ${Math.random() > 0.4 ? '✅' : '⚠️'}
            <br>• SOC 2: ${Math.random() > 0.3 ? '✅' : '⚠️'}
            <br>• ISO 27001: ${Math.random() > 0.5 ? '✅' : '⚠️'}
            <br><br>💡 <strong>التوصيات:</strong>
            <br>• ${complianceScore > 85 ? 'حالة أمان ممتازة' : 'تحسين إعدادات الأمان مطلوب'}
            <br>• مراجعة سياسات الوصول دورياً
            <br>• ${!encryptionStatus ? 'تفعيل التشفير فوراً' : 'الحفاظ على التشفير'}
        ` : `
            ☁️ <strong>Cloud Security Audit</strong>
            <br><br>🔍 <strong>Audited Resource:</strong>
            <br>• Provider: ${providerName[provider]}
            <br>• Resource ID: ${resource}
            <br><br>📊 <strong>Audit Results:</strong>
            <br>• Compliance Score: ${complianceScore}/100
            <br>• Configuration Issues: ${configIssues}
            <br>• Access Policies: ${accessPolicies}
            <br>• Encryption Status: ${encryptionStatus ? '✅ Enabled' : '❌ Disabled'}
            <br><br>🛡️ <strong>Security Checks:</strong>
            <br>• IAM & Permissions: ${Math.random() > 0.3 ? '✅' : '⚠️'}
            <br>• Data Encryption: ${encryptionStatus ? '✅' : '❌'}
            <br>• Network Monitoring: ${Math.random() > 0.4 ? '✅' : '⚠️'}
            <br>• Backup Systems: ${Math.random() > 0.2 ? '✅' : '⚠️'}
            <br>• Audit Logs: ${Math.random() > 0.3 ? '✅' : '⚠️'}
            <br><br>📋 <strong>Compliance Standards:</strong>
            <br>• GDPR: ${Math.random() > 0.4 ? '✅' : '⚠️'}
            <br>• SOC 2: ${Math.random() > 0.3 ? '✅' : '⚠️'}
            <br>• ISO 27001: ${Math.random() > 0.5 ? '✅' : '⚠️'}
            <br><br>💡 <strong>Recommendations:</strong>
            <br>• ${complianceScore > 85 ? 'Excellent security posture' : 'Security configuration improvements needed'}
            <br>• Review access policies regularly
            <br>• ${!encryptionStatus ? 'Enable encryption immediately' : 'Maintain encryption standards'}
        `;
        
        resultDiv.innerHTML = result;
    }, 3200);
}

// Update session time every second
setInterval(() => {
    if (document.getElementById('dashboardOverlay')?.classList.contains('active')) {
        updateSessionTime();
    }
}, 1000);

// === Advanced Threat Intelligence ===
function analyzeThreatIntelligence() {
    const input = document.getElementById('threatInput').value.trim();
    const resultDiv = document.getElementById('threatAnalysisResult');
    
    if (!input) {
        resultDiv.innerHTML = '<div class="error">الرجاء إدخال مؤشر التهديد</div>';
        return;
    }
    
    dashboardStats.toolsUsed++;
    dashboardStats.scansPerformed++;
    addActivity(currentLang === 'ar' ? 'تم تشغيل محلل استخبارات التهديدات' : 'Threat Intelligence Analyzer executed');
    
    resultDiv.innerHTML = '<div class="loading">🕵️ جار تحليل استخبارات التهديدات...</div>';
    
    setTimeout(() => {
        const threatLevel = Math.random() > 0.7 ? 'عالي' : Math.random() > 0.4 ? 'متوسط' : 'منخفض';
        const confidence = (Math.random() * 30 + 70).toFixed(1);
        const sources = Math.floor(Math.random() * 8) + 3;
        const firstSeen = new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString();
        
        if (threatLevel === 'عالي') {
            dashboardStats.threatsDetected++;
        }
        
        const threatTypes = [
            'برمجية خبيثة',
            'بوت نت',
            'حملة تصيد',
            'مخدم قيادة وتحكم',
            'تسريب بيانات'
        ];
        
        const detectedType = threatTypes[Math.floor(Math.random() * threatTypes.length)];
        
        const result = currentLang === 'ar' ? `
            🕵️ <strong>تحليل استخبارات التهديدات</strong>
            <br><br>🔍 <strong>المؤشر المحلل:</strong>
            <br>${input}
            <br><br>📊 <strong>نتائج التحليل:</strong>
            <br>• مستوى التهديد: <span class="risk-${threatLevel === 'عالي' ? 'high' : threatLevel === 'متوسط' ? 'medium' : 'low'}">${threatLevel}</span>
            <br>• درجة الثقة: ${confidence}%
            <br>• عدد المصادر: ${sources}
            <br>• أول رصد: ${firstSeen}
            <br>• نوع التهديد: ${detectedType}
            <br><br>🌐 <strong>المصادر:</strong>
            <br>• VirusTotal: ${Math.random() > 0.3 ? '✅' : '❌'}
            <br>• AlienVault OTX: ${Math.random() > 0.4 ? '✅' : '❌'}
            <br>• IBM X-Force: ${Math.random() > 0.5 ? '✅' : '❌'}
            <br>• Hybrid Analysis: ${Math.random() > 0.3 ? '✅' : '❌'}
            <br>• URLVoid: ${Math.random() > 0.4 ? '✅' : '❌'}
            <br><br>🎯 <strong>تفاصيل التهديد:</strong>
            <br>• الحملات المرتبطة: ${Math.floor(Math.random() * 5) + 1}
            <br>• البلدان المتأثرة: ${Math.floor(Math.random() * 15) + 5}
            <br>• العائلة البرمجية: ${detectedType}
            <br><br>💡 <strong>الإجراءات الموصى بها:</strong>
            <br>• ${threatLevel === 'عالي' ? 'حظر فوري ومراقبة مكثفة' : threatLevel === 'متوسط' ? 'مراقبة عن كثب واتخاذ احتياطات' : 'مراقبة عادية وتوثيق'}
            <br>• تحديث قواعد بيانات الأمان
            <br>• إبلاغ فريق الاستجابة للحوادث
        ` : `
            🕵️ <strong>Threat Intelligence Analysis</strong>
            <br><br>🔍 <strong>Analyzed Indicator:</strong>
            <br>${input}
            <br><br>📊 <strong>Analysis Results:</strong>
            <br>• Threat Level: <span class="risk-${threatLevel === 'عالي' ? 'high' : threatLevel === 'متوسط' ? 'medium' : 'low'}">${threatLevel === 'عالي' ? 'High' : threatLevel === 'متوسط' ? 'Medium' : 'Low'}</span>
            <br>• Confidence Score: ${confidence}%
            <br>• Source Count: ${sources}
            <br>• First Seen: ${firstSeen}
            <br>• Threat Type: ${detectedType === 'برمجية خبيثة' ? 'Malware' : detectedType === 'بوت نت' ? 'Botnet' : detectedType === 'حملة تصيد' ? 'Phishing Campaign' : detectedType === 'مخدم قيادة وتحكم' ? 'C&C Server' : 'Data Breach'}
            <br><br>🌐 <strong>Sources:</strong>
            <br>• VirusTotal: ${Math.random() > 0.3 ? '✅' : '❌'}
            <br>• AlienVault OTX: ${Math.random() > 0.4 ? '✅' : '❌'}
            <br>• IBM X-Force: ${Math.random() > 0.5 ? '✅' : '❌'}
            <br>• Hybrid Analysis: ${Math.random() > 0.3 ? '✅' : '❌'}
            <br>• URLVoid: ${Math.random() > 0.4 ? '✅' : '❌'}
            <br><br>🎯 <strong>Threat Details:</strong>
            <br>• Related Campaigns: ${Math.floor(Math.random() * 5) + 1}
            <br>• Affected Countries: ${Math.floor(Math.random() * 15) + 5}
            <br>• Malware Family: ${detectedType === 'برمجية خبيثة' ? 'Malware' : detectedType === 'بوت نت' ? 'Botnet' : detectedType === 'حملة تصيد' ? 'Phishing Campaign' : detectedType === 'مخدم قيادة وتحكم' ? 'C&C Server' : 'Data Breach'}
            <br><br>💡 <strong>Recommended Actions:</strong>
            <br>• ${threatLevel === 'عالي' ? 'Immediate blocking and intensive monitoring' : threatLevel === 'متوسط' ? 'Close monitoring and precautionary measures' : 'Normal monitoring and documentation'}
            <br>• Update security databases
            <br>• Notify incident response team
        `;
        
        resultDiv.innerHTML = result;
    }, 2700);
}

// === Zero-Day Vulnerability Scanner ===
function scanZeroDayVulns() {
    const target = document.getElementById('zeroDateTarget').value.trim();
    const deepScan = document.getElementById('deepScan').checked;
    const stealthMode = document.getElementById('stealthMode').checked;
    const resultDiv = document.getElementById('zeroDayScanResult');
    
    if (!target) {
        resultDiv.innerHTML = '<div class="error">الرجاء إدخال هدف الفحص</div>';
        return;
    }
    
    dashboardStats.toolsUsed++;
    dashboardStats.scansPerformed++;
    addActivity(currentLang === 'ar' ? 'تم تشغيل فاحص ثغرات اليوم صفر' : 'Zero-Day Vulnerability Scanner executed');
    
    resultDiv.innerHTML = '<div class="loading">🔍 جار فحص ثغرات اليوم صفر...</div>';
    
    setTimeout(() => {
        const vulnCount = Math.floor(Math.random() * (deepScan ? 8 : 4)) + (deepScan ? 2 : 1);
        const criticalVulns = Math.floor(Math.random() * 3);
        const scanTime = stealthMode ? Math.floor(Math.random() * 300) + 180 : Math.floor(Math.random() * 120) + 60;
        
        if (criticalVulns > 0) {
            dashboardStats.threatsDetected++;
        }
        
        const vulnerabilities = [
            'Buffer Overflow في خدمة SSH',
            'SQL Injection في تطبيق الويب',
            'Remote Code Execution في API',
            'Cross-Site Scripting (XSS)',
            'Directory Traversal',
            'Authentication Bypass',
            'Privilege Escalation',
            'Memory Corruption'
        ];
        
        const detectedVulns = [];
        for (let i = 0; i < vulnCount; i++) {
            detectedVulns.push({
                name: vulnerabilities[Math.floor(Math.random() * vulnerabilities.length)],
                severity: Math.random() > 0.7 ? 'حرج' : Math.random() > 0.4 ? 'عالي' : 'متوسط',
                cvss: (Math.random() * 4 + 6).toFixed(1)
            });
        }
        
        const result = currentLang === 'ar' ? `
            🔍 <strong>فحص ثغرات اليوم صفر</strong>
            <br><br>🎯 <strong>الهدف المفحوص:</strong>
            <br>${target}
            <br><br>⚙️ <strong>إعدادات الفحص:</strong>
            <br>• الفحص العميق: ${deepScan ? '✅ مُفعّل' : '❌ غير مُفعّل'}
            <br>• وضع التخفي: ${stealthMode ? '✅ مُفعّل' : '❌ غير مُفعّل'}
            <br>• وقت الفحص: ${scanTime} ثانية
            <br><br>📊 <strong>نتائج الفحص:</strong>
            <br>• إجمالي الثغرات: ${vulnCount}
            <br>• ثغرات حرجة: ${criticalVulns}
            <br>• مؤشر المخاطر: ${criticalVulns > 2 ? 'عالي جداً' : criticalVulns > 0 ? 'عالي' : vulnCount > 3 ? 'متوسط' : 'منخفض'}
            <br><br>🐛 <strong>الثغرات المكتشفة:</strong>
            <br>${detectedVulns.slice(0, 5).map(vuln => 
                `• ${vuln.name} - <span class="risk-${vuln.severity === 'حرج' ? 'high' : vuln.severity === 'عالي' ? 'medium' : 'low'}">${vuln.severity}</span> (CVSS: ${vuln.cvss})`
            ).join('<br>')}
            ${vulnCount > 5 ? `<br>... و ${vulnCount - 5} ثغرات أخرى` : ''}
            <br><br>🛡️ <strong>الاختبارات المنجزة:</strong>
            <br>• فحص المنافذ والخدمات: ✅
            <br>• اختبار حقن الكود: ✅
            <br>• فحص تكوين الأمان: ✅
            <br>• اختبار صلاحيات الوصول: ${deepScan ? '✅' : '⚠️'}
            <br>• تحليل البروتوكولات: ${deepScan ? '✅' : '⚠️'}
            <br><br>💡 <strong>التوصيات العاجلة:</strong>
            <br>• ${criticalVulns > 0 ? 'إصلاح الثغرات الحرجة فوراً' : 'مراقبة دورية ومعالجة تدريجية'}
            <br>• تطبيق التحديثات الأمنية
            <br>• مراجعة سياسات الوصول
            <br>• إجراء اختبار اختراق شامل
        ` : `
            🔍 <strong>Zero-Day Vulnerability Scan</strong>
            <br><br>🎯 <strong>Scanned Target:</strong>
            <br>${target}
            <br><br>⚙️ <strong>Scan Settings:</strong>
            <br>• Deep Scan: ${deepScan ? '✅ Enabled' : '❌ Disabled'}
            <br>• Stealth Mode: ${stealthMode ? '✅ Enabled' : '❌ Disabled'}
            <br>• Scan Duration: ${scanTime} seconds
            <br><br>📊 <strong>Scan Results:</strong>
            <br>• Total Vulnerabilities: ${vulnCount}
            <br>• Critical Vulnerabilities: ${criticalVulns}
            <br>• Risk Rating: ${criticalVulns > 2 ? 'Very High' : criticalVulns > 0 ? 'High' : vulnCount > 3 ? 'Medium' : 'Low'}
            <br><br>🐛 <strong>Detected Vulnerabilities:</strong>
            <br>${detectedVulns.slice(0, 5).map(vuln => 
                `• ${vuln.name === 'Buffer Overflow في خدمة SSH' ? 'SSH Service Buffer Overflow' : vuln.name === 'SQL Injection في تطبيق الويب' ? 'Web Application SQL Injection' : vuln.name === 'Remote Code Execution في API' ? 'API Remote Code Execution' : vuln.name} - <span class="risk-${vuln.severity === 'حرج' ? 'high' : vuln.severity === 'عالي' ? 'medium' : 'low'}">${vuln.severity === 'حرج' ? 'Critical' : vuln.severity === 'عالي' ? 'High' : 'Medium'}</span> (CVSS: ${vuln.cvss})`
            ).join('<br>')}
            ${vulnCount > 5 ? `<br>... and ${vulnCount - 5} more vulnerabilities` : ''}
            <br><br>🛡️ <strong>Tests Completed:</strong>
            <br>• Port and Service Scan: ✅
            <br>• Code Injection Testing: ✅
            <br>• Security Configuration Check: ✅
            <br>• Access Control Testing: ${deepScan ? '✅' : '⚠️'}
            <br>• Protocol Analysis: ${deepScan ? '✅' : '⚠️'}
            <br><br>💡 <strong>Urgent Recommendations:</strong>
            <br>• ${criticalVulns > 0 ? 'Fix critical vulnerabilities immediately' : 'Regular monitoring and gradual remediation'}
            <br>• Apply security updates
            <br>• Review access policies
            <br>• Conduct comprehensive penetration testing
        `;
        
        resultDiv.innerHTML = result;
    }, 4000);
}

// === Quantum-Resistant Crypto Analyzer ===
function analyzeQuantumResistance() {
    const implementation = document.getElementById('cryptoImplementation').value.trim();
    const resultDiv = document.getElementById('quantumCryptoResult');
    
    if (!implementation) {
        resultDiv.innerHTML = '<div class="error">الرجاء إدخال التطبيق المشفر للتحليل</div>';
        return;
    }
    
    dashboardStats.toolsUsed++;
    dashboardStats.scansPerformed++;
    addActivity(currentLang === 'ar' ? 'تم تشغيل محلل التشفير الكمي' : 'Quantum-Resistant Crypto Analyzer executed');
    
    resultDiv.innerHTML = '<div class="loading">🔬 جار تحليل مقاومة التشفير الكمي...</div>';
    
    setTimeout(() => {
        const quantumResistance = Math.floor(Math.random() * 40) + 60;
        const keyStrength = Math.floor(Math.random() * 1024) + 2048;
        const algorithm = ['RSA', 'ECC', 'AES', 'ChaCha20', 'Kyber', 'NTRU'][Math.floor(Math.random() * 6)];
        const postQuantumReady = ['Kyber', 'NTRU', 'ChaCha20'].includes(algorithm);
        
        if (quantumResistance < 70 && !postQuantumReady) {
            dashboardStats.threatsDetected++;
        }
        
        const result = currentLang === 'ar' ? `
            🔬 <strong>تحليل مقاومة التشفير الكمي</strong>
            <br><br>🔐 <strong>التطبيق المحلل:</strong>
            <br>الخوارزمية المكتشفة: ${algorithm}
            <br>قوة المفتاح: ${keyStrength} بت
            <br><br>📊 <strong>نتائج التحليل:</strong>
            <br>• مقاومة الحوسبة الكمية: ${quantumResistance}%
            <br>• جاهزية ما بعد الكم: ${postQuantumReady ? '✅ نعم' : '❌ لا'}
            <br>• أمان ضد Shor's Algorithm: ${postQuantumReady || keyStrength > 3072 ? '✅' : '⚠️'}
            <br>• أمان ضد Grover's Algorithm: ${keyStrength > 2048 ? '✅' : '⚠️'}
            <br><br>🧮 <strong>تحليل الخوارزمية:</strong>
            <br>• النوع: ${algorithm === 'RSA' ? 'غير متماثل (RSA)' : algorithm === 'ECC' ? 'منحنيات إهليلجية' : algorithm === 'AES' ? 'متماثر (AES)' : algorithm === 'ChaCha20' ? 'تدفق (ChaCha20)' : algorithm === 'Kyber' ? 'ما بعد الكم (Kyber)' : 'ما بعد الكم (NTRU)'}
            <br>• قوة المفتاح: ${keyStrength} بت
            <br>• المقاومة الكلاسيكية: ${keyStrength > 2048 ? 'عالية' : 'متوسطة'}
            <br>• المقاومة الكمية: ${postQuantumReady ? 'عالية' : quantumResistance > 80 ? 'جيدة' : 'ضعيفة'}
            <br><br>⏰ <strong>تقدير زمن الكسر:</strong>
            <br>• الحاسوب الكلاسيكي: ${keyStrength > 3072 ? '> 1000 سنة' : keyStrength > 2048 ? '> 100 سنة' : '< 50 سنة'}
            <br>• الحاسوب الكمي: ${postQuantumReady ? '> 1000 سنة' : algorithm === 'AES' && keyStrength >= 256 ? '> 100 سنة' : '< 10 سنوات'}
            <br><br>💡 <strong>التوصيات:</strong>
            <br>• ${postQuantumReady ? 'خوارزمية آمنة ضد الحوسبة الكمية' : 'فكر في الترقية لخوارزميات ما بعد الكم'}
            <br>• ${keyStrength < 2048 ? 'زيادة حجم المفتاح لتحسين الأمان' : 'حجم المفتاح مناسب'}
            <br>• مراقبة تطوير معايير NIST ما بعد الكم
            <br>• تخطيط لاستراتيجية الانتقال التدريجي
        ` : `
            🔬 <strong>Quantum-Resistant Cryptography Analysis</strong>
            <br><br>🔐 <strong>Analyzed Implementation:</strong>
            <br>Detected Algorithm: ${algorithm}
            <br>Key Strength: ${keyStrength} bits
            <br><br>📊 <strong>Analysis Results:</strong>
            <br>• Quantum Resistance: ${quantumResistance}%
            <br>• Post-Quantum Ready: ${postQuantumReady ? '✅ Yes' : '❌ No'}
            <br>• Shor's Algorithm Security: ${postQuantumReady || keyStrength > 3072 ? '✅' : '⚠️'}
            <br>• Grover's Algorithm Security: ${keyStrength > 2048 ? '✅' : '⚠️'}
            <br><br>🧮 <strong>Algorithm Analysis:</strong>
            <br>• Type: ${algorithm === 'RSA' ? 'Asymmetric (RSA)' : algorithm === 'ECC' ? 'Elliptic Curves' : algorithm === 'AES' ? 'Symmetric (AES)' : algorithm === 'ChaCha20' ? 'Stream (ChaCha20)' : algorithm === 'Kyber' ? 'Post-Quantum (Kyber)' : 'Post-Quantum (NTRU)'}
            <br>• Key Strength: ${keyStrength} bits
            <br>• Classical Resistance: ${keyStrength > 2048 ? 'High' : 'Medium'}
            <br>• Quantum Resistance: ${postQuantumReady ? 'High' : quantumResistance > 80 ? 'Good' : 'Weak'}
            <br><br>⏰ <strong>Breaking Time Estimation:</strong>
            <br>• Classical Computer: ${keyStrength > 3072 ? '> 1000 years' : keyStrength > 2048 ? '> 100 years' : '< 50 years'}
            <br>• Quantum Computer: ${postQuantumReady ? '> 1000 years' : algorithm === 'AES' && keyStrength >= 256 ? '> 100 years' : '< 10 years'}
            <br><br>💡 <strong>Recommendations:</strong>
            <br>• ${postQuantumReady ? 'Algorithm is quantum-safe' : 'Consider upgrading to post-quantum algorithms'}
            <br>• ${keyStrength < 2048 ? 'Increase key size for better security' : 'Key size is adequate'}
            <br>• Monitor NIST post-quantum standards development
            <br>• Plan gradual migration strategy
        `;
        
        resultDiv.innerHTML = result;
    }, 3500);
}

// === Incident Response Simulator ===
function startIncidentSimulation() {
    const incidentType = document.getElementById('incidentType').value;
    const resultDiv = document.getElementById('incidentSimResult');
    
    dashboardStats.toolsUsed++;
    dashboardStats.scansPerformed++;
    addActivity(currentLang === 'ar' ? 'تم تشغيل محاكي الاستجابة للحوادث' : 'Incident Response Simulator executed');
    
    resultDiv.innerHTML = '<div class="loading">🚨 جار محاكاة حادث الأمان...</div>';
    
    setTimeout(() => {
        const severity = Math.random() > 0.6 ? 'عالي' : Math.random() > 0.3 ? 'متوسط' : 'منخفض';
        const affectedSystems = Math.floor(Math.random() * 20) + 5;
        const detectionTime = Math.floor(Math.random() * 60) + 10;
        const containmentTime = Math.floor(Math.random() * 120) + 30;
        
        if (severity === 'عالي') {
            dashboardStats.threatsDetected++;
        }
        
        const incidentTypes = {
            malware: {
                ar: 'هجوم برمجية خبيثة',
                en: 'Malware Attack',
                description_ar: 'اكتشاف برمجية خبيثة في الشبكة',
                description_en: 'Malware detected in network'
            },
            breach: {
                ar: 'خرق البيانات',
                en: 'Data Breach',
                description_ar: 'وصول غير مصرح للبيانات الحساسة',
                description_en: 'Unauthorized access to sensitive data'
            },
            ddos: {
                ar: 'هجوم DDoS',
                en: 'DDoS Attack',
                description_ar: 'هجوم حجب الخدمة الموزع',
                description_en: 'Distributed Denial of Service attack'
            },
            insider: {
                ar: 'تهديد داخلي',
                en: 'Insider Threat',
                description_ar: 'نشاط مشبوه من مستخدم داخلي',
                description_en: 'Suspicious activity from internal user'
            }
        };
        
        const selectedIncident = incidentTypes[incidentType];
        
        const responseSteps = currentLang === 'ar' ? [
            '1️⃣ تحديد وتوثيق الحادث',
            '2️⃣ إبلاغ فريق الاستجابة',
            '3️⃣ احتواء التهديد',
            '4️⃣ جمع الأدلة الجنائية',
            '5️⃣ القضاء على التهديد',
            '6️⃣ استعادة النظم',
            '7️⃣ تحليل ما بعد الحادث'
        ] : [
            '1️⃣ Identification and Documentation',
            '2️⃣ Response Team Notification',
            '3️⃣ Threat Containment',
            '4️⃣ Evidence Collection',
            '5️⃣ Threat Eradication',
            '6️⃣ System Recovery',
            '7️⃣ Post-Incident Analysis'
        ];
        
        const result = currentLang === 'ar' ? `
            🚨 <strong>محاكاة الاستجابة للحوادث</strong>
            <br><br>🎯 <strong>نوع الحادث:</strong>
            <br>${selectedIncident.ar} - ${selectedIncident.description_ar}
            <br><br>📊 <strong>تفاصيل الحادث:</strong>
            <br>• مستوى الخطورة: <span class="risk-${severity === 'عالي' ? 'high' : severity === 'متوسط' ? 'medium' : 'low'}">${severity}</span>
            <br>• الأنظمة المتأثرة: ${affectedSystems}
            <br>• وقت الاكتشاف: ${detectionTime} دقيقة
            <br>• وقت الاحتواء: ${containmentTime} دقيقة
            <br>• حالة التصعيد: ${severity === 'عالي' ? 'مطلوب' : 'غير مطلوب'}
            <br><br>📋 <strong>خطوات الاستجابة:</strong>
            <br>${responseSteps.join('<br>')}
            <br><br>👥 <strong>الفرق المعنية:</strong>
            <br>• فريق الاستجابة الأولي: 4 أعضاء
            <br>• الطب الشرعي الرقمي: ${severity === 'عالي' ? '2 أعضاء' : '1 عضو'}
            <br>• فريق الاتصالات: ${severity === 'عالي' ? 'مُفعّل' : 'استعداد'}
            <br>• الإدارة العليا: ${severity === 'عالي' ? 'مُبلغة' : 'على علم'}
            <br><br>📈 <strong>مؤشرات الأداء:</strong>
            <br>• زمن الاستجابة: ${detectionTime < 30 ? 'ممتاز' : detectionTime < 60 ? 'جيد' : 'يحتاج تحسين'}
            <br>• فعالية الاحتواء: ${containmentTime < 60 ? 'عالية' : containmentTime < 120 ? 'متوسطة' : 'منخفضة'}
            <br>• التوثيق: مكتمل ✅
            <br>• التواصل: ${severity === 'عالي' ? 'مُفعّل بالكامل' : 'داخلي فقط'}
            <br><br>💡 <strong>الدروس المستفادة:</strong>
            <br>• ${detectionTime > 45 ? 'تحسين نظم المراقبة مطلوب' : 'أداء ممتاز في الكشف المبكر'}
            <br>• ${containmentTime > 100 ? 'مراجعة إجراءات الاحتواء' : 'إجراءات الاحتواء فعالة'}
            <br>• تحديث خطط الاستجابة للحوادث
            <br>• تدريب إضافي للفرق المعنية
        ` : `
            🚨 <strong>Incident Response Simulation</strong>
            <br><br>🎯 <strong>Incident Type:</strong>
            <br>${selectedIncident.en} - ${selectedIncident.description_en}
            <br><br>📊 <strong>Incident Details:</strong>
            <br>• Severity Level: <span class="risk-${severity === 'عالي' ? 'high' : severity === 'متوسط' ? 'medium' : 'low'}">${severity === 'عالي' ? 'High' : severity === 'متوسط' ? 'Medium' : 'Low'}</span>
            <br>• Affected Systems: ${affectedSystems}
            <br>• Detection Time: ${detectionTime} minutes
            <br>• Containment Time: ${containmentTime} minutes
            <br>• Escalation Status: ${severity === 'عالي' ? 'Required' : 'Not Required'}
            <br><br>📋 <strong>Response Steps:</strong>
            <br>${responseSteps.join('<br>')}
            <br><br>👥 <strong>Involved Teams:</strong>
            <br>• Initial Response Team: 4 members
            <br>• Digital Forensics: ${severity === 'عالي' ? '2 members' : '1 member'}
            <br>• Communications Team: ${severity === 'عالي' ? 'Activated' : 'On Standby'}
            <br>• Executive Management: ${severity === 'عالي' ? 'Notified' : 'Informed'}
            <br><br>📈 <strong>Performance Metrics:</strong>
            <br>• Response Time: ${detectionTime < 30 ? 'Excellent' : detectionTime < 60 ? 'Good' : 'Needs Improvement'}
            <br>• Containment Effectiveness: ${containmentTime < 60 ? 'High' : containmentTime < 120 ? 'Medium' : 'Low'}
            <br>• Documentation: Complete ✅
            <br>• Communication: ${severity === 'عالي' ? 'Fully Activated' : 'Internal Only'}
            <br><br>💡 <strong>Lessons Learned:</strong>
            <br>• ${detectionTime > 45 ? 'Monitoring systems improvement needed' : 'Excellent early detection performance'}
            <br>• ${containmentTime > 100 ? 'Review containment procedures' : 'Effective containment procedures'}
            <br>• Update incident response plans
            <br>• Additional training for response teams
        `;
        
        resultDiv.innerHTML = result;
    }, 3800);
}

// === Enhanced Live Security Monitor Functions ===
let scanTimer = 150; // 2.5 minutes in seconds
let scanInterval;
let activityData = [];
let currentFilter = 'all';

function initializeLiveSecurityMonitor() {
    console.log('🔰 Initializing Live Security Monitor...');
    
    // Initialize scan timer
    startScanTimer();
    
    // Initialize activity data
    loadInitialActivityData();
    
    // Start real-time updates
    setInterval(updateSecurityStats, 10000); // Every 10 seconds
    setInterval(addRandomSecurityEvent, 20000); // Every 20 seconds
    
    // Initialize current time for system init
    updateInitTime();
    
    // Setup activity filtering
    setupActivityFiltering();
    
    // Initialize dashboard system activity
    initializeSystemActivity();
    
    console.log('🔰 Live Security Monitor initialized successfully!');
}

function initializeSystemActivity() {
    // Set the system initialization time
    const now = new Date();
    const timeString = now.toLocaleTimeString('ar', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
    });
    
    // Update system init time in the activity feed
    const systemInitTime = document.getElementById('systemInitTime');
    if (systemInitTime) {
        systemInitTime.textContent = timeString;
    }
    
    // Add initial system activity if not exists
    const activityList = document.getElementById('securityActivityList');
    if (activityList) {
        const existingSystemEvent = activityList.querySelector('.activity-event[data-type="system"]');
        if (existingSystemEvent) {
            // Update existing event time
            const eventTime = existingSystemEvent.querySelector('.event-time');
            if (eventTime) {
                eventTime.textContent = timeString;
            }
        }
    }
    
    // Show initialization notification
    setTimeout(() => {
        showSecurityNotification('تم تفعيل مراقب الأمان المباشر بنجاح');
    }, 1000);
}

function startScanTimer() {
    console.log('🔰 Starting security scan timer...');
    
    clearInterval(scanInterval);
    scanTimer = 150; // Reset to 2.5 minutes
    
    scanInterval = setInterval(() => {
        scanTimer--;
        updateTimerDisplay();
        
        if (scanTimer <= 0) {
            triggerAutomaticScan();
            scanTimer = 150; // Reset timer
        }
    }, 1000);
    
    // Initial display update
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(scanTimer / 60);
    const seconds = scanTimer % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    const timerDisplay = document.getElementById('timerDisplay');
    if (timerDisplay) {
        timerDisplay.textContent = display;
        
        // Add urgency color when time is low
        if (scanTimer <= 30) {
            timerDisplay.style.color = '#ff4757';
            timerDisplay.style.animation = 'pulse 1s infinite';
        } else if (scanTimer <= 60) {
            timerDisplay.style.color = '#ffa502';
            timerDisplay.style.animation = '';
        } else {
            timerDisplay.style.color = '#00ff88';
            timerDisplay.style.animation = '';
        }
    }
}

// نظام المراقبة المتقدم المتكامل
class AdvancedSecurityMonitor {
    constructor() {
        this.isRunning = false;
        this.scanInterval = null;
        this.alertsEnabled = true;
        this.soundEnabled = true;
        this.settings = {
            scanning: {
                interval: 30,  // بالثواني
                depth: 'standard',
                autoScan: true,
                realTimeProtection: true,
                scheduledScan: true,
                scanOnStartup: false
            },
            alerts: {
                enabled: true,
                sound: true,
                desktop: true,
                email: false,
                severity: 'medium',
                frequency: 'all'
            },
            display: {
                theme: 'dark',
                compactView: false,
                animationsEnabled: true,
                language: 'ar',
                fontSize: 'medium'
            },
            security: {
                advancedThreatDetection: true,
                behaviorAnalysis: false,
                networkMonitoring: true,
                fileIntegrityCheck: false,
                quarantineMode: 'auto'
            },
            performance: {
                cpuUsage: 'medium',
                lowPowerMode: false,
                backgroundScanning: true,
                resourceLimit: 50,
                priorityMode: 'balanced',
                cacheOptimization: true
            }
        };
        this.stats = {
            scansPerformed: 0,
            threatsDetected: 0,
            eventsToday: 0,
            uptime: 0
        };
        this.eventHistory = [];
        this.lastScanTime = null;
        this.threatLevel = 'low';
        this.intervalOptions = {
            10: 'كل 10 ثوان',
            15: 'كل 15 ثانية', 
            30: 'كل 30 ثانية',
            60: 'كل دقيقة',
            120: 'كل دقيقتين',
            300: 'كل 5 دقائق',
            600: 'كل 10 دقائق',
            900: 'كل 15 دقيقة',
            1800: 'كل 30 دقيقة',
            3600: 'كل ساعة'
        };
    }

    // بدء النظام
    start() {
        console.log('🚀 بدء نظام المراقبة المتقدم...');
        this.isRunning = true;
        this.loadSettings();
        this.initializeMonitoring();
        this.updateUI();
        
        // بدء مؤقت التحديث
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.timerInterval = setInterval(() => {
            this.updateScanTimer();
        }, 1000);
        
        const message = currentLang === 'ar' ? 'تم تفعيل نظام المراقبة المتقدم' : 'Advanced Monitoring System Activated';
        this.addSystemEvent('system', message, 'normal');
        
        if (typeof showProfessionalNotification === 'function') {
            showProfessionalNotification(message, 'success');
        }
    }

    // إيقاف النظام
    stop() {
        console.log('⏹️ إيقاف نظام المراقبة...');
        this.isRunning = false;
        if (this.scanInterval) {
            clearInterval(this.scanInterval);
            this.scanInterval = null;
        }
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        
        const message = currentLang === 'ar' ? 'تم إيقاف نظام المراقبة' : 'Monitoring System Stopped';
        this.addSystemEvent('system', message, 'warning');
        
        // تحديث مؤقت العرض
        const timerDisplay = document.getElementById('timerDisplay');
        if (timerDisplay) {
            timerDisplay.textContent = currentLang === 'ar' ? 'متوقف' : 'Stopped';
            timerDisplay.style.color = '#ff6b6b';
        }
    }

    // تحميل الإعدادات
    loadSettings() {
        try {
            const saved = localStorage.getItem('cyberGuardAdvancedSettings');
            if (saved) {
                const settings = JSON.parse(saved);
                this.settings = { ...this.settings, ...settings };
                console.log('✅ تم تحميل الإعدادات المحفوظة');
            }
        } catch (error) {
            console.error('❌ خطأ في تحميل الإعدادات:', error);
        }
    }

    // حفظ الإعدادات
    saveSettings() {
        try {
            localStorage.setItem('cyberGuardAdvancedSettings', JSON.stringify(this.settings));
            console.log('💾 تم حفظ الإعدادات');
            this.applySettings();
            return true;
        } catch (error) {
            console.error('❌ خطأ في حفظ الإعدادات:', error);
            return false;
        }
    }

    // تطبيق الإعدادات
    applySettings() {
        // تطبيق إعدادات المسح
        if (this.settings.scanning.autoScan && this.isRunning) {
            this.setupAutoScan();
        } else {
            this.stopAutoScan();
        }

        // تطبيق إعدادات العرض
        this.applyDisplaySettings();

        // تطبيق إعدادات الأمان
        this.applySecuritySettings();

        // تحديث واجهة المستخدم
        this.updateUI();

        console.log('⚙️ تم تطبيق جميع الإعدادات');
    }

    // إعداد المسح التلقائي
    setupAutoScan() {
        if (this.scanInterval) {
            clearInterval(this.scanInterval);
        }

        const intervalMinutes = this.settings.scanning.interval;
        const intervalMs = intervalMinutes * 60 * 1000;

        this.scanInterval = setInterval(() => {
            this.performAutomaticScan();
        }, intervalMs);

        console.log(`🔄 تم تفعيل المسح التلقائي كل ${intervalMinutes} دقيقة`);
    }

    // إيقاف المسح التلقائي
    stopAutoScan() {
        if (this.scanInterval) {
            clearInterval(this.scanInterval);
            this.scanInterval = null;
            console.log('⏸️ تم إيقاف المسح التلقائي');
        }
    }

    // تنفيذ مسح تلقائي
    performAutomaticScan() {
        console.log('🔍 تنفيذ مسح تلقائي...');
        
        this.stats.scansPerformed++;
        this.lastScanTime = new Date();
        
        // محاكاة نتائج الفحص
        const scanResults = this.simulateScanResults();
        
        // إضافة حدث الفحص
        const message = currentLang === 'ar' ? `فحص تلقائي مكتمل - ${scanResults.status}` : `Automatic scan completed - ${scanResults.statusEn}`;
        this.addSystemEvent('scan', message, scanResults.priority);
        
        // عرض النتائج إذا كانت التنبيهات مفعلة
        if (this.settings.alerts.enabled) {
            this.showScanNotification(scanResults);
        }
        
        // تحديث الواجهة
        this.updateUI();
    }

    // تنفيذ مسح يدوي
    performManualScan() {
        console.log('👆 تنفيذ مسح يدوي...');
        
        // إظهار أنيميشن المسح
        this.showScanAnimation();
        
        setTimeout(() => {
            this.stats.scansPerformed++;
            this.lastScanTime = new Date();
            
            const scanResults = this.simulateScanResults();
            scanResults.type = 'manual';
            
            const message = currentLang === 'ar' ? `فحص يدوي مكتمل - ${scanResults.status}` : `Manual scan completed - ${scanResults.statusEn}`;
            this.addSystemEvent('scan', message, scanResults.priority);
            
            if (this.settings.alerts.enabled) {
                this.showScanNotification(scanResults);
            }
            
            this.updateUI();
            this.hideScanAnimation();
        }, 3000);
    }

    // محاكاة نتائج الفحص
    simulateScanResults() {
        const outcomes = [
            { 
                status: 'نظيف', 
                statusEn: 'Clean',
                threats: 0, 
                priority: 'normal' 
            },
            { 
                status: 'نظيف', 
                statusEn: 'Clean',
                threats: 0, 
                priority: 'normal' 
            },
            { 
                status: 'نظيف', 
                statusEn: 'Clean',
                threats: 0, 
                priority: 'normal' 
            },
            { 
                status: 'تم العثور على تهديدات', 
                statusEn: 'Threats detected',
                threats: Math.floor(Math.random() * 3) + 1, 
                priority: 'high' 
            },
            { 
                status: 'تحذيرات أمنية', 
                statusEn: 'Security warnings',
                threats: Math.floor(Math.random() * 2) + 1, 
                priority: 'medium' 
            }
        ];
        
        const result = outcomes[Math.floor(Math.random() * outcomes.length)];
        
        if (result.threats > 0) {
            this.stats.threatsDetected += result.threats;
            this.threatLevel = result.priority === 'high' ? 'high' : 'medium';
        }
        
        return result;
    }

    // إضافة حدث نظام
    addSystemEvent(type, message, priority = 'normal') {
        const event = {
            id: Date.now(),
            type: type,
            message: message,
            priority: priority,
            timestamp: new Date(),
            time: new Date().toLocaleTimeString('ar-EG', { 
                hour: '2-digit', 
                minute: '2-digit' 
            })
        };
        
        this.eventHistory.unshift(event);
        this.stats.eventsToday++;
        
        // إضافة الحدث للواجهة
        this.addEventToUI(event);
        
        // الاحتفاظ بآخر 100 حدث فقط
        if (this.eventHistory.length > 100) {
            this.eventHistory = this.eventHistory.slice(0, 100);
        }
    }

    // إضافة حدث للواجهة
    addEventToUI(event) {
        const activityList = document.getElementById('securityActivityList');
        if (!activityList) return;
        
        const eventElement = document.createElement('div');
        eventElement.className = `activity-event ${event.type}`;
        eventElement.setAttribute('data-type', event.type);
        
        const icons = {
            system: `<svg viewBox="0 0 24 24" width="14" height="14">
                        <path fill="#00ff88" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>`,
            scan: `<svg viewBox="0 0 24 24" width="14" height="14">
                     <path fill="#00ff88" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                   </svg>`,
            threat: `<svg viewBox="0 0 24 24" width="14" height="14">
                       <path fill="#ff4757" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                     </svg>`
        };
        
        eventElement.innerHTML = `
            <div class="event-timeline">
                <div class="event-time">${event.time}</div>
                <div class="event-indicator ${event.type}-indicator">
                    ${icons[event.type] || icons.system}
                </div>
            </div>
            <div class="event-content">
                <div class="event-title">${event.message}</div>
                <div class="event-details">
                    <span class="event-category ${event.type}">${event.type.toUpperCase()}</span>
                    <span class="event-priority ${event.priority}">${this.getPriorityText(event.priority)}</span>
                </div>
            </div>
        `;
        
        // إضافة أنيميشن
        eventElement.style.opacity = '0';
        eventElement.style.transform = 'translateY(-10px)';
        
        activityList.insertBefore(eventElement, activityList.firstChild);
        
        // تفعيل الأنيميشن
        setTimeout(() => {
            eventElement.style.opacity = '1';
            eventElement.style.transform = 'translateY(0)';
            eventElement.style.transition = 'all 0.3s ease';
        }, 100);
        
        // إزالة الأحداث القديمة (أكثر من 20)
        const events = activityList.querySelectorAll('.activity-event');
        if (events.length > 20) {
            for (let i = 20; i < events.length; i++) {
                events[i].remove();
            }
        }
    }

    // نص الأولوية
    getPriorityText(priority) {
        const texts = {
            normal: 'عادي',
            medium: 'متوسط',
            high: 'عالي',
            critical: 'حرج'
        };
        return texts[priority] || 'عادي';
    }

    // تطبيق إعدادات العرض
    applyDisplaySettings() {
        const body = document.body;
        
        // الوضع المظلم/المضيء
        if (this.settings.display.theme === 'light') {
            body.classList.add('light-theme');
        } else {
            body.classList.remove('light-theme');
        }
        
        // العرض المدمج
        if (this.settings.display.compactView) {
            body.classList.add('compact-view');
        } else {
            body.classList.remove('compact-view');
        }
        
        // الأنيميشن
        if (!this.settings.display.animationsEnabled) {
            body.classList.add('no-animations');
        } else {
            body.classList.remove('no-animations');
        }
    }

    // تطبيق إعدادات الأمان
    applySecuritySettings() {
        // تفعيل/إلغاء تفعيل المراقبة المتقدمة
        if (this.settings.security.advancedThreatDetection) {
            console.log('🛡️ تم تفعيل الكشف المتقدم عن التهديدات');
        }
        
        if (this.settings.security.networkMonitoring) {
            console.log('🌐 تم تفعيل مراقبة الشبكة');
        }
    }

    // تحديث واجهة المستخدم
    updateUI() {
        // تحديث الإحصائيات
        this.updateStatistics();
        
        // تحديث مؤشر الحالة
        this.updateStatusIndicator();
        
        // تحديث عداد المؤقت
        this.updateScanTimer();
        
        // تحديث واجهة الإعدادات
        this.updateSettingsUI();
    }
    
    // تحديث واجهة الإعدادات
    updateSettingsUI() {
        // تحديث فترة المسح
        const scanIntervalSelect = document.getElementById('scanInterval');
        if (scanIntervalSelect) {
            scanIntervalSelect.value = this.settings.scanning.interval;
            updateScanInterval(this.settings.scanning.interval); // تحديث النص التوضيحي
        }
        
        // تحديث المسح التلقائي
        const autoScanCheckbox = document.getElementById('autoScan');
        if (autoScanCheckbox) {
            autoScanCheckbox.checked = this.settings.scanning.autoScan;
        }
        
        // تحديث التنبيهات
        const alertsElements = {
            soundAlerts: this.settings.alerts.sound,
            desktopNotifications: this.settings.alerts.desktop,
            emailAlerts: this.settings.alerts.email
        };
        
        Object.entries(alertsElements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
                element.checked = value;
            }
        });
    }

    // تحديث الإحصائيات
    updateStatistics() {
        const elements = {
            scansPerformed: document.getElementById('scansPerformed'),
            threatsDetected: document.getElementById('threatsDetected'),
            threatsBlocked: document.getElementById('threatsBlocked'),
            eventsToday: document.getElementById('eventsToday'),
            activeToolsCount: document.getElementById('activeToolsCount'),
            toolsUsedCount: document.getElementById('toolsUsedCount')
        };
        
        Object.entries(elements).forEach(([key, element]) => {
            if (element) {
                element.textContent = this.stats[key] || 0;
            }
        });
    }

    // تحديث مؤشر الحالة
    updateStatusIndicator() {
        const statusText = document.querySelector('.status-text');
        const statusDot = document.querySelector('.status-dot');
        
        if (statusText && statusDot) {
            if (this.isRunning) {
                statusText.textContent = 'نشط';
                statusDot.classList.add('active');
            } else {
                statusText.textContent = 'متوقف';
                statusDot.classList.remove('active');
            }
        }
    }

    // عرض أنيميشن المسح
    showScanAnimation() {
        const scanBtn = document.querySelector('.scan-now');
        if (scanBtn) {
            scanBtn.style.background = 'rgba(0, 255, 136, 0.3)';
            scanBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="16" height="16" style="animation: spin 1s linear infinite;">
                    <path fill="currentColor" d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/>
                </svg>
                <span>جاري الفحص...</span>
            `;
        }
    }

    // إخفاء أنيميشن المسح
    hideScanAnimation() {
        const scanBtn = document.querySelector('.scan-now');
        if (scanBtn) {
            scanBtn.style.background = '';
            scanBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
                <span>فحص الآن</span>
            `;
        }
    }

    // عرض إشعار المسح
    showScanNotification(results) {
        if (!this.settings.alerts.enabled) return;
        
        const message = results.type === 'manual' ? 
            `فحص يدوي مكتمل: ${results.status}` : 
            `فحص تلقائي مكتمل: ${results.status}`;
            
        const type = results.threats > 0 ? 'warning' : 'success';
        
        if (typeof showProfessionalNotification === 'function') {
            showProfessionalNotification(message, type);
        }
        
        // تشغيل صوت إذا كان مفعلاً
        if (this.settings.alerts.sound && results.threats > 0) {
            this.playAlertSound();
        }
    }

    // تشغيل صوت التنبيه
    playAlertSound() {
        try {
            // محاكاة صوت التنبيه
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjeK0fDScCoEIHPG7+OVQU0OUqPk77JcIw==');
            audio.volume = 0.3;
            audio.play().catch(e => console.log('لا يمكن تشغيل الصوت:', e));
        } catch (error) {
            console.log('خطأ في تشغيل الصوت:', error);
        }
    }

    // مسح سجل الأحداث
    clearEventLog() {
        console.log('🧹 مسح سجل الأحداث...');
        
        this.eventHistory = [];
        this.stats.eventsToday = 0;
        
        const activityList = document.getElementById('securityActivityList');
        if (activityList) {
            activityList.innerHTML = '';
        }
        
        this.addSystemEvent('system', 'تم مسح سجل الأحداث', 'normal');
        this.updateUI();
        
        if (typeof showProfessionalNotification === 'function') {
            showProfessionalNotification('تم مسح سجل الأنشطة بنجاح', 'success');
        }
    }

    // تحديث مؤقت المسح
    updateScanTimer() {
        if (!this.settings.scanning.autoScan || !this.isRunning) {
            const timerDisplay = document.getElementById('timerDisplay');
            if (timerDisplay) {
                timerDisplay.textContent = currentLang === 'ar' ? 'غير نشط' : 'Inactive';
                timerDisplay.style.color = '#ff6b6b';
            }
            return;
        }
        
        const timerDisplay = document.getElementById('timerDisplay');
        if (!timerDisplay) return;
        
        const intervalMs = this.settings.scanning.interval * 60 * 1000;
        const now = Date.now();
        const lastScan = this.lastScanTime ? this.lastScanTime.getTime() : now;
        const nextScan = lastScan + intervalMs;
        const remaining = Math.max(0, nextScan - now);
        
        if (remaining <= 0) {
            // وقت بدء المسح الجديد
            this.performAutomaticScan();
            return;
        }
        
        const minutes = Math.floor(remaining / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);
        
        const timeText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        const prefix = currentLang === 'ar' ? 'الفحص التالي خلال: ' : 'Next scan in: ';
        
        timerDisplay.textContent = prefix + timeText;
        
        if (remaining < 30000) {
            timerDisplay.style.color = '#ff4757';
            timerDisplay.style.animation = 'pulse 1s infinite';
        } else if (remaining < 60000) {
            timerDisplay.style.color = '#ffa726';
            timerDisplay.style.animation = '';
        } else {
            timerDisplay.style.color = '#00ff88';
            timerDisplay.style.animation = '';
        }
    }

    // تنفيذ المسح التلقائي
    performAutomaticScan() {
        if (!this.isRunning || !this.settings.scanning.autoScan) return;
        
        this.lastScanTime = new Date();
        this.stats.scansPerformed++;
        
        const message = currentLang === 'ar' ? 'تم تنفيذ مسح تلقائي' : 'Automatic scan performed';
        this.addSystemEvent('scan', message, 'normal');
        
        // محاكاة نتائج المسح
        const randomThreat = Math.random() < 0.1; // 10% احتمال اكتشاف تهديد
        if (randomThreat) {
            this.stats.threatsDetected++;
            const threatMessage = currentLang === 'ar' ? 'تم اكتشاف تهديد محتمل' : 'Potential threat detected';
            this.addSystemEvent('threat', threatMessage, 'high');
            
            if (typeof showProfessionalNotification === 'function') {
                showProfessionalNotification(threatMessage, 'warning');
            }
        }
        
        this.updateUI();
        
        // إعادة بدء المؤقت للمسح التالي
        this.resetScanTimer();
    }

    // تنفيذ المسح اليدوي
    performManualScan() {
        if (!this.isRunning) {
            const message = currentLang === 'ar' ? 'النظام غير نشط' : 'System not active';
            if (typeof showProfessionalNotification === 'function') {
                showProfessionalNotification(message, 'error');
            }
            return;
        }
        
        this.lastScanTime = new Date();
        this.stats.scansPerformed++;
        
        const message = currentLang === 'ar' ? 'تم تنفيذ مسح يدوي' : 'Manual scan performed';
        this.addSystemEvent('scan', message, 'normal');
        
        // محاكاة مسح سريع
        const scanResults = Math.floor(Math.random() * 3) + 1; // 1-3 نتائج
        for (let i = 0; i < scanResults; i++) {
            setTimeout(() => {
                const results = [
                    { ar: 'فحص ملفات النظام', en: 'System files check' },
                    { ar: 'فحص الشبكة', en: 'Network scan' },
                    { ar: 'فحص العمليات النشطة', en: 'Active processes check' }
                ];
                const result = results[i % results.length];
                const resultMessage = currentLang === 'ar' ? result.ar : result.en;
                this.addSystemEvent('scan', resultMessage + ' ✓', 'normal');
            }, i * 500);
        }
        
        this.updateUI();
        
        if (typeof showProfessionalNotification === 'function') {
            showProfessionalNotification(message, 'success');
        }
    }

    // إعادة تعيين مؤقت المسح
    resetScanTimer() {
        if (this.settings.scanning.autoScan && this.isRunning) {
            this.lastScanTime = new Date();
        }
    }
}

// إنشاء مثيل النظام العالمي
const advancedSecurityMonitor = new AdvancedSecurityMonitor();

function triggerManualScan() {
    advancedSecurityMonitor.performManualScan();
}

function clearSecurityLog() {
    advancedSecurityMonitor.clearEventLog();
}

// تحديث فترة المسح فورياً
function updateScanInterval(seconds) {
    const intervalSeconds = parseInt(seconds);
    
    // تحديث النص التوضيحي
    const intervalDisplay = document.getElementById('intervalDisplay');
    if (intervalDisplay) {
        if (intervalSeconds < 60) {
            intervalDisplay.textContent = `${intervalSeconds} ثانية`;
        } else if (intervalSeconds < 3600) {
            const minutes = Math.floor(intervalSeconds / 60);
            intervalDisplay.textContent = `${minutes} دقيقة`;
        } else {
            const hours = Math.floor(intervalSeconds / 3600);
            intervalDisplay.textContent = `${hours} ساعة`;
        }
    }
    
    // تطبيق التغيير فوراً على النظام
    if (window.advancedSecurityMonitor) {
        advancedSecurityMonitor.settings.scanning.interval = intervalSeconds;
        
        // إعادة تشغيل المسح التلقائي بالفترة الجديدة
        if (advancedSecurityMonitor.settings.scanning.autoScan && advancedSecurityMonitor.isRunning) {
            advancedSecurityMonitor.setupAutoScan();
            console.log(`🔄 تم تحديث فترة المسح إلى ${intervalSeconds} ثانية`);
            
            // إشعار للمستخدم
            if (typeof showProfessionalNotification === 'function') {
                const timeText = intervalDisplay ? intervalDisplay.textContent : `${intervalSeconds} ثانية`;
                showProfessionalNotification(`تم تحديث فترة المسح إلى ${timeText} ⏰`, 'success');
            }
            
            // إضافة حدث للنظام
            advancedSecurityMonitor.addSystemEvent('system', `تم تحديث فترة المسح إلى ${intervalSeconds} ثانية`, 'normal');
        }
        
        // حفظ الإعدادات
        advancedSecurityMonitor.saveSettings();
    }
}

// تحديث حالة المسح التلقائي فورياً
function toggleAutoScan(enabled) {
    if (window.advancedSecurityMonitor) {
        advancedSecurityMonitor.settings.scanning.autoScan = enabled;
        
        if (enabled && advancedSecurityMonitor.isRunning) {
            advancedSecurityMonitor.setupAutoScan();
            console.log('✅ تم تفعيل المسح التلقائي');
            if (typeof showProfessionalNotification === 'function') {
                showProfessionalNotification('تم تفعيل المسح التلقائي 🔄', 'success');
            }
            advancedSecurityMonitor.addSystemEvent('system', 'تم تفعيل المسح التلقائي', 'normal');
        } else {
            advancedSecurityMonitor.stopAutoScan();
            console.log('⏸️ تم إيقاف المسح التلقائي');
            if (typeof showProfessionalNotification === 'function') {
                showProfessionalNotification('تم إيقاف المسح التلقائي ⏸️', 'warning');
            }
            advancedSecurityMonitor.addSystemEvent('system', 'تم إيقاف المسح التلقائي', 'warning');
        }
        
        advancedSecurityMonitor.saveSettings();
    }
}

// تحديث إعدادات التنبيهات فورياً
function updateAlertsSettings(setting, value) {
    if (window.advancedSecurityMonitor) {
        advancedSecurityMonitor.settings.alerts[setting] = value;
        
        // رسائل خاصة لكل إعداد
        const messages = {
            enabled: value ? 'تم تفعيل التنبيهات 🔔' : 'تم إيقاف التنبيهات 🔕',
            sound: value ? 'تم تفعيل التنبيهات الصوتية 🔊' : 'تم إيقاف التنبيهات الصوتية 🔇',
            desktop: value ? 'تم تفعيل الإشعارات المكتبية 💻' : 'تم إيقاف الإشعارات المكتبية',
            email: value ? 'تم تفعيل إشعارات البريد الإلكتروني 📧' : 'تم إيقاف إشعارات البريد الإلكتروني'
        };
        
        if (messages[setting] && typeof showProfessionalNotification === 'function') {
            showProfessionalNotification(messages[setting], 'success');
        }
        
        advancedSecurityMonitor.addSystemEvent('system', `تم تحديث إعدادات التنبيهات: ${setting}`, 'normal');
        advancedSecurityMonitor.saveSettings();
    }
}

function openMonitorSettings() {
    createAdvancedMonitorSettingsModal();
}

// إعدادات المراقب الافتراضية المحسنة
const monitorSettings = {
    scanning: {
        interval: 30,
        depth: 'standard',
        autoScan: true,
        realTimeProtection: true,
        scheduledScan: false,
        scanOnStartup: true
    },
    alerts: {
        enabled: true,
        sound: true,
        desktop: true,
        email: false,
        level: 'medium',
        customSound: false,
        urgentAlert: true
    },
    display: {
        maxEvents: 100,
        refreshRate: 5,
        showTimestamps: true,
        animateEvents: true,
        darkMode: true,
        compactView: false,
        showIcons: true
    },
    advanced: {
        logToFile: false,
        debugMode: false,
        logLevel: 'info',
        customRules: false,
        autoUpdate: true,
        cloudSync: false
    },
    performance: {
        cpuUsage: 'medium',
        lowPowerMode: false,
        backgroundScanning: true,
        resourceLimit: 50,
        priorityMode: 'balanced',
        cacheOptimization: true
    },
    security: {
        advancedThreatDetection: true,
        behaviorAnalysis: false,
        networkMonitoring: true,
        fileIntegrityCheck: false,
        quarantineMode: 'auto'
    }
};

function createAdvancedMonitorSettingsModal() {
    // إزالة النافذة الموجودة إن وجدت
    const existingModal = document.querySelector('.advanced-monitor-settings-modal');
    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.className = 'advanced-monitor-settings-modal';
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="closeAdvancedModal()"></div>
        <div class="professional-settings-container">
            <div class="professional-header">
                <div class="header-icon-group">
                    <div class="main-settings-icon">
                        <svg viewBox="0 0 24 24" width="32" height="32">
                            <defs>
                                <linearGradient id="settingsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#00ff88;stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#00d4aa;stop-opacity:1" />
                                </linearGradient>
                            </defs>
                            <path fill="url(#settingsGradient)" d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                            <circle cx="12" cy="12" r="2" fill="rgba(255,255,255,0.9)" />
                        </svg>
                    </div>
                    <div class="header-text-group">
                        <h1 class="professional-title" data-ar="إعدادات المراقب المتقدمة" data-en="Advanced Monitor Settings">${currentLang === 'ar' ? 'إعدادات المراقب المتقدمة' : 'Advanced Monitor Settings'}</h1>
                        <p class="professional-subtitle" data-ar="تحكم كامل في نظام المراقبة والأمان" data-en="Complete control over monitoring and security system">${currentLang === 'ar' ? 'تحكم كامل في نظام المراقبة والأمان' : 'Complete control over monitoring and security system'}</p>
                    </div>
                </div>
                <div class="header-actions">
                    <div class="status-indicator">
                        <div class="status-dot active"></div>
                        <span class="status-text" data-ar="نشط" data-en="Active">نشط</span>
                    </div>
                    <button class="professional-close-btn" onclick="closeAdvancedModal()">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            <div class="professional-navigation">
                <button class="professional-nav-tab active" data-section="scanning">
                    <div class="nav-icon">
                        <svg viewBox="0 0 24 24" width="22" height="22">
                            <path fill="currentColor" d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M6.5,2C7.33,2 8,2.67 8,3.5V5H16V3.5C16,2.67 16.67,2 17.5,2C18.33,2 19,2.67 19,3.5V5C20.11,5 21,5.9 21,7V10.81C20.42,10.3 19.74,9.93 19,9.73V7H5V19H9.09C9.21,19.72 9.46,20.39 9.81,21H5C3.9,21 3,20.11 3,19V7C3,5.9 3.9,5 5,5V3.5C5,2.67 5.67,2 6.5,2Z"/>
                        </svg>
                    </div>
                    <div class="nav-text">
                        <span class="nav-title" data-ar="المسح" data-en="Scanning">المسح</span>
                        <span class="nav-desc" data-ar="إعدادات الفحص والمراقبة" data-en="Scan and Monitoring Settings">إعدادات الفحص والمراقبة</span>
                    </div>
                </button>
                
                <button class="professional-nav-tab" data-section="alerts">
                    <div class="nav-icon">
                        <svg viewBox="0 0 24 24" width="22" height="22">
                            <path fill="currentColor" d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21"/>
                        </svg>
                    </div>
                    <div class="nav-text">
                        <span class="nav-title" data-ar="التنبيهات" data-en="Alerts">التنبيهات</span>
                        <span class="nav-desc" data-ar="الإشعارات والتحذيرات" data-en="Notifications and Warnings">الإشعارات والتحذيرات</span>
                    </div>
                </button>
                
                <button class="professional-nav-tab" data-section="display">
                    <div class="nav-icon">
                        <svg viewBox="0 0 24 24" width="22" height="22">
                            <path fill="currentColor" d="M21,16V4H3V16H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21Z"/>
                        </svg>
                    </div>
                    <div class="nav-text">
                        <span class="nav-title" data-ar="العرض" data-en="Display">العرض</span>
                        <span class="nav-desc" data-ar="واجهة المستخدم والعرض" data-en="User Interface and Display">واجهة المستخدم والعرض</span>
                    </div>
                </button>
                
                <button class="professional-nav-tab" data-section="security">
                    <div class="nav-icon">
                        <svg viewBox="0 0 24 24" width="22" height="22">
                            <path fill="currentColor" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                        </svg>
                    </div>
                    <div class="nav-text">
                        <span class="nav-title" data-ar="الأمان" data-en="Security">الأمان</span>
                        <span class="nav-desc" data-ar="حماية متقدمة وكشف التهديدات" data-en="Advanced Protection and Threat Detection">حماية متقدمة وكشف التهديدات</span>
                    </div>
                </button>
                
                <button class="professional-nav-tab" data-section="performance">
                    <div class="nav-icon">
                        <svg viewBox="0 0 24 24" width="22" height="22">
                            <path fill="currentColor" d="M13,2.03V2.05L13,4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03M11,2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06M4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1L4.26,5.67M2.06,13C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13H2.06M7.1,18.37L5.67,19.74C7.18,21 9.04,21.74 11,21.94V19.94C9.58,19.75 8.23,19.19 7.1,18.37M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"/>
                        </svg>
                    </div>
                    <div class="nav-text">
                        <span class="nav-title" data-ar="الأداء" data-en="Performance">الأداء</span>
                        <span class="nav-desc" data-ar="تحسين الموارد والسرعة" data-en="Resource Optimization and Speed">تحسين الموارد والسرعة</span>
                    </div>
                </button>
                
                <button class="professional-nav-tab" data-section="advanced">
                    <div class="nav-icon">
                        <svg viewBox="0 0 24 24" width="22" height="22">
                            <path fill="currentColor" d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11.03L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11.03L19.5,12L19.43,12.97L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z"/>
                        </svg>
                    </div>
                    <div class="nav-text">
                        <span class="nav-title" data-ar="متقدم" data-en="Advanced">متقدم</span>
                        <span class="nav-desc" data-ar="إعدادات متقدمة للخبراء" data-en="Advanced Expert Settings">إعدادات متقدمة للخبراء</span>
                    </div>
                </button>
            </div>
            
            <div class="professional-content">
                <div class="settings-section active" id="scanning-section">
                    ${createProfessionalScanningSection()}
                </div>
                <div class="settings-section" id="alerts-section">
                    ${createProfessionalAlertsSection()}
                </div>
                <div class="settings-section" id="display-section">
                    ${createProfessionalDisplaySection()}
                </div>
                <div class="settings-section" id="security-section">
                    ${createProfessionalSecuritySection()}
                </div>
                <div class="settings-section" id="performance-section">
                    ${createProfessionalPerformanceSection()}
                </div>
                <div class="settings-section" id="advanced-section">
                    ${createProfessionalAdvancedSection()}
                </div>
            </div>
            
            <div class="professional-footer">
                <div class="footer-actions-left">
                    <button class="professional-btn secondary" onclick="resetToDefaultSettings()">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"/>
                        </svg>
                        إعادة تعيين
                    </button>
                    <button class="professional-btn info" onclick="exportMonitorSettings()">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                        </svg>
                        تصدير الإعدادات
                    </button>
                    <button class="professional-btn info" onclick="importMonitorSettings()">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4Z"/>
                        </svg>
                        استيراد الإعدادات
                    </button>
                </div>
                <div class="footer-actions-right">
                    <button class="professional-btn primary" onclick="saveProfessionalSettings()">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"/>
                        </svg>
                        حفظ التغييرات
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // إظهار النافذة مع تأثير احترافي
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.classList.add('active');
    }, 10);
    
    // إعداد التنقل الاحترافي
    setupProfessionalNavigation();
    
    // إعداد مستمعات الأحداث
    setupAdvancedModalEventListeners();
    
    // تحديث واجهة الإعدادات
    setTimeout(() => {
        updateProfessionalSettingsUI();
    }, 100);
}

// إنشاء قسم المسح الاحترافي
function createProfessionalScanningSection() {
    return `
        <div class="professional-section-header">
            <div class="section-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="#00ff88" d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M6.5,2C7.33,2 8,2.67 8,3.5V5H16V3.5C16,2.67 16.67,2 17.5,2C18.33,2 19,2.67 19,3.5V5C20.11,5 21,5.9 21,7V10.81C20.42,10.3 19.74,9.93 19,9.73V7H5V19H9.09C9.21,19.72 9.46,20.39 9.81,21H5C3.9,21 3,20.11 3,19V7C3,5.9 3.9,5 5,5V3.5C5,2.67 5.67,2 6.5,2Z"/>
                </svg>
            </div>
            <div class="section-title-group">
                <h3 data-ar="إعدادات المسح والمراقبة" data-en="Scan and Monitoring Settings">إعدادات المسح والمراقبة</h3>
                <p data-ar="تحكم في أنظمة الفحص والكشف التلقائي" data-en="Control scan systems and automatic detection">تحكم في أنظمة الفحص والكشف التلقائي</p>
            </div>
        </div>
        
        <div class="professional-settings-grid">
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.2 3.2 1-1.73-4.2-2.47V7z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4 data-ar="فترة الفحص" data-en="Scan Interval">فترة الفحص</h4>
                        <p data-ar="تحديد تكرار عمليات الفحص التلقائي" data-en="Set frequency of automatic scans">تحديد تكرار عمليات الفحص التلقائي</p>
                    </div>
                </div>
                <div class="setting-control">
                    <select class="professional-select" id="scanInterval" onchange="updateScanInterval(this.value)">
                        <option value="10">كل 10 ثوان (اختبار)</option>
                        <option value="15">كل 15 ثانية</option>
                        <option value="30" selected>كل 30 ثانية</option>
                        <option value="60">كل دقيقة</option>
                        <option value="120">كل دقيقتين</option>
                        <option value="300">كل 5 دقائق</option>
                        <option value="600">كل 10 دقائق</option>
                        <option value="900">كل 15 دقيقة</option>
                        <option value="1800">كل 30 دقيقة</option>
                        <option value="3600">كل ساعة</option>
                    </select>
                    <div class="interval-display" id="intervalDisplay">30 ثانية</div>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.25l1.41-1.41L21 17.75 19.59 19.16 18.5 18.07l1.41-1.41L18.5 15.25 17.09 16.66 15.5 15.07l1.41-1.41L15.5 12.25l1.59-1.59L18.5 12.07l1.59-1.59L21.5 11.89l-1.59 1.59 1.59 1.59-1.41 1.41-1.59-1.59-1.59 1.59z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4 data-ar="عمق الفحص" data-en="Scan Depth">عمق الفحص</h4>
                        <p data-ar="مستوى تفصيل عمليات المراقبة" data-en="Level of monitoring detail">مستوى تفصيل عمليات المراقبة</p>
                    </div>
                </div>
                <div class="setting-control">
                    <select class="professional-select" id="scanDepth">
                        <option value="light">فحص خفيف</option>
                        <option value="standard" selected>فحص قياسي</option>
                        <option value="deep">فحص عميق</option>
                        <option value="thorough">فحص شامل</option>
                    </select>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4 data-ar="المسح التلقائي" data-en="Auto Scan">المسح التلقائي</h4>
                        <p data-ar="تفعيل المراقبة المستمرة" data-en="Enable continuous monitoring">تفعيل المراقبة المستمرة</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="autoScan" checked onchange="toggleAutoScan(this.checked)">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4 data-ar="الحماية الفورية" data-en="Real-time Protection">الحماية الفورية</h4>
                        <p data-ar="كشف التهديدات في الوقت الفعلي" data-en="Real-time threat detection">كشف التهديدات في الوقت الفعلي</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="realTimeProtection" checked>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M6,6.9L3.87,4.78L5.28,3.37L7.4,5.5L6,6.9M13,1V4H11V1H13M20.13,4.78L18,6.9L16.6,5.5L18.72,3.37L20.13,4.78M4.5,10.5V12.5H1.5V10.5H4.5M19.5,10.5H22.5V12.5H19.5V10.5M6,17.1L7.4,18.5L5.28,20.62L3.87,19.21L6,17.1M18,17.1L20.13,19.21L18.72,20.62L16.6,18.5L18,17.1M12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19A7,7 0 0,1 5,12A7,7 0 0,1 12,5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4 data-ar="المسح عند البدء" data-en="Scan on Startup">المسح عند البدء</h4>
                        <p data-ar="تشغيل فحص أمني عند تشغيل النظام" data-en="Run security scan at system startup">تشغيل فحص أمني عند تشغيل النظام</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="scanOnStartup" checked>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4 data-ar="المسح المجدول" data-en="Scheduled Scan">المسح المجدول</h4>
                        <p data-ar="جدولة عمليات فحص دورية" data-en="Schedule periodic scans">جدولة عمليات فحص دورية</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="scheduledScan">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
        </div>
    `;
}

// إنشاء قسم التنبيهات الاحترافي
function createProfessionalAlertsSection() {
    return `
        <div class="professional-section-header">
            <div class="section-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="#00ff88" d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21"/>
                </svg>
            </div>
            <div class="section-title-group">
                <h3>إعدادات التنبيهات والإشعارات</h3>
                <p>تخصيص أنواع وطرق التنبيهات الأمنية</p>
            </div>
        </div>
        
        <div class="professional-settings-grid">
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>تفعيل التنبيهات</h4>
                        <p>تشغيل جميع أنواع الإشعارات</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="alertsEnabled" checked>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>التنبيهات الصوتية</h4>
                        <p>إشعارات صوتية للتهديدات</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="soundAlerts" checked onchange="updateAlertsSettings('sound', this.checked)">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M21,16V4H3V16H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>إشعارات سطح المكتب</h4>
                        <p>إظهار نوافذ منبثقة للتحذيرات</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="desktopNotifications" checked onchange="updateAlertsSettings('desktop', this.checked)">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>تنبيهات البريد الإلكتروني</h4>
                        <p>إرسال تحذيرات عبر الإيميل</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="emailAlerts" onchange="updateAlertsSettings('email', this.checked)">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>مستوى التنبيه</h4>
                        <p>حساسية كشف التهديدات</p>
                    </div>
                </div>
                <div class="setting-control">
                    <select class="professional-select" id="alertLevel">
                        <option value="low">منخفض</option>
                        <option value="medium" selected>متوسط</option>
                        <option value="high">عالي</option>
                        <option value="critical">حرج</option>
                    </select>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>التنبيهات الطارئة</h4>
                        <p>إشعارات فورية للتهديدات الحرجة</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="urgentAlerts" checked>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
        </div>
    `;
}

// إنشاء قسم العرض الاحترافي
function createProfessionalDisplaySection() {
    return `
        <div class="professional-section-header">
            <div class="section-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="#00ff88" d="M21,16V4H3V16H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21Z"/>
                </svg>
            </div>
            <div class="section-title-group">
                <h3>إعدادات العرض والواجهة</h3>
                <p>تخصيص مظهر وسلوك واجهة المستخدم</p>
            </div>
        </div>
        
        <div class="professional-settings-grid">
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>حد عدد الأحداث</h4>
                        <p>العدد الأقصى للأحداث المعروضة</p>
                    </div>
                </div>
                <div class="setting-control">
                    <select class="professional-select" id="maxEvents">
                        <option value="50">50 حدث</option>
                        <option value="100" selected>100 حدث</option>
                        <option value="200">200 حدث</option>
                        <option value="500">500 حدث</option>
                        <option value="1000">1000 حدث</option>
                    </select>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M17.65,6.35C16.2,4.9 14.21,4 12,4C6.48,4 2,8.48 2,14S6.48,24 12,24C17.52,24 22,19.52 22,14C22,11.79 21.1,9.8 19.65,8.35L17.65,6.35M12,6C15.31,6 18,8.69 18,12S15.31,18 12,18S6,15.31 6,12S8.69,6 12,6M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>معدل التحديث</h4>
                        <p>تكرار تحديث البيانات (ثانية)</p>
                    </div>
                </div>
                <div class="setting-control">
                    <select class="professional-select" id="refreshRate">
                        <option value="1">كل ثانية</option>
                        <option value="2">كل ثانيتين</option>
                        <option value="5" selected>كل 5 ثوان</option>
                        <option value="10">كل 10 ثوان</option>
                        <option value="30">كل 30 ثانية</option>
                    </select>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.2 3.2 1-1.73-4.2-2.47V7z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>إظهار الطوابع الزمنية</h4>
                        <p>عرض وقت وتاريخ الأحداث</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="showTimestamps" checked>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M12,18.5C15.5,18.5 19.31,16.56 21.58,13.4C21.97,12.65 21.97,11.75 21.58,11C19.31,7.44 15.5,5.5 12,5.5C8.5,5.5 4.69,7.44 2.42,11C2.03,11.75 2.03,12.65 2.42,13.4C4.69,16.56 8.5,18.5 12,18.5M12,16.5C9.76,16.5 7.5,15.3 5.5,13C7.5,10.7 9.76,9.5 12,9.5C14.24,9.5 16.5,10.7 18.5,13C16.5,15.3 14.24,16.5 12,16.5M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>تحريك الأحداث</h4>
                        <p>تأثيرات بصرية للأحداث الجديدة</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="animateEvents" checked>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.4 6.35,17.41C9.37,20.43 14,20.54 17.33,17.97Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>الوضع الليلي</h4>
                        <p>استخدام سمة داكنة للعيون</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="darkMode" checked>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>العرض المضغوط</h4>
                        <p>إظهار المزيد من المعلومات في مساحة أقل</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="compactView">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
        </div>
    `;
}

// إنشاء قسم الأمان الاحترافي
function createProfessionalSecuritySection() {
    return `
        <div class="professional-section-header">
            <div class="section-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="#00ff88" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                </svg>
            </div>
            <div class="section-title-group">
                <h3>إعدادات الحماية والأمان</h3>
                <p>تحكم في أنظمة الحماية المتقدمة وكشف التهديدات</p>
            </div>
        </div>
        
        <div class="professional-settings-grid">
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>كشف التهديدات المتقدم</h4>
                        <p>تحليل متطور للسلوكيات المشبوهة</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="advancedThreatDetection" checked>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>تحليل السلوك</h4>
                        <p>مراقبة الأنماط غير الطبيعية</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="behaviorAnalysis">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>مراقبة الشبكة</h4>
                        <p>تتبع حركة البيانات والاتصالات</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="networkMonitoring" checked>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>فحص سلامة الملفات</h4>
                        <p>التحقق من تكامل ملفات النظام</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="fileIntegrityCheck">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>وضع الحجر الصحي</h4>
                        <p>كيفية التعامل مع الملفات المشبوهة</p>
                    </div>
                </div>
                <div class="setting-control">
                    <select class="professional-select" id="quarantineMode">
                        <option value="auto" selected>تلقائي</option>
                        <option value="prompt">السؤال أولاً</option>
                        <option value="manual">يدوي</option>
                        <option value="disable">معطل</option>
                    </select>
                </div>
            </div>
        </div>
    `;
}

// إنشاء قسم الأداء الاحترافي
function createProfessionalPerformanceSection() {
    return `
        <div class="professional-section-header">
            <div class="section-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="#00ff88" d="M13,2.03V2.05L13,4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03M11,2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06M4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1L4.26,5.67M2.06,13C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13H2.06M7.1,18.37L5.67,19.74C7.18,21 9.04,21.74 11,21.94V19.94C9.58,19.75 8.23,19.19 7.1,18.37M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"/>
                </svg>
            </div>
            <div class="section-title-group">
                <h3>إعدادات الأداء والموارد</h3>
                <p>تحسين استهلاك الموارد وسرعة الاستجابة</p>
            </div>
        </div>
        
        <div class="professional-settings-grid">
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>استهلاك المعالج</h4>
                        <p>مستوى استخدام موارد المعالج</p>
                    </div>
                </div>
                <div class="setting-control">
                    <select class="professional-select" id="cpuUsage">
                        <option value="low">منخفض</option>
                        <option value="medium" selected>متوسط</option>
                        <option value="high">عالي</option>
                        <option value="maximum">أقصى</option>
                    </select>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M15.5,12.5C15.5,13.88 14.38,15 13,15C11.62,15 10.5,13.88 10.5,12.5C10.5,11.12 11.62,10 13,10C14.38,10 15.5,11.12 15.5,12.5M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V8H19V19Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>وضع توفير الطاقة</h4>
                        <p>تقليل الاستهلاك لإطالة عمر البطارية</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="lowPowerMode">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>المسح في الخلفية</h4>
                        <p>تشغيل عمليات الفحص كعمليات خلفية</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="backgroundScanning" checked>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>حد الموارد (%)</h4>
                        <p>النسبة القصوى لاستخدام موارد النظام</p>
                    </div>
                </div>
                <div class="setting-control">
                    <input type="range" class="professional-range" id="resourceLimit" min="10" max="100" value="50" step="10">
                    <span class="range-value" id="resourceLimitValue">50%</span>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>وضع الأولوية</h4>
                        <p>توزيع موارد النظام</p>
                    </div>
                </div>
                <div class="setting-control">
                    <select class="professional-select" id="priorityMode">
                        <option value="efficiency">كفاءة</option>
                        <option value="balanced" selected>متوازن</option>
                        <option value="performance">أداء</option>
                        <option value="security">أمان</option>
                    </select>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>تحسين الذاكرة التخزينية</h4>
                        <p>تحسين استخدام ذاكرة التخزين المؤقت</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="cacheOptimization" checked>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
        </div>
    `;
}

// إنشاء القسم المتقدم الاحترافي
function createProfessionalAdvancedSection() {
    return `
        <div class="professional-section-header">
            <div class="section-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="#00ff88" d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11.03L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11.03L19.5,12L19.43,12.97L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z"/>
                </svg>
            </div>
            <div class="section-title-group">
                <h3>الإعدادات المتقدمة للخبراء</h3>
                <p>خيارات متقدمة لضبط دقيق لسلوك النظام</p>
            </div>
        </div>
        
        <div class="professional-settings-grid">
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>تسجيل الأحداث في ملف</h4>
                        <p>حفظ سجلات الأحداث في ملفات خارجية</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="logToFile">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>وضع تتبع الأخطاء</h4>
                        <p>تفعيل معلومات تفصيلية لاستكشاف المشاكل</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="debugMode">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>مستوى التسجيل</h4>
                        <p>تفصيل المعلومات في سجلات النظام</p>
                    </div>
                </div>
                <div class="setting-control">
                    <select class="professional-select" id="logLevel">
                        <option value="error">أخطاء فقط</option>
                        <option value="warning">تحذيرات وأخطاء</option>
                        <option value="info" selected>معلومات عامة</option>
                        <option value="debug">تفاصيل كاملة</option>
                        <option value="verbose">كل شيء</option>
                    </select>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>القواعد المخصصة</h4>
                        <p>إنشاء قواعد مخصصة لكشف التهديدات</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="customRules">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>التحديث التلقائي</h4>
                        <p>تحديث قواعد البيانات الأمنية تلقائياً</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="autoUpdate" checked>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="setting-card">
                <div class="setting-header">
                    <div class="setting-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#00ff88" d="M3,17H9V15H3V17M3,13H15V11H3V13M3,9H21V7H3V9M3,5H18V3H3V5Z"/>
                        </svg>
                    </div>
                    <div class="setting-info">
                        <h4>المزامنة السحابية</h4>
                        <p>مزامنة الإعدادات مع الخدمات السحابية</p>
                    </div>
                </div>
                <div class="setting-control">
                    <label class="professional-toggle">
                        <input type="checkbox" id="cloudSync">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
        </div>
    `;
}

// إعداد التنقل الاحترافي
function setupProfessionalNavigation() {
    const navTabs = document.querySelectorAll('.professional-nav-tab');
    const sections = document.querySelectorAll('.settings-section');
    
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetSection = tab.dataset.section;
            
            // إزالة الحالة النشطة من جميع التابات والأقسام
            navTabs.forEach(t => t.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // إضافة الحالة النشطة للتاب والقسم المختار
            tab.classList.add('active');
            const targetSectionElement = document.getElementById(`${targetSection}-section`);
            if (targetSectionElement) {
                targetSectionElement.classList.add('active');
            }
            
            // تأثير انتقال ناعم
            targetSectionElement.style.opacity = '0';
            setTimeout(() => {
                targetSectionElement.style.opacity = '1';
            }, 150);
        });
    });
}

// تحديث واجهة الإعدادات الاحترافية
function updateProfessionalSettingsUI() {
    try {
        // تحديث قيم الإدخال من الإعدادات المحفوظة
        Object.keys(monitorSettings).forEach(category => {
            if (typeof monitorSettings[category] === 'object') {
                Object.keys(monitorSettings[category]).forEach(setting => {
                    const element = document.getElementById(setting);
                    if (element) {
                        const value = monitorSettings[category][setting];
                        
                        if (element.type === 'checkbox') {
                            element.checked = value;
                        } else if (element.type === 'range') {
                            element.value = value;
                            const valueDisplay = document.getElementById(setting + 'Value');
                            if (valueDisplay) {
                                valueDisplay.textContent = value + '%';
                            }
                        } else {
                            element.value = value;
                        }
                    }
                });
            }
        });
        
        // إعداد مستمعات تحديث القيم
        setupSettingsEventListeners();
        
    } catch (error) {
        console.error('خطأ في تحديث واجهة الإعدادات:', error);
    }
}

// إعداد مستمعات أحداث الإعدادات
function setupSettingsEventListeners() {
    // مستمع لتحديث شريط النسبة المئوية
    const resourceLimitSlider = document.getElementById('resourceLimit');
    if (resourceLimitSlider) {
        resourceLimitSlider.addEventListener('input', function() {
            const valueDisplay = document.getElementById('resourceLimitValue');
            if (valueDisplay) {
                valueDisplay.textContent = this.value + '%';
            }
        });
    }
    
    // مستمعات للتغييرات في الإعدادات
    const allInputs = document.querySelectorAll('.professional-select, .professional-toggle input, .professional-range');
    allInputs.forEach(input => {
        input.addEventListener('change', function() {
            // حفظ تلقائي عند التغيير
            saveProfessionalSettings();
        });
    });
}

// حفظ الإعدادات الاحترافية
function saveProfessionalSettings() {
    try {
        // إظهار مؤشر تحميل
        showProfessionalNotification('جاري حفظ الإعدادات وتطبيقها...', 'info');
        
        // محاكاة حفظ البيانات
        setTimeout(() => {
            // تحديث قيم الإعدادات من النموذج
            const formData = new FormData();
            
            // المسح
            monitorSettings.scanning.interval = parseInt(document.getElementById('scanInterval')?.value || 30);
            monitorSettings.scanning.depth = document.getElementById('scanDepth')?.value || 'standard';
            monitorSettings.scanning.autoScan = document.getElementById('autoScan')?.checked || false;
            monitorSettings.scanning.realTimeProtection = document.getElementById('realTimeProtection')?.checked || false;
            monitorSettings.scanning.scheduledScan = document.getElementById('scheduledScan')?.checked || false;
            monitorSettings.scanning.scanOnStartup = document.getElementById('scanOnStartup')?.checked || false;
            
            // التنبيهات
            monitorSettings.alerts.enabled = document.getElementById('alertsEnabled')?.checked || false;
            monitorSettings.alerts.sound = document.getElementById('soundAlerts')?.checked || false;
            monitorSettings.alerts.desktop = document.getElementById('desktopNotifications')?.checked || false;
            monitorSettings.alerts.email = document.getElementById('emailAlerts')?.checked || false;
            monitorSettings.alerts.level = document.getElementById('alertLevel')?.value || 'medium';
            monitorSettings.alerts.urgentAlert = document.getElementById('urgentAlerts')?.checked || false;
            
            // العرض
            monitorSettings.display.maxEvents = parseInt(document.getElementById('maxEvents')?.value || 100);
            monitorSettings.display.refreshRate = parseInt(document.getElementById('refreshRate')?.value || 5);
            monitorSettings.display.showTimestamps = document.getElementById('showTimestamps')?.checked || false;
            monitorSettings.display.animateEvents = document.getElementById('animateEvents')?.checked || false;
            monitorSettings.display.darkMode = document.getElementById('darkMode')?.checked || false;
            monitorSettings.display.compactView = document.getElementById('compactView')?.checked || false;
            
            // الأمان
            monitorSettings.security.advancedThreatDetection = document.getElementById('advancedThreatDetection')?.checked || false;
            monitorSettings.security.behaviorAnalysis = document.getElementById('behaviorAnalysis')?.checked || false;
            monitorSettings.security.networkMonitoring = document.getElementById('networkMonitoring')?.checked || false;
            monitorSettings.security.fileIntegrityCheck = document.getElementById('fileIntegrityCheck')?.checked || false;
            monitorSettings.security.quarantineMode = document.getElementById('quarantineMode')?.value || 'auto';
            
            // الأداء
            monitorSettings.performance.cpuUsage = document.getElementById('cpuUsage')?.value || 'medium';
            monitorSettings.performance.lowPowerMode = document.getElementById('lowPowerMode')?.checked || false;
            monitorSettings.performance.backgroundScanning = document.getElementById('backgroundScanning')?.checked || false;
            monitorSettings.performance.resourceLimit = parseInt(document.getElementById('resourceLimit')?.value || 50);
            monitorSettings.performance.priorityMode = document.getElementById('priorityMode')?.value || 'balanced';
            monitorSettings.performance.cacheOptimization = document.getElementById('cacheOptimization')?.checked || false;
            
            // متقدم
            monitorSettings.advanced.logToFile = document.getElementById('logToFile')?.checked || false;
            monitorSettings.advanced.debugMode = document.getElementById('debugMode')?.checked || false;
            monitorSettings.advanced.logLevel = document.getElementById('logLevel')?.value || 'info';
            monitorSettings.advanced.customRules = document.getElementById('customRules')?.checked || false;
            monitorSettings.advanced.autoUpdate = document.getElementById('autoUpdate')?.checked || false;
            monitorSettings.advanced.cloudSync = document.getElementById('cloudSync')?.checked || false;
            
            // حفظ في localStorage
            localStorage.setItem('cyberGuardMonitorSettings', JSON.stringify(monitorSettings));
            
            // تطبيق الإعدادات فعلياً
            applySettingsToSystem();
            
            // إشعار بالنجاح
            showProfessionalNotification('تم حفظ وتطبيق جميع الإعدادات بنجاح! ✅', 'success');
            
        }, 800); // محاكاة وقت الحفظ
        
    } catch (error) {
        console.error('خطأ في حفظ الإعدادات:', error);
        showProfessionalNotification('حدث خطأ في حفظ الإعدادات ❌', 'error');
    }
}

// تطبيق الإعدادات على النظام فعلياً
function applySettingsToSystem() {
    try {
        console.log('تطبيق الإعدادات على النظام...', monitorSettings);
        
        // تطبيق إعدادات المسح
        if (monitorSettings.scanning.autoScan) {
            startAutoScanning();
        } else {
            stopAutoScanning();
        }
        
        // تطبيق إعدادات التنبيهات
        configureAlerts();
        
        // تطبيق إعدادات العرض
        configureDisplay();
        
        // تطبيق إعدادات الأمان
        configureSecurity();
        
        // تطبيق إعدادات الأداء
        configurePerformance();
        
        // تطبيق الإعدادات المتقدمة
        configureAdvanced();
        
        // تحديث واجهة المستخدم
        updateUIBasedOnSettings();
        
        console.log('تم تطبيق جميع الإعدادات بنجاح');
        
    } catch (error) {
        console.error('خطأ في تطبيق الإعدادات:', error);
        showProfessionalNotification('حدث خطأ في تطبيق الإعدادات', 'error');
    }
}

// بدء المسح التلقائي
let autoScanInterval = null;
function startAutoScanning() {
    if (autoScanInterval) {
        clearInterval(autoScanInterval);
    }
    
    const intervalMs = monitorSettings.scanning.interval * 1000; // تحويل إلى ميلي ثانية
    
    autoScanInterval = setInterval(() => {
        performAutomaticScan();
    }, intervalMs);
    
    console.log(`تم بدء المسح التلقائي كل ${monitorSettings.scanning.interval} ثانية`);
    addSecurityEvent('system', 'تم تفعيل المسح التلقائي', 'info');
}

// إيقاف المسح التلقائي
function stopAutoScanning() {
    if (autoScanInterval) {
        clearInterval(autoScanInterval);
        autoScanInterval = null;
        console.log('تم إيقاف المسح التلقائي');
        addSecurityEvent('system', 'تم إيقاف المسح التلقائي', 'info');
    }
}

// تنفيذ المسح التلقائي
function performAutomaticScan() {
    console.log('تنفيذ مسح تلقائي...');
    
    // محاكاة عملية المسح
    const scanResults = {
        scannedItems: Math.floor(Math.random() * 1000) + 500,
        threatsFound: Math.random() > 0.9 ? Math.floor(Math.random() * 5) : 0,
        duration: Math.floor(Math.random() * 30) + 10
    };
    
    // إضافة حدث أمني
    if (scanResults.threatsFound > 0) {
        addSecurityEvent('threats', `تم اكتشاف ${scanResults.threatsFound} تهديدات`, 'high');
        
        // إرسال تنبيه إذا كانت التنبيهات مفعلة
        if (monitorSettings.alerts.enabled) {
            showProfessionalNotification(`⚠️ تم اكتشاف ${scanResults.threatsFound} تهديدات في المسح التلقائي!`, 'warning');
        }
    } else {
        addSecurityEvent('scans', `مسح تلقائي مكتمل - ${scanResults.scannedItems} عنصر تم فحصه`, 'success');
    }
    
    // تحديث إحصائيات المسح
    updateScanStatistics(scanResults);
}

// تكوين التنبيهات
function configureAlerts() {
    // تطبيق إعدادات الصوت
    if (monitorSettings.alerts.sound) {
        enableSoundAlerts();
    } else {
        disableSoundAlerts();
    }
    
    // تطبيق إعدادات إشعارات سطح المكتب
    if (monitorSettings.alerts.desktop) {
        requestNotificationPermission();
    }
    
    console.log('تم تكوين التنبيهات:', monitorSettings.alerts);
}

// تكوين العرض
function configureDisplay() {
    const activityList = document.getElementById('securityActivityList');
    
    // تطبيق الحد الأقصى للأحداث
    if (activityList) {
        const events = activityList.querySelectorAll('.activity-event');
        const maxEvents = monitorSettings.display.maxEvents;
        
        if (events.length > maxEvents) {
            for (let i = maxEvents; i < events.length; i++) {
                events[i].remove();
            }
        }
    }
    
    // تطبيق معدل التحديث
    updateRefreshRate();
    
    // تطبيق الوضع المظلم
    if (monitorSettings.display.darkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    
    // تطبيق العرض المدمج
    if (monitorSettings.display.compactView) {
        document.body.classList.add('compact-view');
    } else {
        document.body.classList.remove('compact-view');
    }
    
    console.log('تم تكوين العرض:', monitorSettings.display);
}

// تكوين الأمان
function configureSecurity() {
    // تفعيل/إلغاء اكتشاف التهديدات المتقدم
    if (monitorSettings.security.advancedThreatDetection) {
        enableAdvancedThreatDetection();
    }
    
    // تفعيل/إلغاء مراقبة الشبكة
    if (monitorSettings.security.networkMonitoring) {
        enableNetworkMonitoring();
    }
    
    console.log('تم تكوين الأمان:', monitorSettings.security);
}

// تكوين الأداء
function configurePerformance() {
    // تطبيق وضع توفير الطاقة
    if (monitorSettings.performance.lowPowerMode) {
        enableLowPowerMode();
    } else {
        disableLowPowerMode();
    }
    
    // تطبيق حد الموارد
    applyResourceLimit(monitorSettings.performance.resourceLimit);
    
    console.log('تم تكوين الأداء:', monitorSettings.performance);
}

// تكوين الإعدادات المتقدمة
function configureAdvanced() {
    // تفعيل/إلغاء وضع التصحيح
    if (monitorSettings.advanced.debugMode) {
        console.log('تم تفعيل وضع التصحيح');
        window.debugMode = true;
    } else {
        window.debugMode = false;
    }
    
    // تطبيق مستوى السجلات
    console.log('مستوى السجلات:', monitorSettings.advanced.logLevel);
    
    console.log('تم تكوين الإعدادات المتقدمة:', monitorSettings.advanced);
}

// تحديث واجهة المستخدم حسب الإعدادات
function updateUIBasedOnSettings() {
    // تحديث مؤشر الأمان
    updateSecurityLevel();
    
    // تحديث إحصائيات لوحة القيادة
    updateDashboardStats();
    
    // تحديث عرض الأحداث
    refreshSecurityActivityDisplay();
}

// إضافة حدث أمني جديد
function addSecurityEvent(type, message, priority = 'normal') {
    const activityList = document.getElementById('securityActivityList');
    if (!activityList) return;
    
    const eventElement = document.createElement('div');
    eventElement.className = `activity-event ${type}`;
    eventElement.setAttribute('data-type', type);
    
    const currentTime = new Date().toLocaleTimeString('ar-SA', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    
    const iconMap = {
        system: '<path fill="#00ff88" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>',
        scans: '<path fill="#00ff88" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>',
        threats: '<path fill="#ff4757" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>'
    };
    
    eventElement.innerHTML = `
        <div class="event-timeline">
            <div class="event-time">${currentTime}</div>
            <div class="event-indicator ${type}-indicator">
                <svg viewBox="0 0 24 24" width="14" height="14">
                    ${iconMap[type] || iconMap.system}
                </svg>
            </div>
        </div>
        <div class="event-content">
            <div class="event-title">${message}</div>
            <div class="event-details">
                <span class="event-category ${type}">${type.toUpperCase()}</span>
                <span class="event-priority ${priority}">${priority}</span>
            </div>
        </div>
    `;
    
    // إضافة الحدث في المقدمة
    activityList.insertBefore(eventElement, activityList.firstChild);
    
    // إزالة الأحداث الزائدة حسب الحد الأقصى
    const maxEvents = monitorSettings.display.maxEvents || 100;
    const events = activityList.querySelectorAll('.activity-event');
    if (events.length > maxEvents) {
        for (let i = maxEvents; i < events.length; i++) {
            events[i].remove();
        }
    }
    
    // تحديث العدادات
    updateEventCounters();
}

// تحديث عدادات الأحداث
function updateEventCounters() {
    const allEvents = document.querySelectorAll('.activity-event');
    const threats = document.querySelectorAll('.activity-event[data-type="threats"]');
    const scans = document.querySelectorAll('.activity-event[data-type="scans"]');
    const system = document.querySelectorAll('.activity-event[data-type="system"]');
    
    // تحديث العدادات في علامات التبويب
    const allCount = document.getElementById('allCount');
    const threatsCount = document.getElementById('threatsCount');
    const scansCount = document.getElementById('scansCount');
    const systemCount = document.getElementById('systemCount');
    
    if (allCount) allCount.textContent = allEvents.length;
    if (threatsCount) threatsCount.textContent = threats.length;
    if (scansCount) scansCount.textContent = scans.length;
    if (systemCount) systemCount.textContent = system.length;
}

// دوال مساعدة للوظائف الحقيقية

// تفعيل التنبيهات الصوتية
function enableSoundAlerts() {
    window.soundAlertsEnabled = true;
    console.log('تم تفعيل التنبيهات الصوتية');
}

// إلغاء تفعيل التنبيهات الصوتية
function disableSoundAlerts() {
    window.soundAlertsEnabled = false;
    console.log('تم إلغاء تفعيل التنبيهات الصوتية');
}

// طلب إذن الإشعارات
function requestNotificationPermission() {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                console.log('تم منح إذن الإشعارات');
                showProfessionalNotification('تم تفعيل إشعارات سطح المكتب', 'success');
            }
        });
    }
}

// تحديث معدل التحديث
let refreshInterval = null;
function updateRefreshRate() {
    if (refreshInterval) {
        clearInterval(refreshInterval);
    }
    
    const rate = monitorSettings.display.refreshRate * 1000; // تحويل إلى ميلي ثانية
    
    refreshInterval = setInterval(() => {
        refreshSecurityActivityDisplay();
    }, rate);
    
    console.log(`تم تحديث معدل التحديث إلى ${monitorSettings.display.refreshRate} ثوان`);
}

// تفعيل اكتشاف التهديدات المتقدم
function enableAdvancedThreatDetection() {
    window.advancedThreatDetection = true;
    console.log('تم تفعيل اكتشاف التهديدات المتقدم');
    addSecurityEvent('system', 'تم تفعيل اكتشاف التهديدات المتقدم', 'info');
}

// تفعيل مراقبة الشبكة
function enableNetworkMonitoring() {
    window.networkMonitoring = true;
    console.log('تم تفعيل مراقبة الشبكة');
    addSecurityEvent('system', 'تم تفعيل مراقبة الشبكة', 'info');
}

// تفعيل وضع توفير الطاقة
function enableLowPowerMode() {
    window.lowPowerMode = true;
    document.body.classList.add('low-power-mode');
    console.log('تم تفعيل وضع توفير الطاقة');
    addSecurityEvent('system', 'تم تفعيل وضع توفير الطاقة', 'info');
}

// إلغاء تفعيل وضع توفير الطاقة
function disableLowPowerMode() {
    window.lowPowerMode = false;
    document.body.classList.remove('low-power-mode');
    console.log('تم إلغاء تفعيل وضع توفير الطاقة');
}

// تطبيق حد الموارد
function applyResourceLimit(limit) {
    window.resourceLimit = limit;
    console.log(`تم تطبيق حد الموارد: ${limit}%`);
}

// تحديث مستوى الأمان
function updateSecurityLevel() {
    // حساب مستوى الأمان بناءً على الإعدادات النشطة
    let securityScore = 0;
    
    if (monitorSettings.scanning.autoScan) securityScore += 20;
    if (monitorSettings.scanning.realTimeProtection) securityScore += 25;
    if (monitorSettings.alerts.enabled) securityScore += 15;
    if (monitorSettings.security.advancedThreatDetection) securityScore += 20;
    if (monitorSettings.security.networkMonitoring) securityScore += 20;
    
    // تحديث المؤشرات
    const securityProgress = document.getElementById('securityProgress');
    const securityText = document.getElementById('securityText');
    const securityPercentage = document.getElementById('securityPercentage');
    const securityCircle = document.getElementById('securityCircle');
    
    if (securityProgress) {
        securityProgress.style.width = `${securityScore}%`;
    }
    
    if (securityText) {
        securityText.textContent = `${securityScore}%`;
    }
    
    if (securityPercentage) {
        securityPercentage.textContent = `${securityScore}%`;
    }
    
    if (securityCircle) {
        const circumference = 2 * Math.PI * 90; // نصف القطر 90
        const offset = circumference - (securityScore / 100) * circumference;
        securityCircle.style.strokeDashoffset = offset;
    }
    
    console.log(`تم تحديث مستوى الأمان إلى ${securityScore}%`);
}

// تحديث إحصائيات لوحة القيادة
function updateDashboardStats() {
    // تحديث عداد الأدوات النشطة
    let activeTools = 0;
    if (monitorSettings.scanning.autoScan) activeTools++;
    if (monitorSettings.scanning.realTimeProtection) activeTools++;
    if (monitorSettings.alerts.enabled) activeTools++;
    if (monitorSettings.security.advancedThreatDetection) activeTools++;
    if (monitorSettings.security.networkMonitoring) activeTools++;
    
    const activeToolsCounter = document.getElementById('activeToolsCounter');
    const activeToolsCount = document.getElementById('activeToolsCount');
    const toolsUsedCount = document.getElementById('toolsUsedCount');
    
    if (activeToolsCounter) activeToolsCounter.textContent = activeTools;
    if (activeToolsCount) activeToolsCount.textContent = activeTools;
    if (toolsUsedCount) toolsUsedCount.textContent = activeTools;
    
    console.log(`تم تحديث عداد الأدوات النشطة: ${activeTools}`);
}

// تحديث عرض النشاط الأمني
function refreshSecurityActivityDisplay() {
    // تحديث الطوابع الزمنية
    updateTimestamps();
    
    // تحديث العدادات
    updateEventCounters();
    
    // تحديث آخر وقت تحديث
    const lastUpdate = document.getElementById('lastUpdate');
    if (lastUpdate) {
        lastUpdate.textContent = 'منذ ثوان';
    }
}

// تحديث الطوابع الزمنية
function updateTimestamps() {
    if (monitorSettings.display.showTimestamps) {
        const events = document.querySelectorAll('.activity-event .event-time');
        events.forEach(timeElement => {
            // إضافة تاريخ كامل عند تفعيل الطوابع الزمنية
            const currentTime = new Date();
            const timeString = currentTime.toLocaleString('ar-SA', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            timeElement.setAttribute('title', timeString);
        });
    }
}

// تحديث إحصائيات المسح
function updateScanStatistics(results) {
    const scansPerformed = document.getElementById('scansPerformed');
    if (scansPerformed) {
        const currentCount = parseInt(scansPerformed.textContent) || 0;
        scansPerformed.textContent = currentCount + 1;
    }
    
    if (results.threatsFound > 0) {
        const threatsDetected = document.getElementById('threatsDetected');
        if (threatsDetected) {
            const currentThreats = parseInt(threatsDetected.textContent) || 0;
            threatsDetected.textContent = currentThreats + results.threatsFound;
        }
        
        const threatsBlocked = document.getElementById('threatsBlocked');
        if (threatsBlocked) {
            const currentBlocked = parseInt(threatsBlocked.textContent) || 0;
            threatsBlocked.textContent = currentBlocked + results.threatsFound;
        }
    }
}

// تحميل الإعدادات المحفوظة عند بدء التشغيل
function loadSavedSettings() {
    try {
        const savedSettings = localStorage.getItem('cyberGuardMonitorSettings');
        if (savedSettings) {
            const parsed = JSON.parse(savedSettings);
            Object.assign(monitorSettings, parsed);
            console.log('تم تحميل الإعدادات المحفوظة:', monitorSettings);
            
            // تطبيق الإعدادات المحملة
            applySettingsToSystem();
            
            // تحديث واجهة الإعدادات
            updateProfessionalSettingsUI();
            
            addSecurityEvent('system', 'تم تحميل الإعدادات المحفوظة', 'info');
        }
    } catch (error) {
        console.error('خطأ في تحميل الإعدادات:', error);
    }
}

// استدعاء تحميل الإعدادات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        loadSavedSettings();
        
        // تهيئة نظام المراقبة المتقدم
        if (typeof AdvancedSecurityMonitor !== 'undefined') {
            console.log('🚀 تهيئة نظام المراقبة المتقدم...');
            window.advancedSecurityMonitor = advancedSecurityMonitor;
            advancedSecurityMonitor.start();
            
            // تشغيل مؤقت تحديث المؤقت
            setInterval(() => {
                advancedSecurityMonitor.updateScanTimer();
            }, 1000);
            
            // تشغيل نظام إحصائيات الوقت
            setInterval(() => {
                advancedSecurityMonitor.stats.uptime++;
                const uptimeElement = document.getElementById('sessionTime');
                if (uptimeElement) {
                    const hours = Math.floor(advancedSecurityMonitor.stats.uptime / 3600);
                    const minutes = Math.floor((advancedSecurityMonitor.stats.uptime % 3600) / 60);
                    const seconds = advancedSecurityMonitor.stats.uptime % 60;
                    uptimeElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                }
            }, 1000);
            
            // إضافة دالة اختبار سريع (للمطورين)
            window.testAdvancedSettings = function() {
                console.log('🧪 اختبار الإعدادات المتقدمة...');
                
                // اختبار تغيير فترة المسح
                console.log('⏰ اختبار تغيير فترة المسح إلى 10 ثوان...');
                updateScanInterval(10);
                
                setTimeout(() => {
                    console.log('⏰ إعادة تعيين فترة المسح إلى 30 ثانية...');
                    updateScanInterval(30);
                }, 5000);
                
                // اختبار التنبيهات
                setTimeout(() => {
                    console.log('🔊 اختبار التنبيهات...');
                    showProfessionalNotification('هذا اختبار للنظام! ✅', 'success');
                }, 2000);
                
                // اختبار المسح اليدوي
                setTimeout(() => {
                    console.log('🔍 اختبار المسح اليدوي...');
                    triggerManualScan();
                }, 7000);
                
                console.log('✅ تم بدء الاختبارات - راقب وحدة التحكم والإشعارات');
            };
            
            console.log('ℹ️ يمكنك تشغيل testAdvancedSettings() في وحدة التحكم لاختبار النظام');
        }
    }, 1000);
});

// إعادة تعيين الإعدادات إلى القيم الافتراضية
function resetToDefaultSettings() {
    try {
        // إعادة تعيين جميع القيم
        monitorSettings.scanning = {
            interval: 30,
            depth: 'standard',
            autoScan: true,
            realTimeProtection: true,
            scheduledScan: false,
            scanOnStartup: true
        };
        
        monitorSettings.alerts = {
            enabled: true,
            sound: true,
            desktop: true,
            email: false,
            level: 'medium',
            urgentAlert: true
        };
        
        monitorSettings.display = {
            maxEvents: 100,
            refreshRate: 5,
            showTimestamps: true,
            animateEvents: true,
            darkMode: true,
            compactView: false
        };
        
        monitorSettings.security = {
            advancedThreatDetection: true,
            behaviorAnalysis: false,
            networkMonitoring: true,
            fileIntegrityCheck: false,
            quarantineMode: 'auto'
        };
        
        monitorSettings.performance = {
            cpuUsage: 'medium',
            lowPowerMode: false,
            backgroundScanning: true,
            resourceLimit: 50,
            priorityMode: 'balanced',
            cacheOptimization: true
        };
        
        monitorSettings.advanced = {
            logToFile: false,
            debugMode: false,
            logLevel: 'info',
            customRules: false,
            autoUpdate: true,
            cloudSync: false
        };
        
        // تحديث الواجهة
        updateProfessionalSettingsUI();
        
        showProfessionalNotification('تم إعادة تعيين جميع الإعدادات إلى القيم الافتراضية! 🔄', 'info');
        
    } catch (error) {
        console.error('خطأ في إعادة تعيين الإعدادات:', error);
        showProfessionalNotification('حدث خطأ في إعادة التعيين ❌', 'error');
    }
}

// إظهار إشعار احترافي
function showProfessionalNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `professional-notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">
                ${type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️'}
            </div>
            <div class="notification-text">${message}</div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // إظهار الإشعار
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // إخفاء الإشعار بعد 3 ثوان
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// إغلاق النافذة المتقدمة
function closeAdvancedModal() {
    try {
        const modal = document.querySelector('.advanced-monitor-settings-modal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                if (document.body.contains(modal)) {
                    document.body.removeChild(modal);
                }
            }, 400);
        }
    } catch (error) {
        console.error('خطأ في إغلاق النافذة:', error);
        // إزالة فورية في حالة الخطأ
        const modal = document.querySelector('.advanced-monitor-settings-modal');
        if (modal && document.body.contains(modal)) {
            document.body.removeChild(modal);
        }
    }
}

function setupAdvancedModalEventListeners() {
    try {
        // زر الحفظ الاحترافي
        const saveBtnProfessional = document.querySelector('.professional-btn.primary[onclick="saveProfessionalSettings()"]');
        if (saveBtnProfessional) {
            saveBtnProfessional.onclick = function(e) {
                e.preventDefault();
                saveProfessionalSettings();
                showProfessionalNotification('تم حفظ جميع الإعدادات الاحترافية بنجاح! ✅', 'success');
                setTimeout(() => {
                    closeAdvancedModal();
                }, 1500);
            };
        }
        
        // زر الحفظ العادي
        const saveBtn = document.querySelector('.btn.primary[onclick="saveMonitorSettings()"]');
        if (saveBtn) {
            saveBtn.onclick = function(e) {
                e.preventDefault();
                saveMonitorSettings();
                showProfessionalNotification('تم حفظ جميع الإعدادات بنجاح! ✅', 'success');
                setTimeout(() => {
                    closeAdvancedModal();
                }, 1500);
            };
        }
        
        // زر إعادة التعيين الاحترافي
        const resetBtnProfessional = document.querySelector('.professional-btn.secondary[onclick="resetToDefaultSettings()"]');
        if (resetBtnProfessional) {
            resetBtnProfessional.onclick = function(e) {
                e.preventDefault();
                if (confirm('هل أنت متأكد من إعادة تعيين جميع الإعدادات إلى القيم الافتراضية؟')) {
                    resetToDefaultSettings();
                    updateProfessionalSettingsUI();
                    showProfessionalNotification('تم إعادة تعيين الإعدادات بنجاح! 🔄', 'success');
                }
            };
        }
        
        // زر إعادة التعيين العادي
        const resetBtn = document.querySelector('.btn.secondary[onclick="resetToDefaults()"]');
        if (resetBtn) {
            resetBtn.onclick = function(e) {
                e.preventDefault();
                if (confirm('هل أنت متأكد من إعادة تعيين جميع الإعدادات إلى القيم الافتراضية؟')) {
                    resetToDefaultSettings();
                    updateAdvancedSettingsUI();
                    showProfessionalNotification('تم إعادة تعيين الإعدادات بنجاح! 🔄', 'success');
                }
            };
        }
        
        // زر التصدير
        const exportBtn = document.querySelector('.btn.info[onclick="exportSettings()"]');
        if (exportBtn) {
            exportBtn.onclick = function(e) {
                e.preventDefault();
                exportMonitorSettings();
                showProfessionalNotification('تم تصدير الإعدادات بنجاح! 📤', 'success');
            };
        }
        
        // زر الاستيراد
        const importBtn = document.querySelector('.btn.info[onclick="importSettings()"]');
        if (importBtn) {
            importBtn.onclick = function(e) {
                e.preventDefault();
                importMonitorSettings();
            };
        }
        
        // أزرار الإغلاق المتعددة
        const closeButtons = document.querySelectorAll('.professional-close-btn, .close-modal');
        closeButtons.forEach(btn => {
            btn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                closeAdvancedModal();
            };
        });
        
        // إغلاق عند النقر على الخلفية
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                closeAdvancedModal();
            };
        }
        
        // إغلاق بمفتاح Escape
        const escapeHandler = function(e) {
            if (e.key === 'Escape') {
                e.preventDefault();
                closeAdvancedModal();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
        
    } catch (error) {
        console.error('خطأ في إعداد مستمعات الأحداث:', error);
        showProfessionalNotification('حدث خطأ في إعداد الأحداث', 'error');
    }
}

// دالة الإشعارات الاحترافية المحسنة
function showProfessionalNotification(message, type = 'success') {
    try {
        // إزالة الإشعارات السابقة
        const existingNotifications = document.querySelectorAll('.professional-notification');
        existingNotifications.forEach(notif => notif.remove());
        
        const notification = document.createElement('div');
        notification.className = `professional-notification ${type}`;
        
        // أيقونات الإشعارات
        const icons = {
            success: `<svg viewBox="0 0 24 24" width="20" height="20">
                        <path fill="#00ff88" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/>
                      </svg>`,
            error: `<svg viewBox="0 0 24 24" width="20" height="20">
                     <path fill="#ff4757" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M15.31,6.31L14,5L12,7L10,5L8.69,6.31L10.69,8.31L8.69,10.31L10,11.69L12,9.69L14,11.69L15.31,10.31L13.31,8.31L15.31,6.31Z"/>
                   </svg>`,
            warning: `<svg viewBox="0 0 24 24" width="20" height="20">
                       <path fill="#ffa502" d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"/>
                     </svg>`,
            info: `<svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="#0096ff" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                  </svg>`
        };
        
        notification.innerHTML = `
            <div class="notification-content">
                <div class="notification-icon">${icons[type] || icons.info}</div>
                <div class="notification-text">${message}</div>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                        <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
                    </svg>
                </button>
            </div>
            <div class="notification-progress">
                <div class="progress-bar"></div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // تفعيل الأنيميشن
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // بدء شريط التقدم
        const progressBar = notification.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.style.animation = 'progressAnimation 4s linear forwards';
        }
        
        // إخفاء الإشعار تلقائياً بعد 4 ثوان
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.classList.remove('show');
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        notification.remove();
                    }
                }, 400);
            }
        }, 4000);
        
    } catch (error) {
        console.error('خطأ في عرض الإشعار:', error);
        // fallback للإشعار البسيط
        alert(message);
    }
}

// تصدير الإعدادات
function exportMonitorSettings() {
    try {
        const settings = JSON.stringify(monitorSettings, null, 2);
        const blob = new Blob([settings], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `CyberGuard_Settings_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        alert('تم تصدير الإعدادات بنجاح! 📁');
    } catch (error) {
        console.error('خطأ في تصدير الإعدادات:', error);
        alert('حدث خطأ في تصدير الإعدادات');
    }
}

// استيراد الإعدادات
function importMonitorSettings() {
    try {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = function(e) {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const importedSettings = JSON.parse(e.target.result);
                    
                    // التحقق من صحة البيانات
                    if (importedSettings && typeof importedSettings === 'object') {
                        Object.assign(monitorSettings, importedSettings);
                        localStorage.setItem('cyberGuardMonitorSettings', JSON.stringify(monitorSettings));
                        updateAdvancedSettingsUI();
                        alert('تم استيراد الإعدادات بنجاح! ✅');
                    } else {
                        alert('ملف الإعدادات غير صالح');
                    }
                } catch (error) {
                    console.error('خطأ في قراءة الملف:', error);
                    alert('خطأ في قراءة ملف الإعدادات');
                }
            };
            reader.readAsText(file);
        };
        
        input.click();
    } catch (error) {
        console.error('خطأ في استيراد الإعدادات:', error);
        alert('حدث خطأ في استيراد الإعدادات');
    }
}

// إعداد تنقل الإعدادات الأساسي
function setupSettingsNavigation() {
    try {
        const navTabs = document.querySelectorAll('.nav-tab');
        const sections = document.querySelectorAll('.settings-section');
        
        navTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // إزالة الحالة النشطة من جميع التابات والأقسام
                navTabs.forEach(t => t.classList.remove('active'));
                sections.forEach(s => s.classList.remove('active'));
                
                // إضافة الحالة النشطة للتاب المختار
                this.classList.add('active');
                
                // إظهار القسم المطابق
                const sectionId = this.getAttribute('data-section') + '-section';
                const activeSection = document.getElementById(sectionId);
                if (activeSection) {
                    activeSection.classList.add('active');
                }
            });
        });
        
        // تفعيل التاب الأول افتراضياً
        if (navTabs.length > 0) {
            navTabs[0].click();
        }
    } catch (error) {
        console.error('خطأ في إعداد التنقل:', error);
    }
}

// وظائف إنشاء أقسام الإعدادات المحسنة
function createAdvancedScanningSection() {
    return `
        <div class="section-header">
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M6.5,2C7.33,2 8,2.67 8,3.5V5H16V3.5C16,2.67 16.67,2 17.5,2C18.33,2 19,2.67 19,3.5V5C20.11,5 21,5.9 21,7V10.81C20.42,10.3 19.74,9.93 19,9.73V7H5V19H9.09C9.21,19.72 9.46,20.39 9.81,21H5C3.9,21 3,20.11 3,19V7C3,5.9 3.9,5 5,5V3.5C5,2.67 5.67,2 6.5,2Z"/>
            </svg>
            <h3>إعدادات الفحص المتقدمة</h3>
        </div>
        <div class="setting-group">
            <div class="setting-item">
                <div class="setting-label">
                    <svg viewBox="0 0 24 24" width="18" height="18">
                        <path fill="currentColor" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
                    </svg>
                    <label>فترة الفحص (ثانية)</label>
                </div>
                <div class="input-group">
                    <input type="range" id="scanInterval" min="10" max="300" value="${monitorSettings.scanning.interval}" class="modern-slider">
                    <div class="slider-value" id="scanIntervalValue">${monitorSettings.scanning.interval}s</div>
                </div>
            </div>
            <div class="setting-item">
                <div class="setting-label">
                    <svg viewBox="0 0 24 24" width="18" height="18">
                        <path fill="currentColor" d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                    </svg>
                    <label>عمق الفحص</label>
                </div>
                <select id="scanDepth" class="modern-select">
                    <option value="quick">فحص سريع - أساسي</option>
                    <option value="standard">فحص عادي - شامل</option>
                    <option value="deep">فحص عميق - متقدم</option>
                    <option value="custom">فحص مخصص</option>
                </select>
            </div>
            <div class="setting-item">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="autoScan" ${monitorSettings.scanning.autoScan ? 'checked' : ''}>
                    <label for="autoScan" class="checkbox-label">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.41,10.09L6,11.5L11,16.5Z"/>
                        </svg>
                        تفعيل الفحص التلقائي
                    </label>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="realTimeProtection" ${monitorSettings.scanning.realTimeProtection ? 'checked' : ''}>
                    <label for="realTimeProtection" class="checkbox-label">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                        </svg>
                        الحماية في الوقت الفعلي
                    </label>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="scanOnStartup" ${monitorSettings.scanning.scanOnStartup ? 'checked' : ''}>
                    <label for="scanOnStartup" class="checkbox-label">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M8.5,13.5L11,16.5L16.5,9.5L15.09,8.09L11,13.09L9.91,11.91L8.5,13.5M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>
                        </svg>
                        فحص عند بدء التشغيل
                    </label>
                </div>
            </div>
        </div>
    `;
}

function createMonitorSettingsModal() {
    // إزالة النافذة الموجودة إن وجدت
    const existingModal = document.querySelector('.monitor-settings-modal');
    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.className = 'monitor-settings-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeMonitorSettings()"></div>
        <div class="settings-container">
            <div class="settings-header">
                <h2>⚙️ إعدادات المراقب</h2>
                <button class="close-btn" onclick="closeMonitorSettings()">×</button>
            </div>
            <div class="settings-content">
                ${createScanningSection()}
                ${createAlertsSection()}
                ${createDisplaySection()}
                ${createAdvancedSection()}
                ${createPerformanceSection()}
            </div>
            <div class="settings-footer">
                <button class="btn secondary" onclick="resetToDefaults()">إعادة تعيين</button>
                <button class="btn info" onclick="exportSettings()">تصدير</button>
                <button class="btn info" onclick="importSettings()">استيراد</button>
                <button class="btn primary" onclick="saveMonitorSettings()">حفظ الإعدادات</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // إظهار النافذة مع تأثير
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.classList.add('active');
    }, 10);
    
    // تحديث واجهة الإعدادات
    setTimeout(() => {
        updateSettingsUI();
    }, 100);
}

function createScanningSection() {
    return `
        <div class="settings-section">
            <h3>🔍 إعدادات الفحص</h3>
            <div class="setting-item">
                <label>فترة الفحص (بالثواني)</label>
                <div class="input-group">
                    <input type="range" id="scanInterval" min="10" max="300" value="${monitorSettings.scanning.interval}">
                    <span id="scanIntervalValue">${monitorSettings.scanning.interval}s</span>
                </div>
            </div>
            <div class="setting-item">
                <label>عمق الفحص</label>
                <select id="scanDepth">
                    <option value="quick">سريع</option>
                    <option value="standard">عادي</option>
                    <option value="deep">عميق</option>
                </select>
            </div>
            <div class="setting-item">
                <div class="checkbox-item">
                    <input type="checkbox" id="autoScan" ${monitorSettings.scanning.autoScan ? 'checked' : ''}>
                    <label for="autoScan">تفعيل الفحص التلقائي</label>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-item">
                    <input type="checkbox" id="realTimeProtection" ${monitorSettings.scanning.realTimeProtection ? 'checked' : ''}>
                    <label for="realTimeProtection">الحماية في الوقت الفعلي</label>
                </div>
            </div>
        </div>
    `;
}

function createAlertsSection() {
    return `
        <div class="settings-section">
            <h3>🔔 إعدادات التنبيهات</h3>
            <div class="setting-item">
                <div class="checkbox-item">
                    <input type="checkbox" id="alertsEnabled" ${monitorSettings.alerts.enabled ? 'checked' : ''}>
                    <label for="alertsEnabled">تفعيل التنبيهات</label>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-item">
                    <input type="checkbox" id="soundAlerts" ${monitorSettings.alerts.sound ? 'checked' : ''}>
                    <label for="soundAlerts">تنبيهات صوتية</label>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-item">
                    <input type="checkbox" id="desktopAlerts" ${monitorSettings.alerts.desktop ? 'checked' : ''}>
                    <label for="desktopAlerts">تنبيهات سطح المكتب</label>
                </div>
            </div>
            <div class="setting-item">
                <label>مستوى التنبيه</label>
                <select id="alertLevel">
                    <option value="low">منخفض</option>
                    <option value="medium">متوسط</option>
                    <option value="high">عالي</option>
                </select>
            </div>
        </div>
    `;
}

function createDisplaySection() {
    return `
        <div class="settings-section">
            <h3>🖥️ إعدادات العرض</h3>
            <div class="setting-item">
                <label>الحد الأقصى للأحداث المعروضة</label>
                <div class="input-group">
                    <input type="range" id="maxEvents" min="50" max="500" value="${monitorSettings.display.maxEvents}">
                    <span id="maxEventsValue">${monitorSettings.display.maxEvents}</span>
                </div>
            </div>
            <div class="setting-item">
                <label>معدل التحديث (بالثواني)</label>
                <div class="input-group">
                    <input type="range" id="refreshRate" min="1" max="60" value="${monitorSettings.display.refreshRate}">
                    <span id="refreshRateValue">${monitorSettings.display.refreshRate}s</span>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-item">
                    <input type="checkbox" id="showTimestamps" ${monitorSettings.display.showTimestamps ? 'checked' : ''}>
                    <label for="showTimestamps">إظهار الطوابع الزمنية</label>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-item">
                    <input type="checkbox" id="animateEvents" ${monitorSettings.display.animateEvents ? 'checked' : ''}>
                    <label for="animateEvents">تحريك الأحداث</label>
                </div>
            </div>
        </div>
    `;
}

function createAdvancedSection() {
    return `
        <div class="settings-section">
            <h3>⚡ الإعدادات المتقدمة</h3>
            <div class="setting-item">
                <div class="checkbox-item">
                    <input type="checkbox" id="logToFile" ${monitorSettings.advanced.logToFile ? 'checked' : ''}>
                    <label for="logToFile">حفظ السجلات في ملف</label>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-item">
                    <input type="checkbox" id="debugMode" ${monitorSettings.advanced.debugMode ? 'checked' : ''}>
                    <label for="debugMode">وضع التشخيص</label>
                </div>
            </div>
            <div class="setting-item">
                <label>مستوى السجل</label>
                <select id="logLevel">
                    <option value="error">أخطاء فقط</option>
                    <option value="warn">تحذيرات</option>
                    <option value="info">معلومات</option>
                    <option value="debug">تشخيص</option>
                </select>
            </div>
        </div>
    `;
}

function createPerformanceSection() {
    return `
        <div class="settings-section">
            <h3>⚡ إعدادات الأداء</h3>
            <div class="setting-item">
                <label>استخدام المعالج</label>
                <select id="cpuUsage">
                    <option value="low">منخفض</option>
                    <option value="medium">متوسط</option>
                    <option value="high">عالي</option>
                </select>
            </div>
            <div class="setting-item">
                <div class="checkbox-item">
                    <input type="checkbox" id="lowPowerMode" ${monitorSettings.performance.lowPowerMode ? 'checked' : ''}>
                    <label for="lowPowerMode">وضع توفير الطاقة</label>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-item">
                    <input type="checkbox" id="backgroundScanning" ${monitorSettings.performance.backgroundScanning ? 'checked' : ''}>
                    <label for="backgroundScanning">الفحص في الخلفية</label>
                </div>
            </div>
            <div class="setting-item">
                <label>حد استخدام الموارد (%)</label>
                <div class="input-group">
                    <input type="range" id="resourceLimit" min="10" max="100" value="${monitorSettings.performance.resourceLimit}">
                    <span id="resourceLimitValue">${monitorSettings.performance.resourceLimit}%</span>
                </div>
            </div>
        </div>
    `;
}

function updateSecurityStats() {
    // Update events today
    const eventsToday = document.getElementById('eventsToday');
    if (eventsToday) {
        const count = Math.floor(Math.random() * 20) + 120;
        eventsToday.textContent = count;
    }
    
    // Update threats blocked
    const threatsBlocked = document.getElementById('threatsBlocked');
    if (threatsBlocked) {
        const count = Math.floor(Math.random() * 10) + 20;
        threatsBlocked.textContent = count;
    }
    
    // Update system health
    const systemHealth = document.getElementById('systemHealth');
    if (systemHealth) {
        const statuses = ['ممتاز', 'جيد', 'مقبول'];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        systemHealth.textContent = randomStatus;
        
        // Update color based on status
        if (randomStatus === 'ممتاز') {
            systemHealth.style.color = '#00ff88';
        } else if (randomStatus === 'جيد') {
            systemHealth.style.color = '#ffa502';
        } else {
            systemHealth.style.color = '#ff4757';
        }
    }
    
    // Update last update time
    const lastUpdate = document.getElementById('lastUpdate');
    if (lastUpdate) {
        const timeOptions = ['منذ ثانيتين', 'منذ دقيقة', 'منذ 30 ثانية', 'الآن'];
        lastUpdate.textContent = timeOptions[Math.floor(Math.random() * timeOptions.length)];
    }
}

function addRandomSecurityEvent() {
    const eventTypes = [
        { type: 'scan', title: 'فحص سريع مكتمل', result: 'نظيف', priority: 'normal' },
        { type: 'threats', title: 'محاولة اختراق محجوبة', result: 'محجوب', priority: 'high' },
        { type: 'system', title: 'تحديث تعريفات الأمان', result: 'مكتمل', priority: 'normal' },
        { type: 'scan', title: 'فحص الملفات المؤقتة', result: 'نظيف', priority: 'normal' },
        { type: 'threats', title: 'رابط مشبوه محجوب', result: 'محجوب', priority: 'medium' }
    ];
    
    const randomEvent = eventTypes[Math.floor(Math.random() * eventTypes.length)];
    addSecurityEvent(randomEvent.type, randomEvent.title, randomEvent.result, randomEvent.priority);
}

function addSecurityEvent(type, title, result, priority) {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ar', { hour: '2-digit', minute: '2-digit' });
    
    const event = {
        type: type,
        title: title,
        result: result,
        priority: priority,
        time: timeString,
        timestamp: now.getTime()
    };
    
    activityData.unshift(event);
    
    // Keep only last 20 events
    if (activityData.length > 20) {
        activityData = activityData.slice(0, 20);
    }
    
    renderActivityEvents();
    updateTabCounts();
}

function renderActivityEvents() {
    const activityList = document.getElementById('securityActivityList');
    if (!activityList) return;
    
    // Filter events based on current filter
    let filteredEvents = activityData;
    if (currentFilter !== 'all') {
        filteredEvents = activityData.filter(event => event.type === currentFilter);
    }
    
    // Clear existing events except system init
    const systemEvent = activityList.querySelector('[data-type="system"]');
    activityList.innerHTML = '';
    if (systemEvent) {
        activityList.appendChild(systemEvent);
    }
    
    // Add filtered events
    filteredEvents.forEach((event, index) => {
        if (event.type === 'system' && event.title.includes('تفعيل')) return; // Skip duplicate system init
        
        const eventElement = createEventElement(event);
        activityList.appendChild(eventElement);
        
        // Animate new event
        if (index === 0) {
            eventElement.style.opacity = '0';
            eventElement.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                eventElement.style.transition = 'all 0.3s ease';
                eventElement.style.opacity = '1';
                eventElement.style.transform = 'translateY(0)';
            }, 100);
        }
    });
}

function createEventElement(event) {
    const eventDiv = document.createElement('div');
    eventDiv.className = `activity-event ${event.type}`;
    eventDiv.setAttribute('data-type', event.type);
    
    const indicatorClass = `${event.type}-indicator`;
    let iconPath = '';
    
    switch (event.type) {
        case 'scan':
            iconPath = 'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z';
            break;
        case 'threats':
            iconPath = 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z';
            break;
        default:
            iconPath = 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z';
    }
    
    eventDiv.innerHTML = `
        <div class="event-timeline">
            <div class="event-time">${event.time}</div>
            <div class="event-indicator ${indicatorClass}">
                <svg viewBox="0 0 24 24" width="14" height="14">
                    <path fill="currentColor" d="${iconPath}"/>
                </svg>
            </div>
        </div>
        <div class="event-content">
            <div class="event-title">${event.title}</div>
            <div class="event-details">
                <span class="event-category ${event.type}">${getEventCategoryText(event.type)}</span>
                <span class="event-priority ${event.priority}">${event.result || event.priority}</span>
            </div>
        </div>
    `;
    
    return eventDiv;
}

function getEventCategoryText(type) {
    const categoryMap = {
        'scan': 'فحص',
        'threats': 'تهديد',
        'system': 'النظام'
    };
    return categoryMap[type] || type;
}

function filterActivity(filter) {
    currentFilter = filter;
    
    // Update active tab
    document.querySelectorAll('.feed-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
    
    // Re-render events
    renderActivityEvents();
}

function searchActivity(query) {
    const events = document.querySelectorAll('.activity-event');
    events.forEach(event => {
        const title = event.querySelector('.event-title').textContent.toLowerCase();
        const category = event.querySelector('.event-category').textContent.toLowerCase();
        
        if (title.includes(query.toLowerCase()) || category.includes(query.toLowerCase()) || query === '') {
            event.classList.remove('hidden');
        } else {
            event.classList.add('hidden');
        }
    });
}

function updateTabCounts() {
    const allCount = activityData.length;
    const threatsCount = activityData.filter(e => e.type === 'threats').length;
    const scansCount = activityData.filter(e => e.type === 'scan').length;
    const systemCount = activityData.filter(e => e.type === 'system').length;
    
    const counters = {
        'allCount': allCount,
        'threatsCount': threatsCount,
        'scansCount': scansCount,
        'systemCount': systemCount
    };
    
    Object.keys(counters).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = counters[id];
        }
    });
}

function loadInitialActivityData() {
    console.log('🔰 Loading initial activity data...');
    
    // Get current time in Arabic format
    const currentTime = getCurrentTime();
    
    // Add initial system activity
    activityData = [
        { 
            type: 'system', 
            title: 'تم تفعيل لوحة قيادة الأمان', 
            result: 'مكتمل', 
            priority: 'normal', 
            time: currentTime, 
            timestamp: Date.now() 
        }
    ];
    
    // Add some initial security events for demonstration
    setTimeout(() => {
        addSecurityEvent('scan', 'فحص النظام الأولي مكتمل', 'نظيف', 'normal');
    }, 2000);
    
    setTimeout(() => {
        addSecurityEvent('system', 'تحديث قواعد بيانات الأمان', 'محدث', 'normal');
    }, 4000);
    
    updateTabCounts();
    console.log('🔰 Initial activity data loaded successfully');
}

function updateInitTime() {
    const initTimeElement = document.getElementById('systemInitTime');
    if (initTimeElement) {
        const currentTime = getCurrentTime();
        initTimeElement.textContent = currentTime;
        console.log(`🔰 System init time updated to: ${currentTime}`);
    }
}

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('ar', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
    });
}

function setupActivityFiltering() {
    console.log('🔰 Setting up activity filtering...');
    
    // Initialize tab event listeners (they're already in HTML onclick)
    renderActivityEvents();
    
    // Ensure proper display of system activity
    setTimeout(() => {
        const systemEvents = document.querySelectorAll('.activity-event[data-type="system"]');
        systemEvents.forEach(event => {
            const timeElement = event.querySelector('.event-time');
            if (timeElement && timeElement.textContent === '--:--') {
                timeElement.textContent = getCurrentTime();
            }
        });
    }, 500);
    
    console.log('🔰 Activity filtering setup completed');
}

function showSecurityNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'security-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, rgba(0, 255, 136, 0.9) 0%, rgba(0, 255, 136, 0.8) 100%);
        color: #000;
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 5px 20px rgba(0, 255, 136, 0.3);
        border: 1px solid rgba(0, 255, 136, 0.5);
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for security notifications
const securityStyle = document.createElement('style');
securityStyle.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(securityStyle);

// === Enhanced Risk Assessment Matrix Functions ===
function refreshRiskMatrix() {
    // Simulate data refresh with animation
    const refreshBtn = document.querySelector('.risk-refresh-btn');
    if (refreshBtn) {
        refreshBtn.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            refreshBtn.style.transform = 'rotate(0deg)';
        }, 600);
    }
    
    // Update risk percentages with random variations
    updateRiskDistribution();
    
    // Update coverage circle
    updateCoverageCircle();
    
    // Update insights
    updateRiskInsights();
    
    // Show refresh notification
    showRiskNotification('تم تحديث مصفوفة تقييم المخاطر بنجاح');
}

function updateRiskPeriod(period) {
    const periodMap = {
        '24h': 'آخر 24 ساعة',
        '7d': 'آخر 7 أيام',
        '30d': 'آخر 30 يوم'
    };
    
    // Simulate different data for different periods
    const riskData = {
        '24h': { critical: 12, medium: 28, low: 60 },
        '7d': { critical: 15, medium: 25, low: 60 },
        '30d': { critical: 18, medium: 22, low: 60 }
    };
    
    const data = riskData[period] || riskData['30d'];
    updateRiskBars(data);
    
    showRiskNotification(`تم التحديث لفترة: ${periodMap[period]}`);
}

function updateRiskDistribution() {
    // Generate realistic risk distribution
    const criticalRisk = Math.floor(Math.random() * 10) + 10; // 10-20%
    const mediumRisk = Math.floor(Math.random() * 15) + 20;   // 20-35%
    const lowRisk = 100 - criticalRisk - mediumRisk;          // Remaining
    
    updateRiskBars({ critical: criticalRisk, medium: mediumRisk, low: lowRisk });
    updateRiskCounts({ critical: criticalRisk, medium: mediumRisk, low: lowRisk });
}

function updateRiskBars(data) {
    const criticalBar = document.querySelector('.critical-bar');
    const mediumBar = document.querySelector('.medium-bar');
    const lowBar = document.querySelector('.low-bar');
    
    const criticalPercentage = document.querySelector('.risk-category.critical .risk-percentage');
    const mediumPercentage = document.querySelector('.risk-category.medium .risk-percentage');
    const lowPercentage = document.querySelector('.risk-category.low .risk-percentage');
    
    if (criticalBar && mediumBar && lowBar) {
        // Animate bar widths
        setTimeout(() => {
            criticalBar.style.width = `${data.critical}%`;
            mediumBar.style.width = `${data.medium}%`;
            lowBar.style.width = `${data.low}%`;
        }, 100);
        
        // Update percentage displays
        if (criticalPercentage) criticalPercentage.textContent = `${data.critical}%`;
        if (mediumPercentage) mediumPercentage.textContent = `${data.medium}%`;
        if (lowPercentage) lowPercentage.textContent = `${data.low}%`;
    }
}

function updateRiskCounts(data) {
    const criticalCount = Math.ceil(data.critical / 5); // Approximate threat count
    const mediumCount = Math.ceil(data.medium / 4);
    const lowCount = Math.ceil(data.low / 5);
    
    const criticalCountEl = document.querySelector('.risk-category.critical .risk-count');
    const mediumCountEl = document.querySelector('.risk-category.medium .risk-count');
    const lowCountEl = document.querySelector('.risk-category.low .risk-count');
    
    if (criticalCountEl) criticalCountEl.textContent = `${criticalCount} تهديدات`;
    if (mediumCountEl) mediumCountEl.textContent = `${mediumCount} تهديدات`;
    if (lowCountEl) lowCountEl.textContent = `${lowCount} تهديدات`;
}

function updateCoverageCircle() {
    const coverageCircle = document.getElementById('coverageCircle');
    if (!coverageCircle) return;
    
    // Calculate total coverage (always near 100% for security)
    const coverage = Math.floor(Math.random() * 3) + 97; // 97-100%
    const circumference = 2 * Math.PI * 50; // radius = 50
    const offset = circumference - (coverage / 100) * circumference;
    
    coverageCircle.style.strokeDashoffset = offset;
    
    // Update percentage display
    const coveragePercentage = document.querySelector('.coverage-percentage');
    if (coveragePercentage) {
        coveragePercentage.textContent = `${coverage}%`;
    }
}

function updateRiskInsights() {
    // Update trend analysis
    const trendIndicator = document.querySelector('.trend-indicator');
    const trends = [
        { text: '↗ +2.3%', class: 'positive' },
        { text: '↘ -1.1%', class: 'negative' },
        { text: '→ 0.0%', class: 'neutral' }
    ];
    
    const randomTrend = trends[Math.floor(Math.random() * trends.length)];
    if (trendIndicator) {
        trendIndicator.textContent = randomTrend.text;
        trendIndicator.className = `trend-indicator ${randomTrend.class}`;
    }
    
    // Update threat forecast
    const forecastLevel = document.querySelector('.forecast-level');
    const levels = [
        { text: 'منخفض', class: 'low' },
        { text: 'متوسط', class: 'moderate' },
        { text: 'عالي', class: 'high' }
    ];
    
    const randomLevel = levels[Math.floor(Math.random() * levels.length)];
    if (forecastLevel) {
        forecastLevel.textContent = randomLevel.text;
        forecastLevel.className = `forecast-level ${randomLevel.class}`;
    }
    
    // Update compliance score
    const complianceValue = document.querySelector('.compliance-value');
    if (complianceValue) {
        const score = Math.floor(Math.random() * 10) + 90; // 90-100
        complianceValue.textContent = `${score}/100`;
    }
}

function showRiskNotification(message) {
    // Create temporary notification
    const notification = document.createElement('div');
    notification.className = 'risk-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 255, 136, 0.9);
        color: #000;
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: bold;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

function initializeRiskMatrix() {
    // Initial data setup
    updateRiskDistribution();
    updateCoverageCircle();
    updateRiskInsights();
    
    // Set up periodic updates
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every interval
            updateRiskDistribution();
        }
    }, 45000); // Every 45 seconds
    
    // Add hover effects for risk categories
    const riskCategories = document.querySelectorAll('.risk-category');
    riskCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(8px) scale(1.02)';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// === Enhanced Professional Dashboard Enhancement ===
// Enhanced DOMContentLoaded event for professional dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Initialize professional dashboard if elements exist
    if (document.querySelector('.security-level-container')) {
        setTimeout(() => {
            initializeProfessionalDashboard();
        }, 500);
    }
    
    // Initialize risk assessment matrix
    if (document.querySelector('.risk-assessment-container')) {
        setTimeout(() => {
            initializeRiskMatrix();
        }, 800);
    }
    
    // Initialize live security monitor
    if (document.querySelector('.live-security-monitor')) {
        setTimeout(() => {
            initializeLiveSecurityMonitor();
            
            // Ensure proper initialization of activity display
            setTimeout(() => {
                const systemInitTime = document.getElementById('systemInitTime');
                if (systemInitTime && systemInitTime.textContent === '--:--') {
                    systemInitTime.textContent = getCurrentTime();
                }
                
                // Check if activity list is empty and populate it
                const activityList = document.getElementById('securityActivityList');
                if (activityList && activityList.children.length === 0) {
                    renderActivityEvents();
                }
            }, 500);
        }, 1000);
    }
    
    // Add global keyboard shortcuts for enhanced features
    document.addEventListener('keydown', function(e) {
        // Ctrl+D to toggle dashboard
        if (e.ctrlKey && e.key === 'd') {
            e.preventDefault();
            toggleDashboard();
        }
        
        // Ctrl+R to refresh dashboard stats
        if (e.ctrlKey && e.key === 'r' && document.querySelector('.security-level-container')) {
            e.preventDefault();
            updateEnhancedDashboardStats();
        }
        
        // Ctrl+M to refresh risk matrix
        if (e.ctrlKey && e.key === 'm' && document.querySelector('.risk-assessment-container')) {
            e.preventDefault();
            refreshRiskMatrix();
        }
        
        // Ctrl+S to trigger manual scan
        if (e.ctrlKey && e.key === 's' && document.querySelector('.live-security-monitor')) {
            e.preventDefault();
            triggerManualScan();
        }
        
        // Ctrl+L to clear security log
        if (e.ctrlKey && e.key === 'l' && document.querySelector('.live-security-monitor')) {
            e.preventDefault();
            clearSecurityLog();
        }
        
        // Escape to close any open overlays
        if (e.key === 'Escape') {
            const overlays = document.querySelectorAll('.overlay:not([style*="display: none"])');
            overlays.forEach(overlay => {
                overlay.style.display = 'none';
            });
        }
    });
    
    // Enhanced console logs for professional platform
    console.log('🔰 CyberGuard Professional Platform Initialized');
    console.log('🔰 Enhanced Dashboard Active');
    console.log('🔰 Advanced Risk Assessment Matrix Loaded');
    console.log('🔰 Live Security Monitor Online');
    console.log('🔰 Real-time Security Monitoring Enabled');
    console.log('🔰 25 Advanced Security Tools Ready');
    console.log('🔰 Professional UI Components Loaded');
    console.log('🔰 Monitor Settings System Ready');
    console.log('🔰 Keyboard Shortcuts: Ctrl+S (Scan), Ctrl+L (Clear Log), Ctrl+M (Risk Matrix)');
    
    // تحميل إعدادات المراقب
    loadMonitorSettings();
    
    // تطبيق الإعدادات المحملة
    applyMonitorSettings();
});

// === وظائف إعدادات المراقب ===

function updateSettingsUI() {
    // تحديث المنزلقات والقيم
    const scanIntervalSlider = document.getElementById('scanInterval');
    const maxEventsSlider = document.getElementById('maxEvents');
    const refreshRateSlider = document.getElementById('refreshRate');
    const resourceLimitSlider = document.getElementById('resourceLimit');
    
    if (scanIntervalSlider) {
        scanIntervalSlider.value = monitorSettings.scanning.interval;
        scanIntervalSlider.addEventListener('input', (e) => {
            monitorSettings.scanning.interval = parseInt(e.target.value);
            document.getElementById('scanIntervalValue').textContent = e.target.value + 's';
        });
    }
    
    if (maxEventsSlider) {
        maxEventsSlider.value = monitorSettings.display.maxEvents;
        maxEventsSlider.addEventListener('input', (e) => {
            monitorSettings.display.maxEvents = parseInt(e.target.value);
            document.getElementById('maxEventsValue').textContent = e.target.value;
        });
    }
    
    if (refreshRateSlider) {
        refreshRateSlider.value = monitorSettings.display.refreshRate;
        refreshRateSlider.addEventListener('input', (e) => {
            monitorSettings.display.refreshRate = parseInt(e.target.value);
            document.getElementById('refreshRateValue').textContent = e.target.value + 's';
        });
    }
    
    if (resourceLimitSlider) {
        resourceLimitSlider.value = monitorSettings.performance.resourceLimit;
        resourceLimitSlider.addEventListener('input', (e) => {
            monitorSettings.performance.resourceLimit = parseInt(e.target.value);
            document.getElementById('resourceLimitValue').textContent = e.target.value + '%';
        });
    }
    
    // تحديث القوائم المنسدلة
    updateSelectValue('scanDepth', monitorSettings.scanning.depth);
    updateSelectValue('alertLevel', monitorSettings.alerts.level);
    updateSelectValue('logLevel', monitorSettings.advanced.logLevel);
    updateSelectValue('cpuUsage', monitorSettings.performance.cpuUsage);
    
    // تحديث صناديق الاختيار
    updateCheckboxes();
}

function updateSelectValue(selectId, value) {
    const select = document.getElementById(selectId);
    if (select) {
        select.value = value;
        select.addEventListener('change', (e) => {
            updateSettingValue(selectId, e.target.value);
        });
    }
}

function updateCheckboxes() {
    const checkboxMappings = {
        'autoScan': 'scanning.autoScan',
        'realTimeProtection': 'scanning.realTimeProtection',
        'alertsEnabled': 'alerts.enabled',
        'soundAlerts': 'alerts.sound',
        'desktopAlerts': 'alerts.desktop',
        'showTimestamps': 'display.showTimestamps',
        'animateEvents': 'display.animateEvents',
        'logToFile': 'advanced.logToFile',
        'debugMode': 'advanced.debugMode',
        'lowPowerMode': 'performance.lowPowerMode',
        'backgroundScanning': 'performance.backgroundScanning'
    };
    
    Object.entries(checkboxMappings).forEach(([checkboxId, settingPath]) => {
        const checkbox = document.getElementById(checkboxId);
        if (checkbox) {
            const value = getNestedValue(monitorSettings, settingPath);
            checkbox.checked = value;
            checkbox.addEventListener('change', (e) => {
                setNestedValue(monitorSettings, settingPath, e.target.checked);
            });
        }
    });
}

function updateSettingValue(settingId, value) {
    const mappings = {
        'scanDepth': 'scanning.depth',
        'alertLevel': 'alerts.level',
        'logLevel': 'advanced.logLevel',
        'cpuUsage': 'performance.cpuUsage'
    };
    
    if (mappings[settingId]) {
        setNestedValue(monitorSettings, mappings[settingId], value);
    }
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

function setNestedValue(obj, path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const target = keys.reduce((current, key) => current[key], obj);
    target[lastKey] = value;
}

function closeMonitorSettings() {
    const modal = document.querySelector('.monitor-settings-modal');
    if (modal) {
        modal.style.opacity = '0';
        modal.classList.remove('active');
        setTimeout(() => {
            if (modal.parentNode) {
                modal.remove();
            }
        }, 300);
    }
}

function saveMonitorSettings() {
    try {
        localStorage.setItem('cyberguard-monitor-settings', JSON.stringify(monitorSettings));
        showNotification('تم حفظ الإعدادات بنجاح!', 'success');
        
        // تطبيق الإعدادات الجديدة
        applyMonitorSettings();
        
        console.log('✅ Monitor settings saved:', monitorSettings);
    } catch (error) {
        showNotification('فشل في حفظ الإعدادات', 'error');
        console.error('❌ Save error:', error);
    }
}

function resetToDefaults() {
    if (confirm('هل أنت متأكد من إعادة تعيين جميع الإعدادات للافتراضية؟')) {
        // إعادة تعيين الإعدادات
        Object.assign(monitorSettings, {
            scanning: {
                interval: 30,
                depth: 'standard',
                autoScan: true,
                realTimeProtection: true
            },
            alerts: {
                enabled: true,
                sound: true,
                desktop: true,
                level: 'medium',
                email: false
            },
            display: {
                maxEvents: 100,
                refreshRate: 5,
                showTimestamps: true,
                animateEvents: true,
                darkMode: true
            },
            advanced: {
                logToFile: false,
                debugMode: false,
                logLevel: 'info',
                customRules: false
            },
            performance: {
                cpuUsage: 'medium',
                lowPowerMode: false,
                backgroundScanning: true,
                resourceLimit: 50
            }
        });
        
        updateSettingsUI();
        showNotification('تم إعادة تعيين الإعدادات بنجاح', 'success');
    }
}

function exportSettings() {
    try {
        const dataStr = JSON.stringify(monitorSettings, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `cyberguard-settings-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        showNotification('تم تصدير الإعدادات بنجاح', 'success');
    } catch (error) {
        showNotification('فشل في تصدير الإعدادات', 'error');
        console.error('Export error:', error);
    }
}

function importSettings() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const importedSettings = JSON.parse(event.target.result);
                
                // التحقق من صحة البنية
                if (importedSettings.scanning && importedSettings.alerts && 
                    importedSettings.display && importedSettings.advanced && 
                    importedSettings.performance) {
                    
                    Object.assign(monitorSettings, importedSettings);
                    updateSettingsUI();
                    showNotification('تم استيراد الإعدادات بنجاح', 'success');
                } else {
                    throw new Error('تنسيق ملف غير صحيح');
                }
            } catch (error) {
                showNotification('خطأ في قراءة الملف: ' + error.message, 'error');
            }
        };
        reader.readAsText(file);
    });
    input.click();
}

function applyMonitorSettings() {
    console.log('🔧 Applying monitor settings...');
    
    // تطبيق إعدادات الفحص
    if (monitorSettings.scanning.autoScan && window.liveSecurityInterval) {
        clearInterval(window.liveSecurityInterval);
        window.liveSecurityInterval = setInterval(
            generateSecurityActivity, 
            monitorSettings.scanning.interval * 1000
        );
    }
    
    // تطبيق إعدادات العرض
    const activityList = document.querySelector('.activity-list');
    if (activityList) {
        if (monitorSettings.display.animateEvents) {
            activityList.classList.add('animated');
        } else {
            activityList.classList.remove('animated');
        }
    }
    
    // تطبيق إعدادات الأداء
    if (monitorSettings.performance.lowPowerMode) {
        document.documentElement.style.setProperty('--animation-duration', '0.8s');
    } else {
        document.documentElement.style.setProperty('--animation-duration', '0.3s');
    }
    
    console.log('✅ Monitor settings applied successfully');
}

function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">
                ${type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️'}
            </span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        background: ${type === 'success' ? 'linear-gradient(135deg, #00ff88, #32ff99)' : 
                    type === 'error' ? 'linear-gradient(135deg, #ff4757, #ff6b7a)' : 
                    type === 'warning' ? 'linear-gradient(135deg, #ffa502, #ff6348)' :
                    'linear-gradient(135deg, #3742fa, #5352ed)'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 350px;
        font-size: 14px;
        border: 1px solid rgba(255,255,255,0.2);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, duration);
}

// تحميل الإعدادات عند بدء التشغيل
function loadMonitorSettings() {
    try {
        const saved = localStorage.getItem('cyberguard-monitor-settings');
        if (saved) {
            const parsed = JSON.parse(saved);
            Object.assign(monitorSettings, parsed);
            console.log('✅ Monitor settings loaded from localStorage');
        }
    } catch (error) {
        console.warn('⚠️ Failed to load settings:', error);
    }
}

// وظائف إنشاء أقسام الإعدادات المحسنة - الجزء الثاني
function createAdvancedAlertsSection() {
    return `
        <div class="section-header">
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21"/>
            </svg>
            <h3>إعدادات التنبيهات المتقدمة</h3>
        </div>
        <div class="setting-group">
            <div class="setting-item">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="alertsEnabled" ${monitorSettings.alerts.enabled ? 'checked' : ''}>
                    <label for="alertsEnabled" class="checkbox-label">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19Z"/>
                        </svg>
                        تفعيل جميع التنبيهات
                    </label>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="soundAlerts" ${monitorSettings.alerts.sound ? 'checked' : ''}>
                    <label for="soundAlerts" class="checkbox-label">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/>
                        </svg>
                        التنبيهات الصوتية
                    </label>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="desktopAlerts" ${monitorSettings.alerts.desktop ? 'checked' : ''}>
                    <label for="desktopAlerts" class="checkbox-label">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M21,16V4H3V16H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21Z"/>
                        </svg>
                        تنبيهات سطح المكتب
                    </label>
                </div>
            </div>
            <div class="setting-item">
                <div class="setting-label">
                    <svg viewBox="0 0 24 24" width="18" height="18">
                        <path fill="currentColor" d="M12,2L13.09,8.26L22,9L14.74,13.74L17.18,22L12,17.27L6.82,22L9.26,13.74L2,9L10.91,8.26L12,2Z"/>
                    </svg>
                    <label>مستوى التنبيه</label>
                </div>
                <select id="alertLevel" class="modern-select">
                    <option value="low">منخفض - تنبيهات أساسية</option>
                    <option value="medium">متوسط - تنبيهات مهمة</option>
                    <option value="high">عالي - جميع التنبيهات</option>
                    <option value="critical">حرج - طوارئ فقط</option>
                </select>
            </div>
            <div class="setting-item">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="urgentAlert" ${monitorSettings.alerts.urgentAlert ? 'checked' : ''}>
                    <label for="urgentAlert" class="checkbox-label">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"/>
                        </svg>
                        تنبيهات الطوارئ العاجلة
                    </label>
                </div>
            </div>
        </div>
    `;
}

function createAdvancedDisplaySection() {
    return `
        <div class="section-header">
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M21,16V4H3V16H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21Z"/>
            </svg>
            <h3>إعدادات العرض المتقدمة</h3>
        </div>
        <div class="setting-group">
            <div class="setting-item">
                <div class="setting-label">
                    <svg viewBox="0 0 24 24" width="18" height="18">
                        <path fill="currentColor" d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19Z"/>
                    </svg>
                    <label>الحد الأقصى للأحداث</label>
                </div>
                <div class="input-group">
                    <input type="range" id="maxEvents" min="50" max="500" value="${monitorSettings.display.maxEvents}" class="modern-slider">
                    <div class="slider-value" id="maxEventsValue">${monitorSettings.display.maxEvents}</div>
                </div>
            </div>
            <div class="setting-item">
                <div class="setting-label">
                    <svg viewBox="0 0 24 24" width="18" height="18">
                        <path fill="currentColor" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
                    </svg>
                    <label>معدل التحديث (ثانية)</label>
                </div>
                <div class="input-group">
                    <input type="range" id="refreshRate" min="1" max="60" value="${monitorSettings.display.refreshRate}" class="modern-slider">
                    <div class="slider-value" id="refreshRateValue">${monitorSettings.display.refreshRate}s</div>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="showTimestamps" ${monitorSettings.display.showTimestamps ? 'checked' : ''}>
                    <label for="showTimestamps" class="checkbox-label">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
                        </svg>
                        إظهار الطوابع الزمنية
                    </label>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="animateEvents" ${monitorSettings.display.animateEvents ? 'checked' : ''}>
                    <label for="animateEvents" class="checkbox-label">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"/>
                        </svg>
                        تحريك الأحداث والانتقالات
                    </label>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="compactView" ${monitorSettings.display.compactView ? 'checked' : ''}>
                    <label for="compactView" class="checkbox-label">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z"/>
                        </svg>
                        العرض المضغوط
                    </label>
                </div>
            </div>
        </div>
    `;
}

function createAdvancedSecuritySection() {
    return `
        <div class="section-header">
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
            </svg>
            <h3>إعدادات الأمان المتقدمة</h3>
        </div>
        <div class="setting-group">
            <div class="setting-item">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="advancedThreatDetection" ${monitorSettings.security.advancedThreatDetection ? 'checked' : ''}>
                    <label for="advancedThreatDetection" class="checkbox-label">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"/>
                        </svg>
                        كشف التهديدات المتقدم
                    </label>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="behaviorAnalysis" ${monitorSettings.security.behaviorAnalysis ? 'checked' : ''}>
                    <label for="behaviorAnalysis" class="checkbox-label">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M9,5A4,4 0 0,1 13,9A4,4 0 0,1 9,13A4,4 0 0,1 5,9A4,4 0 0,1 9,5M9,15C11.67,15 17,16.34 17,19V21H1V19C1,16.34 6.33,15 9,15M16.76,5.36C18.78,7.56 18.78,10.61 16.76,12.63L15.08,10.94C15.92,9.76 15.92,8.23 15.08,7.05L16.76,5.36M20.07,2C24,6.05 23.97,12.11 20.07,16.07L18.44,14.37C21.21,11.19 21.21,6.65 18.44,3.63L20.07,2Z"/>
                        </svg>
                        تحليل السلوك
                    </label>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="networkMonitoring" ${monitorSettings.security.networkMonitoring ? 'checked' : ''}>
                    <label for="networkMonitoring" class="checkbox-label">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M15,9C15,7.89 14.1,7 13,7H11C9.89,7 9,7.89 9,9V15C9,16.11 9.89,17 11,17H13C14.11,17 15,16.11 15,15M13,9V15H11V9M21,15C21,16.11 20.11,17 19,17H17V15H19V9H17V7H19C20.11,7 21,7.89 21,9M7,15V17H5C3.89,17 3,16.11 3,15V9C3,7.89 3.89,7 5,7H7V9H5V15Z"/>
                        </svg>
                        مراقبة الشبكة
                    </label>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="fileIntegrityCheck" ${monitorSettings.security.fileIntegrityCheck ? 'checked' : ''}>
                    <label for="fileIntegrityCheck" class="checkbox-label">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                        </svg>
                        فحص سلامة الملفات
                    </label>
                </div>
            </div>
            <div class="setting-item">
                <div class="setting-label">
                    <svg viewBox="0 0 24 24" width="18" height="18">
                        <path fill="currentColor" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"/>
                    </svg>
                    <label>وضع الحجر الصحي</label>
                </div>
                <select id="quarantineMode" class="modern-select">
                    <option value="auto">تلقائي - حجر ذكي</option>
                    <option value="manual">يدوي - مراجعة المستخدم</option>
                    <option value="strict">صارم - حجر فوري</option>
                    <option value="disabled">معطل</option>
                </select>
            </div>
        </div>
    `;
}

function createAdvancedPerformanceSection() {
    return `
        <div class="section-header">
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M13,2.03V2.05L13,4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03M11,2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06M4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1L4.26,5.67M2.06,13C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13H2.06M7.1,18.37L5.67,19.74C7.18,21 9.04,21.74 11,21.94V19.94C9.58,19.75 8.23,19.19 7.1,18.37M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"/>
            </svg>
            <h3>إعدادات الأداء المتقدمة</h3>
        </div>
        <div class="setting-group">
            <div class="setting-item">
                <div class="setting-label">
                    <svg viewBox="0 0 24 24" width="18" height="18">
                        <path fill="currentColor" d="M13,2.03V2.05L13,4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03Z"/>
                    </svg>
                    <label>استخدام المعالج</label>
                </div>
                <select id="cpuUsage" class="modern-select">
                    <option value="low">منخفض - توفير الطاقة</option>
                    <option value="medium">متوسط - متوازن</option>
                    <option value="high">عالي - أداء أقصى</option>
                    <option value="adaptive">تكيفي - ذكي</option>
                </select>
            </div>
            <div class="setting-item">
                <div class="setting-label">
                    <svg viewBox="0 0 24 24" width="18" height="18">
                        <path fill="currentColor" d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                    <label>حد استخدام الموارد (%)</label>
                </div>
                <div class="input-group">
                    <input type="range" id="resourceLimit" min="10" max="100" value="${monitorSettings.performance.resourceLimit}" class="modern-slider">
                    <div class="slider-value" id="resourceLimitValue">${monitorSettings.performance.resourceLimit}%</div>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="lowPowerMode" ${monitorSettings.performance.lowPowerMode ? 'checked' : ''}>
                    <label for="lowPowerMode" class="checkbox-label">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,2V10L16,7L13,4V2Z"/>
                        </svg>
                        وضع توفير الطاقة
                    </label>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="backgroundScanning" ${monitorSettings.performance.backgroundScanning ? 'checked' : ''}>
                    <label for="backgroundScanning" class="checkbox-label">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z"/>
                        </svg>
                        الفحص في الخلفية
                    </label>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="cacheOptimization" ${monitorSettings.performance.cacheOptimization ? 'checked' : ''}>
                    <label for="cacheOptimization" class="checkbox-label">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M13,9H18.5L13,14.5V9M6,6H11V12H6V6Z"/>
                        </svg>
                        تحسين ذاكرة التخزين المؤقت
                    </label>
                </div>
            </div>
        </div>
    `;
}

function createAdvancedOptionsSection() {
    return `
        <div class="section-header">
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11.03L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11.03L19.5,12L19.43,12.97L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z"/>
            </svg>
            <h3>الخيارات المتقدمة</h3>
        </div>
        <div class="setting-group">
            <div class="setting-item">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="logToFile" ${monitorSettings.advanced.logToFile ? 'checked' : ''}>
                    <label for="logToFile" class="checkbox-label">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                        </svg>
                        حفظ السجلات في ملف
                    </label>
                </div>
            </div>
            <div class="setting-item">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="debugMode" ${monitorSettings.advanced.debugMode ? 'checked' : ''}>
                    <label for="debugMode" class="checkbox-label">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M20,8H17.19C16.74,7.22 16.12,6.55 15.37,6.04L17,4.41L15.59,3L13.42,5.17C12.96,5.06 12.49,5 12,5C11.51,5 11.04,5.06 10.59,5.17L8.41,3L7,4.41L8.62,6.04C7.88,6.55 7.26,7.22 6.81,8H4V10H6.09C6.04,10.33 6,10.66 6,11V12H4V14H6V15C6,15.34 6.04,15.67 6.09,16H4V18H6.81C7.85,19.79 9.78,21 12,21C14.22,21 16.15,19.79 17.19,18H20V16H17.91C17.96,15.67 18,15.34 18,15V14H20V12H18V11C18,10.66 17.96,10.33 17.91,10H20V8Z"/>
                        </svg>
                        وضع التشخيص
                    </label>
                </div>
            </div>
            <div class="setting-item">
                <div class="setting-label">
                    <svg viewBox="0 0 24 24" width="18" height="18">
                        <path fill="currentColor" d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                    </svg>
                    <label>مستوى السجل</label>
                </div>
                <select id="logLevel" class="modern-select">
                    <option value="error">أخطاء فقط</option>
                    <option value="warn">تحذيرات ومهم</option>
                    <option value="info">معلومات عامة</option>
                    <option value="debug">تشخيص مفصل</option>
                    <option value="verbose">شامل - كل شيء</option>
                </select>
            </div>
            <div class="setting-item">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="autoUpdate" ${monitorSettings.advanced.autoUpdate ? 'checked' : ''}>
                    <label for="autoUpdate" class="checkbox-label">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M12,18A6,6 0 0,1 6,12C6,9 8.24,6.5 11.08,6.08L9.41,7.75L10.83,9.17L14.83,5.17L10.83,1.17L9.41,2.59L11.08,4.26C7.17,4.69 4,8.08 4,12A8,8 0 0,0 12,20C15.31,20 18.17,17.8 19.29,14.67L17.58,14C16.84,16.23 14.66,17.86 12,18M16.59,16.24L15.17,14.83L19.17,10.83L23.17,14.83L21.75,16.24L20.08,14.58C20.69,15.92 21,17.37 21,18.83C21,20.1 19.1,21 16.5,21C13.9,21 12,20.1 12,18.83C12,18.05 13.07,17.45 14.67,17.17L15.08,18.67C14.22,18.83 13.5,19.17 13.5,19.67C13.5,20.1 14.6,20.5 16.5,20.5C18.4,20.5 19.5,20.1 19.5,19.67C19.5,18.83 19.33,17.92 18.92,17.08L16.59,16.24Z"/>
                        </svg>
                        التحديث التلقائي
                    </label>
                </div>
            </div>
        </div>
    `;
}

// إعداد تنقل الإعدادات المتقدمة
function setupAdvancedSettingsNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = {
        'scanning': createAdvancedScanningSection,
        'alerts': createAdvancedAlertsSection,
        'display': createAdvancedDisplaySection,
        'security': createAdvancedSecuritySection,
        'performance': createAdvancedPerformanceSection,
        'advanced': createAdvancedOptionsSection
    };

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // إزالة الحالة النشطة من جميع العناصر
            navItems.forEach(nav => nav.classList.remove('active'));
            // إضافة الحالة النشطة للعنصر المختار
            this.classList.add('active');
            
            // الحصول على نوع القسم
            const sectionType = this.getAttribute('data-section');
            
            // تحديث المحتوى
            const contentContainer = document.querySelector('.settings-content');
            if (contentContainer && sections[sectionType]) {
                contentContainer.innerHTML = sections[sectionType]();
                
                // إعداد مستمعات الأحداث للعناصر الجديدة
                setupAdvancedSettingsEventListeners();
            }
        });
    });
}

// إعداد مستمعات الأحداث للإعدادات المتقدمة
function setupAdvancedSettingsEventListeners() {
    // مستمعات أحداث المنزلقات
    const sliders = document.querySelectorAll('.modern-slider');
    sliders.forEach(slider => {
        slider.addEventListener('input', function() {
            const valueDisplay = document.getElementById(this.id + 'Value');
            if (valueDisplay) {
                const unit = this.id.includes('Rate') ? 's' : '%';
                valueDisplay.textContent = this.value + unit;
            }
            
            // حفظ القيمة
            saveAdvancedSetting(this.id, this.value);
        });
    });

    // مستمعات أحداث مربعات الاختيار
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            saveAdvancedSetting(this.id, this.checked);
        });
    });

    // مستمعات أحداث القوائم المنسدلة
    const selects = document.querySelectorAll('.modern-select');
    selects.forEach(select => {
        select.addEventListener('change', function() {
            saveAdvancedSetting(this.id, this.value);
        });
    });
}

// حفظ إعداد متقدم
function saveAdvancedSetting(settingId, value) {
    try {
        // تحديد الفئة والإعداد من المعرف
        const categoryMap = {
            'realTimeMonitoring': 'scanning',
            'deepScan': 'scanning',
            'autoQuarantine': 'scanning',
            'scheduleScans': 'scanning',
            'scanFrequency': 'scanning',
            'emailAlerts': 'alerts',
            'pushNotifications': 'alerts',
            'soundAlerts': 'alerts',
            'customAlerts': 'alerts',
            'alertThreshold': 'alerts',
            'theme': 'display',
            'language': 'display',
            'refreshRate': 'display',
            'showTimestamps': 'display',
            'animateEvents': 'display',
            'compactView': 'display',
            'advancedThreatDetection': 'security',
            'behaviorAnalysis': 'security',
            'networkMonitoring': 'security',
            'fileIntegrityCheck': 'security',
            'quarantineMode': 'security',
            'cpuUsage': 'performance',
            'resourceLimit': 'performance',
            'lowPowerMode': 'performance',
            'backgroundScanning': 'performance',
            'cacheOptimization': 'performance',
            'logToFile': 'advanced',
            'debugMode': 'advanced',
            'logLevel': 'advanced',
            'autoUpdate': 'advanced'
        };

        const category = categoryMap[settingId];
        if (category && monitorSettings[category]) {
            monitorSettings[category][settingId] = value;
            
            // حفظ في التخزين المحلي
            localStorage.setItem('cyberGuardMonitorSettings', JSON.stringify(monitorSettings));
            
            console.log(`تم حفظ الإعداد: ${settingId} = ${value}`);
        }
    } catch (error) {
        console.error('خطأ في حفظ الإعداد:', error);
    }
}

// تحديث واجهة المستخدم للإعدادات المتقدمة
function updateAdvancedSettingsUI() {
    try {
        // تحديث المنزلقات
        const sliders = document.querySelectorAll('.modern-slider');
        sliders.forEach(slider => {
            const categoryMap = {
                'scanFrequency': 'scanning',
                'alertThreshold': 'alerts',
                'refreshRate': 'display',
                'resourceLimit': 'performance'
            };
            
            const category = categoryMap[slider.id];
            if (category && monitorSettings[category] && monitorSettings[category][slider.id] !== undefined) {
                slider.value = monitorSettings[category][slider.id];
                
                const valueDisplay = document.getElementById(slider.id + 'Value');
                if (valueDisplay) {
                    const unit = slider.id.includes('Rate') ? 's' : 
                                slider.id.includes('Frequency') ? 'h' : '%';
                    valueDisplay.textContent = slider.value + unit;
                }
            }
        });

        // تحديث مربعات الاختيار
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            const categoryMap = {
                'realTimeMonitoring': 'scanning',
                'deepScan': 'scanning',
                'autoQuarantine': 'scanning',
                'scheduleScans': 'scanning',
                'emailAlerts': 'alerts',
                'pushNotifications': 'alerts',
                'soundAlerts': 'alerts',
                'customAlerts': 'alerts',
                'showTimestamps': 'display',
                'animateEvents': 'display',
                'compactView': 'display',
                'advancedThreatDetection': 'security',
                'behaviorAnalysis': 'security',
                'networkMonitoring': 'security',
                'fileIntegrityCheck': 'security',
                'lowPowerMode': 'performance',
                'backgroundScanning': 'performance',
                'cacheOptimization': 'performance',
                'logToFile': 'advanced',
                'debugMode': 'advanced',
                'autoUpdate': 'advanced'
            };
            
            const category = categoryMap[checkbox.id];
            if (category && monitorSettings[category] && monitorSettings[category][checkbox.id] !== undefined) {
                checkbox.checked = monitorSettings[category][checkbox.id];
            }
        });

        // تحديث القوائم المنسدلة
        const selects = document.querySelectorAll('.modern-select');
        selects.forEach(select => {
            const categoryMap = {
                'theme': 'display',
                'language': 'display',
                'quarantineMode': 'security',
                'cpuUsage': 'performance',
                'logLevel': 'advanced'
            };
            
            const category = categoryMap[select.id];
            if (category && monitorSettings[category] && monitorSettings[category][select.id] !== undefined) {
                select.value = monitorSettings[category][select.id];
            }
        });
    } catch (error) {
        console.error('خطأ في تحديث واجهة المستخدم:', error);
    }
}

// تحميل الإعدادات المحفوظة
function loadSavedMonitorSettings() {
    try {
        const savedSettings = localStorage.getItem('cyberGuardMonitorSettings');
        if (savedSettings) {
            const parsedSettings = JSON.parse(savedSettings);
            Object.assign(monitorSettings, parsedSettings);
        }
    } catch (error) {
        console.error('خطأ في تحميل الإعدادات المحفوظة:', error);
    }
}

// تشغيل النظام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    try {
        // تحميل الإعدادات المحفوظة
        loadSavedMonitorSettings();
        
        // إعداد النظام
        console.log('🚀 تم تشغيل CyberGuard Platform بنجاح');
        console.log('📊 إعدادات المراقب جاهزة');
        
    } catch (error) {
        console.error('خطأ في تشغيل النظام:', error);
    }
});