import { useStoreAuth } from '@/stores/storeAuth';
import ViewAuth from '@/views/ViewAuth.vue';
import ViewEditNote from '@/views/ViewEditNote.vue';
import ViewNotes from '@/views/ViewNotes.vue';
import ViewStats from '@/views/ViewStats.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Notes',
			component: ViewNotes
		},
		{
			path: '/edit-note/:id',
			name: 'EditNote',
			component: ViewEditNote
		},
		{
			path: '/stats',
			name: 'Stats',
			component: ViewStats
		},
		{
			path: '/auth',
			name: 'Auth',
			component: ViewAuth
		}
	]
});

router.beforeEach(async (to, from) => {
	const storeAuth = useStoreAuth();

	if (!storeAuth.user.id && to.name !== 'Auth') {
		return {
			name: 'Auth'
		};
	}

	if (storeAuth.user.id && to.name === 'Auth') {
		return {
			name: 'Notes'
		};
	}
});

export default router;
