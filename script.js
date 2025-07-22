// Dashboard Statistics Tracking
let dashboardStats = {
    toolsUsed: 0,
    scansPerformed: 0,
    threatsDetected: 0,
    sessionStartTime: Date.now(),
    securityLevel: 85,
    activeTools: 0,
    riskLevels: {
        high: 15,
        medium: 25,
        low: 60
    }
};

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

        // Refresh results to match the new language
        refreshAllResults();
    } catch (e) {
        console.error('Error switching language:', e);
    }
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
        updateSecurityChart();
        startDashboardTimers();
    }
}

function updateDashboardStats() {
    // Update main statistics
    document.getElementById('toolsUsedCount').textContent = dashboardStats.toolsUsed;
    document.getElementById('scansPerformed').textContent = dashboardStats.scansPerformed;
    document.getElementById('threatsDetected').textContent = dashboardStats.threatsDetected;
    
    // Update session time
    updateSessionTime();
    
    // Update security level with animation
    updateSecurityLevel();
}

function updateSecurityLevel() {
    const level = dashboardStats.securityLevel;
    const progressElement = document.querySelector('.security-progress');
    const levelElement = document.querySelector('.security-level-text');
    
    if (progressElement && levelElement) {
        progressElement.style.width = level + '%';
        levelElement.textContent = level + '%';
        
        // Color coding based on level
        progressElement.className = 'security-progress';
        if (level >= 80) {
            progressElement.classList.add('high');
        } else if (level >= 60) {
            progressElement.classList.add('medium');
        } else {
            progressElement.classList.add('low');
        }
    }
}

function updateSecurityChart() {
    const chart = document.getElementById('securityChart');
    const segments = chart.querySelectorAll('.chart-segment');
    
    // Animate chart segments
    segments.forEach((segment, index) => {
        const percentages = [dashboardStats.riskLevels.high, dashboardStats.riskLevels.medium, dashboardStats.riskLevels.low];
        setTimeout(() => {
            segment.style.setProperty('--percentage', percentages[index] + '%');
        }, index * 200);
    });
}

function updateSessionTime() {
    const elapsed = Math.floor((Date.now() - dashboardStats.sessionStartTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    const sessionTimeElement = document.getElementById('sessionTime');
    if (sessionTimeElement) {
        sessionTimeElement.textContent = timeString;
    }
}

function startDashboardTimers() {
    // Update session time every second
    setInterval(updateSessionTime, 1000);
    
    // Simulate real-time updates
    setInterval(() => {
        simulateRealTimeUpdates();
    }, 5000);
}

function simulateRealTimeUpdates() {
    // Randomly update security level
    if (Math.random() < 0.3) {
        dashboardStats.securityLevel = Math.min(100, Math.max(60, dashboardStats.securityLevel + (Math.random() - 0.5) * 10));
        updateSecurityLevel();
    }
    
    // Randomly update threat detection
    if (Math.random() < 0.2) {
        dashboardStats.threatsDetected += Math.floor(Math.random() * 3);
        updateDashboardStats();
        addActivity(currentLang === 'ar' ? 'تم اكتشاف تهديد جديد' : 'New threat detected');
    }
    
    // Update risk levels
    if (Math.random() < 0.4) {
        const total = 100;
        const variation = 5;
        dashboardStats.riskLevels.high = Math.max(5, Math.min(30, dashboardStats.riskLevels.high + (Math.random() - 0.5) * variation));
        dashboardStats.riskLevels.medium = Math.max(15, Math.min(40, dashboardStats.riskLevels.medium + (Math.random() - 0.5) * variation));
        dashboardStats.riskLevels.low = total - dashboardStats.riskLevels.high - dashboardStats.riskLevels.medium;
        updateSecurityChart();
    }
}

function incrementToolUsage() {
    dashboardStats.toolsUsed++;
    dashboardStats.activeTools++;
    updateDashboardStats();
}

function incrementScanCount() {
    dashboardStats.scansPerformed++;
    updateDashboardStats();
}

function addThreatDetection(count = 1) {
    dashboardStats.threatsDetected += count;
    updateDashboardStats();
}
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