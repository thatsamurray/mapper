module.exports = {
	purge: {
		preserveHtmlElements: true,
		content: ['./src/**/*.html'],
	  },
  darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		fontSize: {
			xs: ['1.1rem', '1.4rem'],
			sm: ['1.2rem', '1.55rem'],
			base: ['1.35rem', '1.7rem'],
			lg: ['1.55rem', '1.9rem'],
			xl: ['1.8rem', '2.15rem'],
			'2xl': ['2rem', '2.4rem'],
			'3xl': ['2.2rem', '2.55rem'],
			'4xl': ['2.35rem', '2.7rem'],
			'5xl': ['2.55rem', '2.9rem'],
			'6xl': ['2.8rem', '3.15rem'],
			'7xl': ['3rem', '3.4rem'],
			'8xl': ['3.2rem', '3.55rem'],
			'9xl': ['3.35rem', '3.7rem'],
		  },
		colors: {
			cl__first: 'var(--cl-first)',
			cl__second: 'var(--cl-second)',
			cl__third: 'var(--cl-third)',
			cl__fourth: 'var(--cl-fourth)',
			cl__utility_primary: 'var(--cl-utility-primary)',
			cl__utility_secondary: 'var(--cl-utility-secondary)',
		},
	},
	variants: {},
	plugins: [],
	corePlugins: {
	   fontFamily: false,
	}
}
