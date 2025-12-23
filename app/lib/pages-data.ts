export interface PageData {
  id: number
  type: 'postcard' | 'question' | 'collage' | 'moonlight' | 'message' | 'memory' | 'interactive' | 'closing'
  content: any
}

export const pagesData: PageData[] = [
  {
    id: 1,
    type: 'postcard',
    content: {
      title: 'i text a post card',
      to: 'You',
      from: 'Me',
      illustration: 'flowers',
    },
  },
  {
    id: 2,
    type: 'question',
    content: {
      text: 'Did It Go Through?',
      questionMarks: 3,
    },
  },
  {
    id: 3,
    type: 'collage',
    content: {
      title: 'sending all my love to you',
      photos: [
        { id: 1, position: 'top-left' },
        { id: 2, position: 'top-center' },
        { id: 3, position: 'top-right' },
        { id: 4, position: 'middle-left' },
        { id: 5, position: 'middle-right' },
        { id: 6, position: 'bottom-right' },
      ],
      style: 'grunge',
    },
  },
  {
    id: 4,
    type: 'moonlight',
    content: {
      title: 'You Are the Moonlight',
      subtitle: 'of my life',
      bottomText: 'EVERY NIGHT',
      photos: [
        { id: 1, position: 'top-left' },
        { id: 2, position: 'top-right' },
        { id: 3, position: 'bottom-center' },
      ],
    },
  },
  {
    id: 5,
    type: 'memory',
    content: {
      photos: [
        { id: 1, caption: 'Our first date' },
        { id: 2, caption: 'Laughing together' },
      ],
      style: 'polaroid',
    },
  },
  {
    id: 6,
    type: 'message',
    content: {
      title: 'Maafkan Aku...',
      paragraphs: [
        'Seperti bunga-bunga yang mekar dengan indahnya,',
        'aku berharap permintaan maafku bisa diterima',
        'dengan hati yang lapang.',
        '',
        'Maafkan semua kesalahanku,',
        'semua kata-kata yang menyakitkan,',
        'dan semua waktu yang terbuang sia-sia.',
      ],
    },
  },
  {
    id: 7,
    type: 'memory',
    content: {
      photos: [{ id: 1 }, { id: 2 }, { id: 3 }],
      style: 'grid',
    },
  },
  {
    id: 8,
    type: 'message',
    content: {
      title: 'Aku Menyadari...',
      paragraphs: [
        'Bahwa hubungan kita lebih berharga',
        'dari apapun di dunia ini.',
        '',
        'Aku akan berusaha lebih baik lagi,',
        'lebih perhatian, dan lebih memahami',
        'perasaanmu.',
      ],
    },
  },
  {
    id: 9,
    type: 'memory',
    content: {
      photos: [{ id: 1 }, { id: 2 }],
      style: 'washi-tape',
    },
  },
  {
    id: 10,
    type: 'message',
    content: {
      title: 'Janji Aku',
      paragraphs: [
        'Aku akan lebih perhatian',
        'Aku akan lebih sayang sama kamu',
        'Aku akan selalu ada untuk kamu',
        'Aku akan membuat kamu bahagia',
      ],
      style: 'list',
    },
  },
  {
    id: 11,
    type: 'memory',
    content: {
      photos: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      style: 'doodle',
    },
  },
  {
    id: 12,
    type: 'message',
    content: {
      quote: '"Maaf adalah bunga yang mekar di taman hati"',
      author: '— Untuk Kamu',
    },
  },
  {
    id: 13,
    type: 'memory',
    content: {
      photos: [{ id: 1 }, { id: 2 }],
      style: 'vintage',
    },
  },
  {
    id: 14,
    type: 'message',
    content: {
      title: 'Terima Kasih',
      paragraphs: [
        'Terima kasih sudah mau menerima maafku.',
        'Terima kasih sudah tetap ada di sisiku.',
        'Terima kasih untuk semua kenangan indah.',
      ],
    },
  },
  {
    id: 15,
    type: 'memory',
    content: {
      photos: [{ id: 1 }, { id: 2 }, { id: 3 }],
      style: 'collage',
    },
  },
  {
    id: 16,
    type: 'message',
    content: {
      title: 'Dengan Sepenuh Hati',
      paragraphs: [
        'Aku menulis ini dengan sepenuh hatiku,',
        'dengan harapan bahwa kita bisa',
        'melanjutkan perjalanan kita bersama.',
      ],
    },
  },
  {
    id: 17,
    type: 'memory',
    content: {
      photos: [{ id: 1 }, { id: 2 }],
      style: 'quote',
    },
  },
  {
    id: 18,
    type: 'message',
    content: {
      title: 'Aku Sayang Kamu',
      paragraphs: [
        'Lebih dari apapun di dunia ini.',
        'Kamu adalah cahaya dalam hidupku.',
      ],
    },
  },
  {
    id: 19,
    type: 'memory',
    content: {
      photos: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      style: 'mixed',
    },
  },
  {
    id: 20,
    type: 'message',
    content: {
      title: 'Selalu',
      paragraphs: [
        'Aku akan selalu ada untuk kamu.',
        'Aku akan selalu sayang kamu.',
        'Aku akan selalu berusaha untuk kamu.',
      ],
    },
  },
  {
    id: 21,
    type: 'interactive',
    content: {
      buttonText: 'Terima Maaf?',
      message: 'Klik untuk melanjutkan...',
    },
  },
  {
    id: 22,
    type: 'closing',
    content: {
      title: 'Terima Kasih',
      subtitle: 'sudah membaca...',
      message: 'Dibuat dengan sepenuh hati ❤️',
    },
  },
]

export const totalPages = pagesData.length

