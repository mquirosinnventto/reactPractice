class ReactController < ApplicationController

	def root
		@headers = ["Nombre", "Apellido", "Telefono", "Documento"]
		@data = [	["Monica",  "Quiros", "3213243", "071233213"],
							["Santiago", "Carmona", "123231221", "321331321"],
							["Alex", "Soto", "532123231", "112332131"]
						]
	end

end