class RomanticPersonalAIAssistant {
    constructor() {
        this.messagesContainer = document.getElementById('messagesContainer');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        this.typingIndicator = document.getElementById('typingIndicator');
        
        // Avatar URLs
        this.avatarImage = "Pic.png"; // Default avatar image
        this.avatarImage1 = "Maviya.jpg"; // Default avatar image
        
        this.personalData = {
            personal_details: {
                birthday: "14th September",
                favorite_color: "Green",
                favorite_movie: "Dakta",
                favorite_drama: "Dakta",
                cooking: "No cooking",
                favorite_food: "Biryani",
                brother_name: "Masood Bhaiya",
                father_name: "Mahaboob Basha",
                mother_name: "Sunni Jaan"
            },
            maviya:{
                name: "Maviya",
                loving_relationships: "Something Not define"
            },
            education: {
                primary: "Rayalaseema School (1-8)",
                secondary: "Girls School, Galiveedu (9-10) - PRAVITRA topper",
                college: "RRGR College, Galiveedu (Mechanical) - KERTHINA topper"
            },
            favorites: {
                friends: ["Asmintaj", "Thaiba"],
                fruit: "Watermelon",
                activities: ["Watching movies", "sleeping", "using the phone"],
                books: "Enjoys reading",
                season: "Spring",
                family_preference: "Dad",
                functions: ["Ramzan", "Bakrid"],
                outdoor_games: ["Pita pit", "dekori", "shock and key", "deenjar", "uppu", "nela banda"],
                riding: "Enjoys riding with friends",
                ice_cream: "Butterscotch",
                sweets: ["Mothi Choor Laddu", "Jammun"],
                drink: "Badam drink",
                pet: "Cat",
                milk: "Favorite drink",
                gifts: ["watches", "shoes (size 8)", "caps"],
                dream_car: "Lamborghini",
                bike_logo: "FZ",
                music: "Enjoys listening, doesn't sing",
                sunrise: "Likes it",
                flower: "Rose",
                adventure: "Likes skydiving",
                chocolate: "Snickers",
                biscuit: "Dark Fantasy"
            },
            personality: {
                attitude: "Carefree - doesn't care what others think",
                preferences: "Enjoys surprises",
                food_choice: "Enjoys fish fry"
            },
            routine: {
                sleep_time: "Around 10:30 or 11 PM"
            },
            memory: {
                fond_memory: "Cherishes the memory of Asmintaj going to school, negotiating for dolls during auto rides"
            },
            proposed_relationships: {
                proposal: "Mansoora has received a proposal From Maviya",
                proposal_status: "Not accepted yet",
                proposal_date: "6 August 2025 ",
            },
            romantic_theme: {
                favorite_flower: "Rose",
                romantic_season: "Spring",
                romantic_activities: ["sunrise watching", "movie watching", "surprises"],
                loving_relationships: ["close friends", "family bonds"]
            }
        };

        this.init();
    }

    init() {
        // Ensure DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        console.log('Setting up Romantic Personal AI Assistant...');
        
        // Verify elements exist
        this.messagesContainer = document.getElementById('messagesContainer');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        this.typingIndicator = document.getElementById('typingIndicator');

        if (!this.messageInput || !this.sendButton || !this.messagesContainer) {
            console.error('Required elements not found:', {
                messageInput: !!this.messageInput,
                sendButton: !!this.sendButton,
                messagesContainer: !!this.messagesContainer
            });
            return;
        }

        this.setupEventListeners();
        this.setupRomanticAnimations();
        this.messageInput.focus();
        
        console.log('Romantic Personal AI Assistant initialized with love! 💕');
    }

