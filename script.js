// 3D Enhanced Password Toggle
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');
    const toggleBtn = document.querySelector('.toggle-password-3d');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');

        // 3D animation
        toggleBtn.style.transform = 'translateY(-50%) translateZ(20px) scale(1.2) rotateY(180deg)';
        setTimeout(() => {
            toggleBtn.style.transform = 'translateY(-50%) translateZ(15px) scale(1.1)';
        }, 200);
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');

        // 3D animation
        toggleBtn.style.transform = 'translateY(-50%) translateZ(20px) scale(1.2) rotateY(-180deg)';
        setTimeout(() => {
            toggleBtn.style.transform = 'translateY(-50%) translateZ(5px) scale(1)';
        }, 200);
    }
}

// 3D Form Registration (placeholder for future implementation)
function showRegister() {
    showNotification('Registration form coming soon with amazing 3D effects!', 'info');
}

function showLogin() {
    // Already on login form
    showNotification('You are already on the login form!', 'info');
}

// 3D Enhanced Form Validation and Submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation with 3D feedback
    if (!email || !password) {
        showNotification('Please fill in all fields', 'error');
        shakeForm();
        return;
    }

    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        shakeInput(document.getElementById('email'));
        return;
    }

    // 3D Login process simulation
    const loginBtn = document.querySelector('.btn-3d');
    const originalText = loginBtn.innerHTML;

    // 3D loading animation
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Signing in...</span>';
    loginBtn.disabled = true;
    loginBtn.style.transform = 'translateZ(10px) translateY(-5px) scale(0.95)';

    setTimeout(() => {
        showNotification('🎉 Login successful! Welcome to your magical world!', 'success');
        loginBtn.innerHTML = originalText;
        loginBtn.disabled = false;
        loginBtn.style.transform = '';

        // Success animation
        successAnimation();

        console.log('Login attempt:', { email, password });
    }, 2000);
});

// 3D Social Login Handlers
document.querySelectorAll('.social-btn-3d').forEach(btn => {
    btn.addEventListener('click', function() {
        const platform = this.className.includes('google') ? 'Google' :
                         this.className.includes('facebook') ? 'Facebook' :
                         this.className.includes('twitter') ? 'Twitter' :
                         this.className.includes('github') ? 'GitHub' : 'Social';

        // 3D click animation
        this.style.transform = 'translateZ(25px) translateY(-12px) rotateX(15deg) scale(1.15)';

        showNotification(`🚀 Redirecting to ${platform} login...`, 'info');

        setTimeout(() => {
            this.style.transform = '';
            console.log(`${platform} login initiated`);
        }, 800);
    });
});

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 3D Enhanced Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification-3d');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create 3D notification element
    const notification = document.createElement('div');
    notification.className = `notification-3d ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 30px;
        right: 30px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        border-radius: 20px;
        padding: 20px 25px;
        display: flex;
        align-items: center;
        gap: 15px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        max-width: 400px;
        border-left: 4px solid ${getNotificationColor(type)};
        transform: translateX(500px) rotateY(45deg);
        transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        color: #1e293b;
        font-weight: 500;
    `;

    notification.innerHTML = `
        <i class="fas ${getNotificationIcon(type)}" style="color: ${getNotificationColor(type)}; font-size: 1.2rem;"></i>
        <span style="flex: 1;">${message}</span>
        <button onclick="this.parentElement.remove()" style="
            background: none;
            border: none;
            color: #64748b;
            cursor: pointer;
            padding: 8px;
            border-radius: 50%;
            transition: all 0.3s ease;
            font-size: 1rem;
        ">
            <i class="fas fa-times"></i>
        </button>
    `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0) rotateY(0deg)';
    }, 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.transform = 'translateX(500px) rotateY(-45deg)';
            setTimeout(() => notification.remove(), 800);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'fa-check-circle';
        case 'error': return 'fa-exclamation-circle';
        case 'warning': return 'fa-exclamation-triangle';
        default: return 'fa-info-circle';
    }
}

function getNotificationColor(type) {
    switch (type) {
        case 'success': return '#10b981';
        case 'error': return '#ef4444';
        case 'warning': return '#f59e0b';
        default: return '#3b82f6';
    }
}

