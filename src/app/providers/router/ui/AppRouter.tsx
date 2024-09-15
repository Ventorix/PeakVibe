import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
	return (
		<Suspense fallback={<></>}>
			<Routes>
				{Object.values(routeConfig).map(({ path, element }) => (
					<Route key={path} path={path} element={<div>{element}</div>} />
				))}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
