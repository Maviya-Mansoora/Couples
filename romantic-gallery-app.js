class RomanticImageGallery {
    constructor() {
        this.images = [];
        this.currentViewIndex = 0;
        this.currentFilter = 'all';
        this.searchTerm = '';
        this.viewMode = 'grid'; // grid, list, large
        this.uploadedFiles = [];
        
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
        console.log('Setting up Romantic Image Gallery... 💕');
        
        // Initialize DOM elements
        this.galleryGrid = document.getElementById('galleryGrid');
        this.uploadModal = document.getElementById('uploadModal');
        this.imageViewerModal = document.getElementById('imageViewerModal');
        this.loadingOverlay = document.getElementById('loadingOverlay');
        this.toastContainer = document.getElementById('toastContainer');
        this.searchInput = document.getElementById('searchInput');
        this.fileInput = document.getElementById('fileInput');
        this.uploadArea = document.getElementById('uploadArea');
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Initialize romantic animations
        this.setupRomanticAnimations();
        
        // Load saved images from localStorage
        this.loadSavedImages();
        
        // Update statistics
        this.updateStatistics();
        
        console.log('Romantic Image Gallery initialized with love! 💖');
    }

    setupEventListeners() {
        // File input change
        this.fileInput.addEventListener('change', (e) => this.handleFileSelect(e));
        
        // Upload area drag and drop
        this.uploadArea.addEventListener('dragover', (e) => this.handleDragOver(e));
        this.uploadArea.addEventListener('dragleave', (e) => this.handleDragLeave(e));
        this.uploadArea.addEventListener('drop', (e) => this.handleDrop(e));
        
        // Search functionality
        this.searchInput.addEventListener('input', (e) => this.handleSearch(e));
        
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilterChange(e));
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeydown(e));
        
        // Window resize
        window.addEventListener('resize', () => this.handleResize());
        
        console.log('Event listeners set up with love! 💞');
    }

    setupRomanticAnimations() {
        // Initialize romantic particles
        this.initializeRomanticElements();
        
        // Start romantic background effects
        this.startRomanticBackgroundEffects();
        
        // Add romantic entrance animations
        setTimeout(() => {
            const galleryContainer = document.querySelector('.gallery-container');
            if (galleryContainer) {
                galleryContainer.style.animation = 'slideInFromBottom 1s ease-out';
            }
        }, 300);
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

    // File handling methods
    handleFileSelect(event) {
        const files = Array.from(event.target.files);
        this.processFiles(files);
    }

    handleDragOver(event) {
        event.preventDefault();
        this.uploadArea.classList.add('drag-over');
    }

    handleDragLeave(event) {
        event.preventDefault();
        this.uploadArea.classList.remove('drag-over');
    }

    handleDrop(event) {
        event.preventDefault();
        this.uploadArea.classList.remove('drag-over');
        
        const files = Array.from(event.dataTransfer.files);
        this.processFiles(files);
    }

    processFiles(files) {
        const validFiles = files.filter(file => {
            const isValidType = file.type.startsWith('image/');
            const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB
            
            if (!isValidType) {
                this.showToast('Please select only image files 📸', 'error');
                return false;
            }
            
            if (!isValidSize) {
                this.showToast('File size must be less than 10MB 💔', 'error');
                return false;
            }
            
            return true;
        });

        if (validFiles.length === 0) return;

        this.uploadedFiles = validFiles;
        this.showUploadPreview(validFiles);
    }

    showUploadPreview(files) {
        const previewGrid = document.getElementById('previewGrid');
        const uploadPreview = document.getElementById('uploadPreview');
        
        previewGrid.innerHTML = '';
        
        files.forEach((file, index) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const previewItem = document.createElement('div');
                previewItem.className = 'preview-item';
                previewItem.innerHTML = `
                    <img src="${e.target.result}" alt="Preview ${index + 1}">
                    <button class="preview-remove" onclick="gallery.removePreviewItem(${index})">×</button>
                `;
                previewGrid.appendChild(previewItem);
            };
            reader.readAsDataURL(file);
        });
        
        uploadPreview.style.display = 'block';
        document.getElementById('uploadArea').style.display = 'none';
    }

    removePreviewItem(index) {
        this.uploadedFiles.splice(index, 1);
        
        if (this.uploadedFiles.length === 0) {
            this.clearUploadPreview();
        } else {
            this.showUploadPreview(this.uploadedFiles);
        }
    }

    clearUploadPreview() {
        document.getElementById('uploadPreview').style.display = 'none';
        document.getElementById('uploadArea').style.display = 'block';
        this.uploadedFiles = [];
        this.fileInput.value = '';
    }

    processUploadedImages() {
        if (this.uploadedFiles.length === 0) return;

        this.showLoading('Processing your beautiful memories...');
        
        let processedCount = 0;
        const totalFiles = this.uploadedFiles.length;
        
        this.uploadedFiles.forEach((file, index) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageData = {
                    id: Date.now() + index,
                    src: e.target.result,
                    name: file.name,
                    size: file.size,
                    uploadDate: new Date().toISOString(),
                    favorite: false,
                    tags: []
                };
                
                this.images.push(imageData);
                processedCount++;
                
                if (processedCount === totalFiles) {
                    this.saveImages();
                    this.renderGallery();
                    this.updateStatistics();
                    this.hideLoading();
                    this.closeUploadModal();
                    this.showToast(`Successfully added ${totalFiles} beautiful memories! 💕`, 'success');
                }
            };
            reader.readAsDataURL(file);
        });
    }

    // Gallery rendering methods
    renderGallery() {
        const filteredImages = this.getFilteredImages();
        
        if (filteredImages.length === 0) {
            this.showEmptyState();
            return;
        }
        
        this.hideEmptyState();
        this.galleryGrid.innerHTML = '';
        
        filteredImages.forEach((image, index) => {
            const imageCard = this.createImageCard(image, index);
            this.galleryGrid.appendChild(imageCard);
        });
        
        // Add staggered animation
        this.animateImageCards();
    }

    createImageCard(image, index) {
        const card = document.createElement('div');
        card.className = 'image-card';
        card.dataset.imageId = image.id;
        card.dataset.category = image.favorite ? 'favorites' : 'regular';
        
        const uploadDate = new Date(image.uploadDate);
        const timeAgo = this.getTimeAgo(uploadDate);
        
        card.innerHTML = `
            <div class="image-wrapper">
                <img src="${image.src}" alt="${image.name}" loading="lazy">
                <div class="image-overlay">
                    <div class="overlay-content">
                        <h4>${this.truncateText(image.name, 20)}</h4>
                        <div class="overlay-icons">
                            <button class="overlay-icon" onclick="gallery.viewImage(${index})" title="View">
                                👁️
                            </button>
                            <button class="overlay-icon" onclick="gallery.toggleFavorite(${image.id})" title="Favorite">
                                ${image.favorite ? '💖' : '🤍'}
                            </button>
                            <button class="overlay-icon" onclick="gallery.downloadImage(${image.id})" title="Download">
                                ⬇️
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="image-info">
                <h3 class="image-title">${this.truncateText(image.name, 30)}</h3>
                <div class="image-meta">
                    <span class="image-date">${timeAgo}</span>
                    <span class="favorite-icon ${image.favorite ? 'favorited' : ''}" onclick="gallery.toggleFavorite(${image.id})">
                        ${image.favorite ? '💖' : '🤍'}
                    </span>
                </div>
            </div>
        `;
        
        // Add click handler for viewing
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.overlay-icon') && !e.target.closest('.favorite-icon')) {
                this.viewImage(index);
            }
        });
        
        return card;
    }

    animateImageCards() {
        const cards = document.querySelectorAll('.image-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px) scale(0.9)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
        });
    }

    getFilteredImages() {
        let filtered = [...this.images];
        
        // Apply filter
        if (this.currentFilter === 'favorites') {
            filtered = filtered.filter(img => img.favorite);
        } else if (this.currentFilter === 'recent') {
            const oneWeekAgo = new Date();
            oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
            filtered = filtered.filter(img => new Date(img.uploadDate) > oneWeekAgo);
        }
        
        // Apply search
        if (this.searchTerm) {
            filtered = filtered.filter(img => 
                img.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                (img.tags && img.tags.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase())))
            );
        }
        
        // Sort by upload date (newest first)
        filtered.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
        
        return filtered;
    }

    // Image viewing methods
    viewImage(index) {
        const filteredImages = this.getFilteredImages();
        this.currentViewIndex = index;
        
        const image = filteredImages[index];
        if (!image) return;
        
        this.showImageViewer(image, index, filteredImages.length);
    }

    showImageViewer(image, index, total) {
        const modal = this.imageViewerModal;
        const viewerImage = document.getElementById('viewerImage');
        const viewerTitle = document.getElementById('viewerTitle');
        const viewerDate = document.getElementById('viewerDate');
        const imageIndex = document.getElementById('imageIndex');
        const totalImages = document.getElementById('totalImages');
        const favoriteBtn = document.getElementById('favoriteBtn');
        const imageLoader = document.getElementById('imageLoader');
        
        // Show loader
        imageLoader.style.display = 'block';
        viewerImage.style.opacity = '0';
        
        // Update viewer content
        viewerTitle.textContent = image.name;
        viewerDate.textContent = this.formatDate(new Date(image.uploadDate));
        imageIndex.textContent = index + 1;
        totalImages.textContent = total;
        
        // Update favorite button
        favoriteBtn.innerHTML = `<span class="favorite-icon">${image.favorite ? '💖' : '🤍'}</span>`;
        favoriteBtn.onclick = () => this.toggleFavorite(image.id);
        
        // Load image
        viewerImage.onload = () => {
            imageLoader.style.display = 'none';
            viewerImage.style.opacity = '1';
        };
        viewerImage.src = image.src;
        viewerImage.alt = image.name;
        
        // Show modal
        modal.style.display = 'flex';
        modal.classList.add('fade-in');
        document.body.style.overflow = 'hidden';
        
        // Add sparkle effect
        this.addViewerSparkleEffect();
    }

    viewPreviousImage() {
        const filteredImages = this.getFilteredImages();
        if (this.currentViewIndex > 0) {
            this.currentViewIndex--;
            this.showImageViewer(filteredImages[this.currentViewIndex], this.currentViewIndex, filteredImages.length);
        }
    }

    viewNextImage() {
        const filteredImages = this.getFilteredImages();
        if (this.currentViewIndex < filteredImages.length - 1) {
            this.currentViewIndex++;
            this.showImageViewer(filteredImages[this.currentViewIndex], this.currentViewIndex, filteredImages.length);
        }
    }

    closeImageViewer() {
        this.imageViewerModal.style.display = 'none';
        document.body.style.overflow = '';
    }

    addViewerSparkleEffect() {
        const viewer = document.querySelector('.viewer-image-wrapper');
        if (!viewer) return;
        
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.innerHTML = '✨';
                sparkle.style.position = 'absolute';
                sparkle.style.fontSize = '1.5rem';
                sparkle.style.animation = 'sparkleFloat 3s ease-out forwards';
                sparkle.style.zIndex = '1000';
                sparkle.style.pointerEvents = 'none';
                
                const rect = viewer.getBoundingClientRect();
                sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
                sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
                
                document.body.appendChild(sparkle);
                
                setTimeout(() => {
                    if (sparkle.parentNode) {
                        sparkle.parentNode.removeChild(sparkle);
                    }
                }, 3000);
            }, i * 500);
        }
    }

    // Image actions
    toggleFavorite(imageId) {
        const image = this.images.find(img => img.id === imageId);
        if (image) {
            image.favorite = !image.favorite;
            this.saveImages();
            this.renderGallery();
            this.updateStatistics();
            
            const message = image.favorite ? 
                'Added to favorites! 💖' : 
                'Removed from favorites 🤍';
            this.showToast(message, 'info');
        }
    }

    downloadImage(imageId) {
        const image = this.images.find(img => img.id === imageId);
        if (image) {
            const link = document.createElement('a');
            link.href = image.src;
            link.download = image.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            this.showToast('Image downloaded! 📥', 'success');
        }
    }

    deleteImage() {
        const filteredImages = this.getFilteredImages();
        const image = filteredImages[this.currentViewIndex];
        
        if (image && confirm('Are you sure you want to delete this beautiful memory? 💔')) {
            const originalIndex = this.images.findIndex(img => img.id === image.id);
            if (originalIndex !== -1) {
                this.images.splice(originalIndex, 1);
                this.saveImages();
                this.renderGallery();
                this.updateStatistics();
                this.closeImageViewer();
                this.showToast('Memory deleted 🗑️', 'info');
            }
        }
    }

    // Filter and search methods
    handleFilterChange(event) {
        const filter = event.target.dataset.filter;
        this.currentFilter = filter;
        
        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        
        // Re-render gallery
        this.renderGallery();
        
        // Add romantic effect
        this.addFilterChangeEffect();
    }

    handleSearch(event) {
        this.searchTerm = event.target.value;
        
        // Debounce search
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
            this.renderGallery();
        }, 300);
    }

    addFilterChangeEffect() {
        // Create romantic hearts effect
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = ['💖', '💕', '💗', '💝'][Math.floor(Math.random() * 4)];
                heart.style.position = 'fixed';
                heart.style.left = Math.random() * window.innerWidth + 'px';
                heart.style.top = '100vh';
                heart.style.fontSize = '1.5rem';
                heart.style.pointerEvents = 'none';
                heart.style.zIndex = '1000';
                heart.style.animation = 'filterHeartFloat 3s ease-out forwards';
                
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    if (heart.parentNode) {
                        heart.parentNode.removeChild(heart);
                    }
                }, 3000);
            }, i * 200);
        }
    }

    // View mode methods
    toggleGalleryView() {
        const viewModes = ['grid', 'list', 'large'];
        const currentIndex = viewModes.indexOf(this.viewMode);
        const nextIndex = (currentIndex + 1) % viewModes.length;
        this.viewMode = viewModes[nextIndex];
        
        // Update grid class
        this.galleryGrid.className = `gallery-grid ${this.viewMode}-view`;
        
        // Update button icon and text
        const viewIcon = document.getElementById('viewIcon');
        const btnText = document.querySelector('.gallery-view-btn .btn-text');
        
        switch (this.viewMode) {
            case 'grid':
                viewIcon.textContent = '🔳';
                btnText.textContent = 'Grid View';
                break;
            case 'list':
                viewIcon.textContent = '📋';
                btnText.textContent = 'List View';
                break;
            case 'large':
                viewIcon.textContent = '🖼️';
                btnText.textContent = 'Large View';
                break;
        }
        
        this.showToast(`Switched to ${this.viewMode} view! ✨`, 'info');
    }

    // Modal methods
    openUploadModal() {
        this.uploadModal.style.display = 'flex';
        this.uploadModal.classList.add('fade-in');
        document.body.style.overflow = 'hidden';
    }

    closeUploadModal() {
        this.uploadModal.style.display = 'none';
        document.body.style.overflow = '';
        this.clearUploadPreview();
    }

    // Loading methods
    showLoading(message = 'Processing your beautiful memories...') {
        const loadingText = document.querySelector('.loading-text');
        if (loadingText) {
            loadingText.textContent = message;
        }
        this.loadingOverlay.style.display = 'flex';
    }

    hideLoading() {
        this.loadingOverlay.style.display = 'none';
    }

    // Toast notification methods
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icons = {
            success: '💚',
            error: '💔',
            info: '💡',
            warning: '⚠️'
        };
        
        toast.innerHTML = `
            <div class="toast-content">
                <span class="toast-icon">${icons[type] || icons.info}</span>
                <span class="toast-message">${message}</span>
                <button class="toast-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;
        
        this.toastContainer.appendChild(toast);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (toast.parentElement) {
                toast.remove();
            }
        }, 5000);
    }

    // State management methods
    showEmptyState() {
        document.getElementById('emptyState').style.display = 'block';
        this.galleryGrid.style.display = 'none';
    }

    hideEmptyState() {
        document.getElementById('emptyState').style.display = 'none';
        this.galleryGrid.style.display = 'grid';
    }

    updateStatistics() {
        const imageCount = document.getElementById('imageCount');
        const favoriteCount = document.getElementById('favoriteCount');
        
        if (imageCount) {
            imageCount.textContent = this.images.length;
        }
        
        if (favoriteCount) {
            favoriteCount.textContent = this.images.filter(img => img.favorite).length;
        }
    }

    // Data persistence methods
    saveImages() {
        try {
            localStorage.setItem('romanticGalleryImages', JSON.stringify(this.images));
        } catch (error) {
            console.error('Failed to save images:', error);
            this.showToast('Failed to save images 💔', 'error');
        }
    }

    loadSavedImages() {
        try {
            const saved = localStorage.getItem('romanticGalleryImages');
            if (saved) {
                this.images = JSON.parse(saved);
                this.renderGallery();
            }
        } catch (error) {
            console.error('Failed to load saved images:', error);
            this.images = [];
        }
    }

    // Keyboard navigation
    handleKeydown(event) {
        if (this.imageViewerModal.style.display === 'flex') {
            switch (event.key) {
                case 'ArrowLeft':
                    this.viewPreviousImage();
                    break;
                case 'ArrowRight':
                    this.viewNextImage();
                    break;
                case 'Escape':
                    this.closeImageViewer();
                    break;
                case 'f':
                case 'F':
                    const filteredImages = this.getFilteredImages();
                    const currentImage = filteredImages[this.currentViewIndex];
                    if (currentImage) {
                        this.toggleFavorite(currentImage.id);
                    }
                    break;
                case 'd':
                case 'D':
                    this.deleteImage();
                    break;
            }
        } else {
            switch (event.key) {
                case 'Escape':
                    if (this.uploadModal.style.display === 'flex') {
                        this.closeUploadModal();
                    }
                    break;
                case '/':
                    event.preventDefault();
                    this.searchInput.focus();
                    break;
            }
        }
    }

    // Responsive handling
    handleResize() {
        // Adjust grid layout if needed
        // This could be expanded for more responsive features
    }

    // Utility methods
    truncateText(text, maxLength) {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    }

    formatDate(date) {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    getTimeAgo(date) {
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) {
            const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
            if (diffHours === 0) {
                const diffMinutes = Math.floor(diffTime / (1000 * 60));
                return diffMinutes <= 1 ? 'Just now' : `${diffMinutes} minutes ago`;
            }
            return diffHours === 1 ? '1 hour ago' : `${diffHours} hours ago`;
        } else if (diffDays === 1) {
            return 'Yesterday';
        } else if (diffDays < 7) {
            return `${diffDays} days ago`;
        } else if (diffDays < 30) {
            const weeks = Math.floor(diffDays / 7);
            return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
        } else if (diffDays < 365) {
            const months = Math.floor(diffDays / 30);
            return months === 1 ? '1 month ago' : `${months} months ago`;
        } else {
            const years = Math.floor(diffDays / 365);
            return years === 1 ? '1 year ago' : `${years} years ago`;
        }
    }
}

// Global functions for HTML onclick handlers
let gallery;

function openUploadModal() {
    gallery.openUploadModal();
}

function closeUploadModal() {
    gallery.closeUploadModal();
}

function toggleGalleryView() {
    gallery.toggleGalleryView();
}

function clearUploadPreview() {
    gallery.clearUploadPreview();
}

function processUploadedImages() {
    gallery.processUploadedImages();
}

function closeImageViewer() {
    gallery.closeImageViewer();
}

function viewPreviousImage() {
    gallery.viewPreviousImage();
}

function viewNextImage() {
    gallery.viewNextImage();
}

function toggleFavorite(imageId) {
    gallery.toggleFavorite(imageId);
}

function downloadImage(imageId) {
    gallery.downloadImage(imageId);
}

function deleteImage() {
    gallery.deleteImage();
}

function closeMediaPreview() {
    // Legacy function for compatibility
    closeImageViewer();
}

// Initialize the gallery when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    gallery = new RomanticImageGallery();
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
        
        @keyframes filterHeartFloat {
            0% {
                opacity: 1;
                transform: translateY(0) scale(1) rotate(0deg);
            }
            100% {
                opacity: 0;
                transform: translateY(-100vh) scale(1.5) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
});

console.log('Romantic Image Gallery script loaded with love! 💕✨🌹');