// 3D Input Animation Enhancements
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        const container = this.closest('.input-container-3d');
        if (container) {
            container.classList.add('focused');

            // 3D focus animation
            this.style.transform = 'translateZ(15px) translateY(-8px)';

            // Create magical sparkle effect
            createSparkleEffect(container);
        }
    });

    input.addEventListener('blur', function() {
        const container = this.closest('.input-container-3d');
        if (container) {
            container.classList.remove('focused');
            this.style.transform = '';
        }
    });

    // 3D Hover effects
    input.addEventListener('mouseenter', function() {
        if (this !== document.activeElement) {
            this.style.transform = 'translateZ(10px) translateY(-5px)';
        }
    });

    input.addEventListener('mouseleave', function() {
        if (this !== document.activeElement) {
            this.style.transform = '';
        }
    });
});

// 3D Animation Helper Functions
function shakeForm() {
    const card = document.querySelector('.login-card-3d');
    card.style.animation = 'shake 0.6s ease-in-out';
    setTimeout(() => {
        card.style.animation = '';
    }, 600);
}

function shakeInput(input) {
    const container = input.closest('.input-container-3d');
    if (container) {
        container.style.animation = 'shakeInput 0.6s ease-in-out';
        setTimeout(() => {
            container.style.animation = '';
        }, 600);
    }
}

function successAnimation() {
    const card = document.querySelector('.login-card-3d');
    card.style.animation = 'successPulse 1s ease-in-out';
    setTimeout(() => {
        card.style.animation = '';
    }, 1000);
}

function createSparkleEffect(container) {
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: linear-gradient(45deg, #a78bfa, #c084fc);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10;
            animation: sparkle 1s ease-out forwards;
        `;

        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';

        container.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1000);
    }
}

// Add CSS animations for JavaScript effects
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: rotateX(5deg) rotateY(-5deg) translateX(0); }
        25% { transform: rotateX(5deg) rotateY(-5deg) translateX(-10px); }
        75% { transform: rotateX(5deg) rotateY(-5deg) translateX(10px); }
    }

    @keyframes shakeInput {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }

    @keyframes successPulse {
        0% { transform: rotateX(5deg) rotateY(-5deg) scale(1); }
        50% { transform: rotateX(0deg) rotateY(0deg) scale(1.05); }
        100% { transform: rotateX(5deg) rotateY(-5deg) scale(1); }
    }

    @keyframes sparkle {
        0% {
            transform: translateY(0) scale(0);
            opacity: 1;
        }
        50% {
            transform: translateY(-20px) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-40px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 3D Initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌟 3D STUNNING LOGIN FORM LOADED!');

    // 3D entrance animation
    const loginCard = document.querySelector('.login-card-3d');
    if (loginCard) {
        loginCard.style.opacity = '0';
        loginCard.style.transform = 'rotateX(45deg) rotateY(45deg) translateY(100px) scale(0.8)';

        setTimeout(() => {
            loginCard.style.transition = 'all 1.2s cubic-bezier(0.23, 1, 0.32, 1)';
            loginCard.style.opacity = '1';
            loginCard.style.transform = 'rotateX(5deg) rotateY(-5deg) translateY(0px) scale(1)';
        }, 200);
    }

    // Initialize 3D mouse tracking
    initMouseTracking();

    console.log('✨ All 3D effects initialized!');
});

// 3D Mouse Tracking Effect
function initMouseTracking() {
    const card = document.querySelector('.login-card-3d');
    const container = document.querySelector('.main-container');

    if (!card || !container) return;

    container.addEventListener('mousemove', function(e) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / centerY * 10;
        const rotateY = (x - centerX) / centerX * 10;

        card.style.transform = `rotateX(${5 - rotateX}deg) rotateY(${-5 + rotateY}deg)`;
    });

    container.addEventListener('mouseleave', function() {
        card.style.transform = 'rotateX(5deg) rotateY(-5deg)';
    });
}

// Enhanced Keyboard Shortcuts
document.addEventListener('keydown', function(e) {
    // Enter key to submit form
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
        const form = e.target.closest('form');
        if (form) {
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.click();
            }
        }
    }

    // Escape key to clear notifications
    if (e.key === 'Escape') {
        const notifications = document.querySelectorAll('.notification-3d');
        notifications.forEach(notification => {
            notification.style.transform = 'translateX(500px) rotateY(-45deg)';
            setTimeout(() => notification.remove(), 800);
        });
    }
});

// 3D Parallax Effect for Geometric Shapes
document.addEventListener('mousemove', function(e) {
    const shapes = document.querySelectorAll('.shape-3d');
    const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.3;
        const x = mouseX * speed * 30;
        const y = mouseY * speed * 30;

        shape.style.transform += ` translate(${x}px, ${y}px)`;
    });
});
