/*:
	@module-configuration:

	@end-module-configuration

	@module-documentation:
	
	@end-module-documentation
*/
Key = function Key( entity, key ){
	/*:
		@meta-configuration:
			{
				"entity:required": "object",
				"key:required": "string"
			}
		@end-meta-configuration

		@method-documentation:
		@end-method-documentation
	*/
	if( this instanceof Key ){
		this.initialize( entity, key );
		this.extractDescriptors( );
	}else{
		return new Key( entity, key );
	}
};

Key.prototype.initialize = function initialize( entity, key ){
	/*:
		@meta-configuration:
			{
				"entity:required": "object",
				"key:required": "string"
			}
		@end-meta-configuration

		@method-documentation:
		@end-method-documentation
	*/
	this.entity = entity;
	this.key = key;	
};

Key.prototype.extractDescriptors = function extractDescriptors( ){
	/*:
		@method-documentation:
		@end-method-documentation
	*/
	this.descriptors = Object.getOwnPropertyDescriptor( this.entity, this.key );
};

Key.prototype.getValue = function getValue( ){
	/*:
		@method-documentation:
		@end-method-documentation
	*/
	this.extractDescriptors( );
	return this.descriptors.value;
};

Key.prototype.isWritable = function isWritable( ){
	/*:
		@method-documentation:
		@end-method-documentation
	*/
	this.extractDescriptors( );
	return this.descriptors.writable;
};

Key.prototype.isConfigurable = function isConfigurable( ){
	/*:
		@method-documentation:
		@end-method-documentation
	*/
	this.extractDescriptors( );
	return this.descriptors.configurable;
};

Key.prototype.isEnumerable = function isEnumerable( ){
	/*:
		@method-documentation:
		@end-method-documentation
	*/
	this.extractDescriptors( );
	return this.descriptors.enumerable;
};

Key.prototype.get = function get( ){
	/*:
		@method-documentation:
		@end-method-documentation
	*/
	this.extractDescriptors( );
	return this.descriptors.get( );
};

Key.prototype.set = function set( ){
	/*:
		@method-documentation:
		@end-method-documentation
	*/
	this.extractDescriptors( );
	return this.descriptors.set.apply( this.entity, arguments );
};

Key.prototype.toString = function toString( ){
	/*:
		@method-documentation:
		@end-method-documentation
	*/
	return this.key;
};
