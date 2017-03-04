/*
 *	GENERAL
 */
	clearifyAdmin.controller('GuideController', ['$scope', function($scope) {
		$scope.formsReadonly = false;
		$scope.showAngular = true;
		$scope.showJQuery = true;
		$scope.showExamples = true;

		$scope.loader = false;
		$scope.toggleLoader = function() {
			$scope.loader = !$scope.loader;
		};

		$scope.app;
	}]);

/*
 *	COLORES
 */
	clearifyAdmin.controller('ColorsController', ['$scope', function($scope) {
		$scope.changeColor = function(color) {
			$scope.$parent.app = color;
		}
	}]);

/*
 *	FORMULARIOS
 */
	clearifyAdmin.controller('FormsController', ['$scope', function($scope) {
		/*
		 *	DATEPICKER
		 */
			var date = new Date();

			$scope.dateOptions = {
				formatYear: 'yy',
				startingDay: 1,
				showWeeks: false
			};
			$scope.format = 'dd-MM-yyyy';
			$scope.popup = {
				opened: false
			};
			$scope.minDate = angular.copy(date);
			$scope.maxDate = new Date(date.getFullYear() + 1, date.getMonth(), date.getDate());

			$scope.open = function() {
				$scope.popup.opened = true;
			};

			$scope.setDate = function(year, month, day) {
				$scope.date = new Date(year, month, day);
			};
	}]);


/*
 *	MODALES
 */
	clearifyAdmin.controller('ModalsController', ['$scope', '$uibModal', function($scope, $uibModal) {
		$scope.animationsEnabled = true;

		$scope.open = function(size) {
			$uibModal.open({
				animation: $scope.animationsEnabled,
				controller: 'ModalController',
				templateUrl: 'modal_template.html',
				size: size
			});
		};
	}]);

	clearifyAdmin.controller('ModalController', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
		$scope.ok = function() {
			$uibModalInstance.close();
		};

		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};
	}]);

/*
 *	TABLAS
 */
	clearifyAdmin.controller('TablesController', ['$scope', 'NgTableParams', function($scope, NgTableParams) {
		$scope.users = [
			{ age: 30, name: 'Lucy', city: 'London' },
			{ age: 35, name: 'John', city: 'New York' },
			{ age: 32, name: 'Mary', city: 'Paris' },
			{ age: 29, name: 'Sam', city: 'Amsterdam' },
			{ age: 31, name: 'Ying San', city:'Tokyo' },
			{ age: 29, name: 'Sergio', city:'Madrid' },
			{ age: 26, name: 'Martha', city:'Sau Paulo' },
			{ age: 50, name: 'Tony', city: 'Rome' },
			{ age: 35, name: 'Paul', city: 'Melbourne' },
			{ age: 22, name: 'Victor', city: 'Barcelona' },
			{ age: 31, name: 'Rose', city: 'Michigan' },
			{ age: 31, name: 'Steven', city:'Greece' },
			{ age: 29, name: 'Susan', city:'Oxford' },
			{ age: 26, name: 'Phil', city:'Colorado' }
		];

		$scope.config = new NgTableParams(
			{
				count: 5
			}, {
				counts: [],
				paginationMaxBlocks: 13,
				paginationMinBlocks: 2,
				dataset: $scope.users
			}
		);
	}]);

/*
 *	NOTIFICACIONES
 */
	clearifyAdmin.controller('NotificationsController', ['$scope', function($scope) {
		var options = {
				delay: 5000,
				hide: true,
				buttons: {
					closer: false,
					sticker: false
				}
			};

		$scope.showSuccess = function() {
			options.title = '¡Acción realizada!';
			options.text = 'Alerta con mensaje satisfactorio';
			options.type = 'success';

			var notice = new PNotify(options);

			notice.get().click(function() {
				notice.remove();
			});
		};

		$scope.showError = function() {
			options.title = '¡Error!';
			options.text = 'Atención; ¡Ha ocurrido un error!';
			options.type = 'error';

			var notice = new PNotify(options);

			notice.get().click(function() {
				notice.remove();
			});
		};
	}]);