    setupEventListeners() {
        console.log('Setting up romantic event listeners...');
        
        // Send button click with romantic effects
        this.sendButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Love message send button clicked 💕');
            this.sendRomanticMessage();
        });

        // Enter key press
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                console.log('Romantic Enter key pressed 💖');
                this.sendRomanticMessage();
            }
        });

        // Auto-resize input with romantic effects
        this.messageInput.addEventListener('input', () => {
            this.autoResizeRomanticInput();
            this.animateRomanticInputFocus();
        });

        // Romantic input focus animations
        this.messageInput.addEventListener('focus', () => {
            this.animateRomanticInputFocus();
        });

        this.messageInput.addEventListener('blur', () => {
            this.animateRomanticInputBlur();
        });

        console.log('Romantic event listeners set up with love! 💞');
    }

    setupRomanticAnimations() {
        // Initialize romantic particles
        this.initializeRomanticElements();
        
        // Add romantic entrance animations
        setTimeout(() => {
            const welcomeMessage = document.querySelector('.welcome-message');
            if (welcomeMessage) {
                welcomeMessage.style.animation = 'romanticMessageSlide 1s ease-out';
            }
        }, 700);

        // Start romantic background animations
        this.startRomanticBackgroundEffects();
    }

    initializeRomanticElements() {
        // Animate floating hearts
        const hearts = document.querySelectorAll('.heart');
        hearts.forEach((heart, index) => {
            const size = Math.random() * 0.5 + 1;
            const animationDuration = Math.random() * 10 + 15;
            const delay = Math.random() * 8;
            
            heart.style.fontSize = size + 'rem';
            heart.style.animationDuration = animationDuration + 's';
            heart.style.animationDelay = delay + 's';
        });

        // Animate rose petals
        const petals = document.querySelectorAll('.petal');
        petals.forEach((petal, index) => {
            const animationDuration = Math.random() * 15 + 20;
            const delay = Math.random() * 10;
            
            petal.style.animationDuration = animationDuration + 's';
            petal.style.animationDelay = delay + 's';
        });

        // Animate romantic stars
        const stars = document.querySelectorAll('.star');
        stars.forEach((star, index) => {
            const delay = Math.random() * 3;
            star.style.animationDelay = delay + 's';
        });
    }

    startRomanticBackgroundEffects() {
        // Add romantic mouse tracking effects
        let mouseX = 0, mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
            
            // Create romantic particle trails
            this.createRomanticTrail(e.clientX, e.clientY);
            
            // Move floating elements
            const hearts = document.querySelectorAll('.heart');
            hearts.forEach((heart, index) => {
                const speed = (index + 1) * 0.2;
                const x = mouseX * speed * 8;
                const y = mouseY * speed * 8;
                heart.style.transform = `translate(${x}px, ${y}px) scale(${1 + Math.abs(mouseX) * 0.2})`;
            });
        });
    }

    createRomanticTrail(x, y) {
        const trail = document.createElement('div');
        trail.innerHTML = '💕';
        trail.style.position = 'fixed';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        trail.style.fontSize = '0.8rem';
        trail.style.pointerEvents = 'none';
        trail.style.zIndex = '1000';
        trail.style.animation = 'trailFade 2s ease-out forwards';
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
        }, 2000);
    }

    animateRomanticInputFocus() {
        const userAvatar = document.querySelector('.user-avatar-container');
        if (userAvatar) {
            userAvatar.style.transform = 'scale(1.15)';
            userAvatar.style.transition = 'transform 0.4s ease';
            userAvatar.style.filter = 'brightness(1.3) saturate(1.4)';
        }

        // Add romantic glow to input
        if (this.messageInput) {
            this.messageInput.style.boxShadow = `
                0 0 0 4px rgba(255, 105, 180, 0.4),
                inset 0 3px 6px rgba(255, 192, 203, 0.3),
                0 12px 35px rgba(255, 105, 180, 0.5)`;
        }
    }

    animateRomanticInputBlur() {
        const userAvatar = document.querySelector('.user-avatar-container');
        if (userAvatar) {
            userAvatar.style.transform = 'scale(0)';
            userAvatar.style.filter = 'brightness(0) saturate(0)';
        }
    }

    autoResizeRomanticInput() {
        this.messageInput.style.height = 'auto';
        const newHeight = Math.min(this.messageInput.scrollHeight, 120);
        this.messageInput.style.height = newHeight + 'px';
    }

    sendRomanticMessage() {
        const message = this.messageInput.value.trim();
        
        console.log('Sending romantic message:', message);
        
        if (!message) {
            console.log('Empty message, showing romantic shake animation');
            this.romanticShakeInput();
            return;
        }

        console.log('Processing romantic message:', message);

        // Add user message with romantic animation
        this.addRomanticMessage(message, 'user');
        
        // Clear and reset input with romantic effect
        this.messageInput.value = '';
        this.messageInput.style.height = 'auto';
        
        // Animate romantic send button
        this.animateRomanticSendButton();
        
        // Disable send button temporarily
        this.sendButton.disabled = true;
        this.sendButton.style.opacity = '0.7';
        
        // Show romantic typing indicator
        this.showRomanticTypingIndicator();
        
        // Generate romantic AI response with loving delay
        const responseDelay = 1500 + Math.random() * 2500;
        setTimeout(() => {
            this.hideRomanticTypingIndicator();
            const response = this.generateRomanticResponse(message);
            this.addRomanticMessage(response, 'ai');
            this.sendButton.disabled = false;
            this.sendButton.style.opacity = '1';
            this.messageInput.focus();
        }, responseDelay);
    }

    addRomanticMessage(content, sender) {
        console.log(`Adding romantic ${sender} message:`, content);

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const timestamp = this.getRomanticTimestamp();
        const avatarImage = sender === 'ai' ? this.avatarImage : this.avatarImage1;
        const avatarAlt = sender === 'ai' ? 'Loving AI Assistant' : 'Beloved User';
        
        messageDiv.innerHTML = `
            <div class="message-avatar heart-shaped">
                <div class="heart-border ${sender === 'user' ? 'user-heart' : ''}"></div>
                <img 
                    src="${avatarImage}" 
                    alt="${avatarAlt}" 
                    class="message-avatar-img"
                    loading="lazy"
                    onerror="this.style.display='none'"
                >
                ${sender === 'ai' ? '<div class="romantic-pulse"></div>' : ''}
            </div>
            <div class="message-content romantic-bubble">
                <p>${this.escapeHtml(content)}</p>
                <span class="timestamp romantic-time">${timestamp}</span>
            </div>
        `;

        // Add romantic initial animation state
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(40px) scale(0.8)';
        messageDiv.style.filter = 'blur(8px)';
        
        this.messagesContainer.appendChild(messageDiv);
        
        // Trigger romantic animation after element is added to DOM
        requestAnimationFrame(() => {
            messageDiv.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateY(0) scale(1)';
            messageDiv.style.filter = 'blur(0)';
        });

        // Add romantic sparkle effect
        this.addRomanticSparkleEffect(messageDiv);
        
        this.scrollToBottomRomantically();
        console.log(`Successfully added romantic ${sender} message with love! 💕`);
    }

    addRomanticSparkleEffect(messageElement) {
        setTimeout(() => {
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const sparkle = document.createElement('div');
                    sparkle.innerHTML = '✨';
                    sparkle.style.position = 'absolute';
                    sparkle.style.fontSize = '1rem';
                    sparkle.style.animation = 'sparkleFloat 2s ease-out forwards';
                    sparkle.style.zIndex = '1000';
                    sparkle.style.pointerEvents = 'none';
                    
                    const rect = messageElement.getBoundingClientRect();
                    sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
                    sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
                    
                    document.body.appendChild(sparkle);
                    
                    setTimeout(() => {
                        if (sparkle.parentNode) {
                            sparkle.parentNode.removeChild(sparkle);
                        }
                    }, 2000);
                }, i * 300);
            }
        }, 500);
    }

    animateRomanticSendButton() {
        const ripple = this.sendButton.querySelector('.love-ripple');
        if (ripple) {
            ripple.style.width = '0';
            ripple.style.height = '0';
            
            setTimeout(() => {
                ripple.style.transition = 'width 0.4s, height 0.4s';
                ripple.style.width = '80px';
                ripple.style.height = '80px';
                
                setTimeout(() => {
                    ripple.style.width = '0';
                    ripple.style.height = '0';
                }, 400);
            }, 10);
        }

        // Add romantic button shake
        this.sendButton.style.animation = 'heartSendPulse 0.6s ease-in-out';
        setTimeout(() => {
            this.sendButton.style.animation = '';
        }, 600);
    }

    romanticShakeInput() {
        this.messageInput.classList.add('shake-animation');
        
        // Add romantic hearts around input
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '💔';
                heart.style.position = 'absolute';
                heart.style.fontSize = '1.2rem';
                heart.style.animation = 'romanticShakeHearts 1s ease-out forwards';
                heart.style.zIndex = '1000';
                heart.style.pointerEvents = 'none';
                
                const inputRect = this.messageInput.getBoundingClientRect();
                heart.style.left = (inputRect.left + Math.random() * inputRect.width) + 'px';
                heart.style.top = (inputRect.top - 20) + 'px';
                
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    if (heart.parentNode) {
                        heart.parentNode.removeChild(heart);
                    }
                }, 1000);
            }, i * 100);
        }
        
        setTimeout(() => {
            this.messageInput.classList.remove('shake-animation');
        }, 600);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    generateRomanticResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Birthday
        if (message.includes('birthday') || message.includes('birth') || message.includes('born')) {
            return `🎉💖 Mansoora's birthday is ${this.personalData.personal_details.birthday}! 🌹 A day to celebrate her love and joy! 💝`;
        }
        if (message.includes('propose') || message.includes('proposal') || message.includes('ishq')) {
            return `🎉💖 Maviya proposed on ${this.personalData.proposed_relationships.proposal_date}! 🌹 But Mansoora has not accepted yet 💝`;
        }

        // Family
        if (message.includes('family') || message.includes('father') || message.includes('dad') || message.includes('mother') || message.includes('mom') || message.includes('brother')) {
            if (message.includes('father') || message.includes('dad')) {
                return `👨‍👧💖 Mansoora adores her father ${this.personalData.personal_details.father_name}! 🌹 A bond full of love and magic!`;
            }
            if (message.includes('mother') || message.includes('mom')) {
                return `👩‍👧💖 Mansoora's loving mother ${this.personalData.personal_details.mother_name} nurtures her heart like a rose! 🌺`;
            }
            if (message.includes('brother')) {
                return `👨‍👦💖 Mansoora shares a special bond with her brother ${this.personalData.personal_details.brother_name}! 🌹`;
            }
            return `👨‍👩‍👧‍👦💖 Mansoora's family is a garden of love! 🌺 Her parents and brother surround her with warmth!`;
        }

        // Education
        if (message.includes('education') || message.includes('school') || message.includes('college') || message.includes('study')) {
            return `🎓💖 Mansoora shined at ${this.personalData.education.primary}, ${this.personalData.education.secondary}, and ${this.personalData.education.college}! 🌹 Smart and graceful!`;
        }

        // Friends
        if (message.includes('friend') || message.includes('asmintaj') || message.includes('thaiba')) {
            const friends = this.personalData.favorites.friends.join(' and ');
            return `👭💖 Mansoora's soul sisters ${friends} share priceless memories like ${this.personalData.memory.fond_memory}! 🌹`;
        }

        // Favorite color
        if (message.includes('color') || message.includes('favourite color') || message.includes('favorite color')) {
            return `💚🌹 Mansoora loves ${this.personalData.personal_details.favorite_color} - vibrant, loving, and full of life! 💖`;
        }

        // Roses/flowers
        if (message.includes('rose') || message.includes('flower') || message.includes('roses')) {
            return `🌹💖 Roses are Mansoora's favorite, just like her - elegant and full of love! 🌺`;
        }

        // Season
        if (message.includes('spring') || message.includes('season')) {
            return `🌸💖 Mansoora adores ${this.personalData.favorites.season} - full of life, love, and beauty! 🌹`;
        }

        // Movies
        if (message.includes('movie') || message.includes('drama') || message.includes('film')) {
            return `🎬💖 Mansoora's favorite movie is "${this.personalData.personal_details.favorite_movie}"! 🌹`;
        }

        // Food
        if (message.includes('food') || message.includes('biryani') || message.includes('eat')) {
            return `🍛💖 Mansoora loves ${this.personalData.personal_details.favorite_food} and fish fry! 🌹 Every meal is a celebration!`;
        }

        // Dreams
        if (message.includes('dream') || message.includes('car') || message.includes('lamborghini')) {
            return `🚗💖 Mansoora dreams of her ${this.personalData.favorites.dream_car} and adventures on her ${this.personalData.favorites.bike_logo}! 🌹`;
        }

        // Adventure
        if (message.includes('adventure') || message.includes('skydiving') || message.includes('exciting')) {
            return `🪂💖 Mansoora loves ${this.personalData.favorites.adventure} - brave, elegant, and full of joy! 🌹`;
        }


        // Default romantic responses
        const romanticDefaultResponses = [
            "💕🌹✨ Love u meri jaan! 💕",
            "💖🌸 Tu hona mujay! 💞",
            "💖❤️ I love u Mansoora! 🌹💝",
            "🌙✨ Mera chand, meri sona! 💖💞"
        ];

        
        return romanticDefaultResponses[Math.floor(Math.random() * romanticDefaultResponses.length)];
    }

    showRomanticTypingIndicator() {
        console.log('Showing romantic typing indicator 💕');
        if (this.typingIndicator) {
            this.typingIndicator.classList.add('show');
            this.scrollToBottomRomantically();
        }
    }

    hideRomanticTypingIndicator() {
        console.log('Hiding romantic typing indicator 💖');
        if (this.typingIndicator) {
            this.typingIndicator.classList.remove('show');
        }
    }

    scrollToBottomRomantically() {
        if (this.messagesContainer) {
            setTimeout(() => {
                this.messagesContainer.scrollTo({
                    top: this.messagesContainer.scrollHeight,
                    behavior: 'smooth'
                });
            }, 150);
        }
    }

    getRomanticTimestamp() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes} 💕`;
    }
}

// Initialize romantic assistant when DOM is ready
let romanticAssistantInstance = null;

function initializeRomanticAssistant() {
    console.log('Initializing Romantic AI Assistant with love... 💕');
    
    if (!romanticAssistantInstance) {
        romanticAssistantInstance = new RomanticPersonalAIAssistant();
    }
    
    // Add romantic loading animation to container
    const container = document.querySelector('.chat-container');
    if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(30px) scale(0.95)';
        container.style.filter = 'blur(10px)';
        
        setTimeout(() => {
            container.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0) scale(1)';
            container.style.filter = 'blur(0)';
        }, 200);
    }
}

// Multiple romantic initialization methods
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeRomanticAssistant);
} else {
    setTimeout(initializeRomanticAssistant, 100);
}

// Backup romantic initialization
window.addEventListener('load', () => {
    if (!romanticAssistantInstance) {
        setTimeout(initializeRomanticAssistant, 300);
    }
});

// Add romantic CSS animations dynamically
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes trailFade {
            0% {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
            100% {
                opacity: 0;
                transform: scale(0.3) translateY(-30px);
            }
        }
        
        @keyframes sparkleFloat {
            0% {
                opacity: 1;
                transform: scale(1) translateY(0) rotate(0deg);
            }
            100% {
                opacity: 0;
                transform: scale(1.5) translateY(-40px) rotate(180deg);
            }
        }
        
        @keyframes romanticShakeHearts {
            0% {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
            50% {
                opacity: 1;
                transform: scale(1.3) translateY(-20px);
            }
            100% {
                opacity: 0;
                transform: scale(0.5) translateY(-50px);
            }
        }
    `;
    document.head.appendChild(style);
});

// Romantic interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add romantic click effects
    document.addEventListener('click', (e) => {
        // Create romantic explosion on clicks
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = ['💕', '💖', '💗', '💝', '💞'][Math.floor(Math.random() * 5)];
                heart.style.position = 'fixed';
                heart.style.left = e.clientX + 'px';
                heart.style.top = e.clientY + 'px';
                heart.style.fontSize = '1rem';
                heart.style.pointerEvents = 'none';
                heart.style.zIndex = '1000';
                heart.style.animation = 'romanticClickHeart 1.5s ease-out forwards';
                
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    if (heart.parentNode) {
                        heart.parentNode.removeChild(heart);
                    }
                }, 1500);
            }, i * 100);
        }
    });
    
    // Add the romantic click animation
    const clickStyle = document.createElement('style');
    clickStyle.textContent = `
        @keyframes romanticClickHeart {
            0% {
                opacity: 1;
                transform: scale(1) translate(-50%, -50%) rotate(0deg);
            }
            100% {
                opacity: 0;
                transform: scale(2) translate(${(Math.random() - 0.5) * 100}px, ${-50 - Math.random() * 50}px) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(clickStyle);
});

console.log('Romantic Personal AI Assistant script loaded with love! 💕✨🌹');