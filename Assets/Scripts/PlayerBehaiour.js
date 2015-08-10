#pragma strict

function Start () {

}

function Update () {
	
	if (Input.GetKeyDown(KeyCode.Space)){
		GetComponent(Rigidbody2D).velocity = new Vector2(0, 4);
	}
}